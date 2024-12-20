import "./App.css";
import {
  keepPreviousData,
  QueryClient,
  QueryClientProvider,
  QueryFunctionContext,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { axiosInstance } from "./api/axios";
import { Whosin } from "./components/whosin";

axiosInstance.defaults.baseURL = "/api";
axiosInstance.defaults.headers.common["authorization"] =
  "Bearer BQAMeTnwHnLaP62idYuv9kW1o8vn2LD-5e2puYuBJf5UsFsYMs1z5oieGJ37ZyEA3XLtEZKKFXv4ibmEAPFpGiqRQBY8xwdpqIdLODZwaiGd4ODRV50";

export const queryFn = async <T,>({
  queryKey,
  signal,
}: QueryFunctionContext) => {
  const [key, params = {}] = queryKey as [string, Record<string, string>];
  const { data } = await axiosInstance.get<T>(key, {
    ...params,
    paramsSerializer: (p) => {
      const search = new URLSearchParams(p);
      return search.toString();
    },
    signal,
  });
  return data;
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn,
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      placeholderData: keepPreviousData,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen />
      <Whosin />
    </QueryClientProvider>
  );
}

export default App;
