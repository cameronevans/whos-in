import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  QueryFunctionContext,
  useIsRestoring,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { axiosInstance } from "./api/axios";
import { Whosin } from "./components/whosin";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { stringify, parse } from "zipson";

axiosInstance.defaults.baseURL = "/api";
axiosInstance.defaults.headers.common["authorization"] =
  "Discogs token=ZDSgbRINKDnoEqUgRgynEoVbFQFYScLjZKmVnfhJ";

export let remaining = 60;

export const queryFn = async <T,>({
  queryKey,
  signal,
}: QueryFunctionContext) => {
  const [key, params = {}] = queryKey as [string, Record<string, string>];
  const { data, headers } = await axiosInstance.get<T>(key, {
    ...params,
    paramsSerializer: (p) => {
      const search = new URLSearchParams(p);
      return search.toString();
    },
    signal,
  });
  remaining = headers["x-discogs-ratelimit-remaining"];
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn,
      networkMode: "offlineFirst",
      gcTime: 1000 * 60 * 60 * 24,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      placeholderData: keepPreviousData,
    },
  },
});

const persister = createSyncStoragePersister({
  storage: window.localStorage,
  serialize: stringify,
  deserialize: parse,
});

const Wrapper = () => {
  const isRestoring = useIsRestoring();
  return !isRestoring ? <Whosin /> : "restoring...";
};

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
      onSuccess={() => {
        // resume mutations after initial restore from localStorage was successful
        queryClient.resumePausedMutations().then(() => {
          queryClient.invalidateQueries();
        });
      }}
    >
      <ReactQueryDevtools initialIsOpen />
      <Wrapper />
    </PersistQueryClientProvider>
  );
}

export default App;
