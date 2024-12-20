/** This file was generated via `nx generate @scarlet/codegen:openapi` */
import {
  GetAlbumsByIdParams,
  AlbumObject,
  GetAlbumsParams,
  GetAlbumsByIdTracksParams,
  PagingSimplifiedTrackObject,
  GetArtistsByIdParams,
  ArtistObject,
  GetArtistsParams,
  GetArtistsByIdAlbumsParams,
  PagingArtistDiscographyAlbumObject,
  GetArtistsByIdTopTracksParams,
  GetArtistsByIdRelatedArtistsParams,
  GetShowsByIdParams,
  ShowObject,
  GetShowsParams,
  GetShowsByIdEpisodesParams,
  PagingSimplifiedEpisodeObject,
  GetEpisodesByIdParams,
  EpisodeObject,
  GetEpisodesParams,
  GetAudiobooksByIdParams,
  AudiobookObject,
  GetAudiobooksParams,
  GetAudiobooksByIdChaptersParams,
  PagingSimplifiedChapterObject,
  GetMeAudiobooksParams,
  PagingSavedAudiobookObject,
  PutMeAudiobooksParams,
  DeleteMeAudiobooksParams,
  GetMeAudiobooksContainsParams,
  GetChaptersByIdParams,
  ChapterObject,
  GetChaptersParams,
  GetTracksByIdParams,
  TrackObject,
  GetTracksParams,
  SearchParams,
  PrivateUserObject,
  GetPlaylistsByPlaylistIdParams,
  PlaylistObject,
  PutPlaylistsByPlaylistIdParams,
  GetPlaylistsByPlaylistIdTracksParams,
  PagingPlaylistTrackObject,
  PostPlaylistsByPlaylistIdTracksParams,
  PutPlaylistsByPlaylistIdTracksParams,
  DeletePlaylistsByPlaylistIdTracksParams,
  GetMePlaylistsParams,
  PagingPlaylistObject,
  GetMeAlbumsParams,
  PagingSavedAlbumObject,
  PutMeAlbumsParams,
  DeleteMeAlbumsParams,
  GetMeAlbumsContainsParams,
  GetMeTracksParams,
  PagingSavedTrackObject,
  PutMeTracksParams,
  DeleteMeTracksParams,
  GetMeTracksContainsParams,
  GetMeEpisodesParams,
  PagingSavedEpisodeObject,
  PutMeEpisodesParams,
  DeleteMeEpisodesParams,
  GetMeEpisodesContainsParams,
  GetMeShowsParams,
  PagingSavedShowObject,
  PutMeShowsParams,
  DeleteMeShowsParams,
  GetMeShowsContainsParams,
  GetUsersByUserIdParams,
  PublicUserObject,
  GetUsersByUserIdPlaylistsParams,
  PostUsersByUserIdPlaylistsParams,
  PutPlaylistsByPlaylistIdFollowersParams,
  DeletePlaylistsByPlaylistIdFollowersParams,
  GetBrowseFeaturedPlaylistsParams,
  PagingFeaturedPlaylistObject,
  GetBrowseCategoriesParams,
  GetBrowseCategoriesByCategoryIdParams,
  CategoryObject,
  GetBrowseCategoriesByCategoryIdPlaylistsParams,
  GetPlaylistsByPlaylistIdImagesParams,
  ImageObject,
  PutPlaylistsByPlaylistIdImagesParams,
  GetBrowseNewReleasesParams,
  GetMeFollowingParams,
  PutMeFollowingParams,
  DeleteMeFollowingParams,
  GetMeFollowingContainsParams,
  GetPlaylistsByPlaylistIdFollowersContainsParams,
  GetAudioFeaturesParams,
  GetAudioFeaturesByIdParams,
  AudioFeaturesObject,
  GetAudioAnalysisByIdParams,
  AudioAnalysisObject,
  GetRecommendationsParams,
  RecommendationsObject,
  GetMePlayerParams,
  CurrentlyPlayingContextObject,
  GetMePlayerCurrentlyPlayingParams,
  CurrentlyPlayingObject,
  PutMePlayerPlayParams,
  PutMePlayerPauseParams,
  PostMePlayerNextParams,
  PostMePlayerPreviousParams,
  PutMePlayerSeekParams,
  PutMePlayerRepeatParams,
  PutMePlayerVolumeParams,
  PutMePlayerShuffleParams,
  GetMePlayerRecentlyPlayedParams,
  CursorPagingPlayHistoryObject,
  QueueObject,
  PostMePlayerQueueParams,
  GetMeTopArtistsParams,
  PagingArtistObject,
  GetMeTopTracksParams,
  PagingTrackObject,
  // TODO: not in generated import?????
  PagingObject,
  PagingSimplifiedAlbumObject,
  CursorPagingSimplifiedArtistObject,
  DeviceObject,
  PagingSimplifiedShowObject,
  PagingSimplifiedAudiobookObject,
  SimplifiedShowObject,
} from "./index";
import { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import {
  useQuery,
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { axiosInstance } from "./axios";

// TODO: generator deps
import { UseQueryOptions, UseQueryResult } from "@tanstack/react-query";

type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K;
}[keyof T];

type HasRequiredField<T> = RequiredKeys<T> extends never ? false : true;

export type AxiosConfig<T, P = undefined> = P extends Record<string, unknown>
  ? Omit<AxiosRequestConfig<T>, "params"> & { params: P }
  : AxiosRequestConfig<T>;

export type CustomHook<T, P = undefined> = HasRequiredField<P> extends true
  ? {
      (
        axiosConfig: Omit<AxiosRequestConfig<T>, "params"> & { params: P },
        options?: Omit<UseQueryOptions<T>, "queryKey">
      ): UseQueryResult<T>;
    }
  : P extends object
  ? {
      (
        axiosConfig?: Omit<AxiosRequestConfig<T>, "params"> & {
          params?: P;
        },
        options?: Omit<UseQueryOptions<T>, "queryKey">
      ): UseQueryResult<T>;
    }
  :
      | {
          (
            axiosConfig?: AxiosRequestConfig<T>,
            options?: Omit<UseQueryOptions<T>, "queryKey">
          ): UseQueryResult<T>;
        }
      | {
          (): UseQueryResult<T>;
        };

/**
* Get Spotify catalog information for a single album.

*/
export const useAlbumsById: CustomHook<AlbumObject, GetAlbumsByIdParams> = (
  axiosConfig,
  options
) =>
  useQuery<AlbumObject>({
    queryKey: [`/albums/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for multiple albums identified by their Spotify IDs.

*/
export const useAlbums: CustomHook<
  {
    albums: AlbumObject[];
  },
  GetAlbumsParams
> = (axiosConfig, options) =>
  useQuery<{
    albums: AlbumObject[];
  }>({
    queryKey: axiosConfig ? ["/albums", axiosConfig] : ["/albums"],
    ...options,
  });
/**
* Get Spotify catalog information about an album’s tracks.
Optional parameters can be used to limit the number of tracks returned.

*/
export const useAlbumsByIdTracks: CustomHook<
  PagingSimplifiedTrackObject,
  GetAlbumsByIdTracksParams
> = (axiosConfig, options) =>
  useQuery<PagingSimplifiedTrackObject>({
    queryKey: [`/albums/${axiosConfig.params.id}/tracks`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for a single artist identified by their unique Spotify ID.

*/
export const useArtistsById: CustomHook<ArtistObject, GetArtistsByIdParams> = (
  axiosConfig,
  options
) =>
  useQuery<ArtistObject>({
    queryKey: [`/artists/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for several artists based on their Spotify IDs.

*/
export const useArtists: CustomHook<
  {
    artists: ArtistObject[];
  },
  GetArtistsParams
> = (axiosConfig, options) =>
  useQuery<{
    artists: ArtistObject[];
  }>({
    queryKey: axiosConfig ? ["/artists", axiosConfig] : ["/artists"],
    ...options,
  });
/**
* Get Spotify catalog information about an artist's albums.

*/
export const useArtistsByIdAlbums: CustomHook<
  PagingArtistDiscographyAlbumObject,
  GetArtistsByIdAlbumsParams
> = (axiosConfig, options) =>
  useQuery<PagingArtistDiscographyAlbumObject>({
    queryKey: [`/artists/${axiosConfig.params.id}/albums`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information about an artist's top tracks by country.

*/
export const useArtistsByIdTopTracks: CustomHook<
  {
    tracks: TrackObject[];
  },
  GetArtistsByIdTopTracksParams
> = (axiosConfig, options) =>
  useQuery<{
    tracks: TrackObject[];
  }>({
    queryKey: [`/artists/${axiosConfig.params.id}/top-tracks`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information about artists similar to a given artist. Similarity is based on analysis of the Spotify community's listening history.

*/
export const useArtistsByIdRelatedArtists: CustomHook<
  {
    artists: ArtistObject[];
  },
  GetArtistsByIdRelatedArtistsParams
> = ({ params: { id, ...params }, ...axiosConfig }, options) =>
  useQuery<{
    artists: ArtistObject[];
  }>({
    queryKey: [`/artists/${id}/related-artists`, { ...axiosConfig, params }],
    ...options,
  });
/**
* Get Spotify catalog information for a single show identified by its
unique Spotify ID.

*/
export const useShowsById: CustomHook<ShowObject, GetShowsByIdParams> = (
  axiosConfig,
  options
) =>
  useQuery<ShowObject>({
    queryKey: [`/shows/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for several shows based on their Spotify IDs.

*/
export const useShows: CustomHook<
  {
    shows: SimplifiedShowObject[];
  },
  GetShowsParams
> = (axiosConfig, options) =>
  useQuery<{
    shows: SimplifiedShowObject[];
  }>({
    queryKey: axiosConfig ? ["/shows", axiosConfig] : ["/shows"],
    ...options,
  });
/**
* Get Spotify catalog information about an show’s episodes. Optional parameters can be used to limit the number of episodes returned.

*/
export const useShowsByIdEpisodes: CustomHook<
  PagingSimplifiedEpisodeObject,
  GetShowsByIdEpisodesParams
> = (axiosConfig, options) =>
  useQuery<PagingSimplifiedEpisodeObject>({
    queryKey: [`/shows/${axiosConfig.params.id}/episodes`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for a single episode identified by its
unique Spotify ID.

*/
export const useEpisodesById: CustomHook<
  EpisodeObject,
  GetEpisodesByIdParams
> = (axiosConfig, options) =>
  useQuery<EpisodeObject>({
    queryKey: [`/episodes/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for several episodes based on their Spotify IDs.

*/
export const useEpisodes: CustomHook<
  {
    episodes: EpisodeObject[];
  },
  GetEpisodesParams
> = (axiosConfig, options) =>
  useQuery<{
    episodes: EpisodeObject[];
  }>({
    queryKey: axiosConfig ? ["/episodes", axiosConfig] : ["/episodes"],
    ...options,
  });
/**
* Get Spotify catalog information for a single audiobook. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useAudiobooksById: CustomHook<
  AudiobookObject,
  GetAudiobooksByIdParams
> = (axiosConfig, options) =>
  useQuery<AudiobookObject>({
    queryKey: [`/audiobooks/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for several audiobooks identified by their Spotify IDs. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useAudiobooks: CustomHook<
  {
    audiobooks: AudiobookObject[];
  },
  GetAudiobooksParams
> = (axiosConfig, options) =>
  useQuery<{
    audiobooks: AudiobookObject[];
  }>({
    queryKey: axiosConfig ? ["/audiobooks", axiosConfig] : ["/audiobooks"],
    ...options,
  });
/**
* Get Spotify catalog information about an audiobook's chapters. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useAudiobooksByIdChapters: CustomHook<
  PagingSimplifiedChapterObject,
  GetAudiobooksByIdChaptersParams
> = (axiosConfig, options) =>
  useQuery<PagingSimplifiedChapterObject>({
    queryKey: [`/audiobooks/${axiosConfig.params.id}/chapters`, axiosConfig],
    ...options,
  });
/**
* Get a list of the audiobooks saved in the current Spotify user's 'Your Music' library.

*/
export const useMeAudiobooks: CustomHook<
  PagingSavedAudiobookObject,
  GetMeAudiobooksParams
> = (axiosConfig, options) =>
  useQuery<PagingSavedAudiobookObject>({
    queryKey: axiosConfig
      ? ["/me/audiobooks", axiosConfig]
      : ["/me/audiobooks"],
    ...options,
  });
export const putMeAudiobooksMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMeAudiobooksParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/audiobooks",
    method: "put",
  });
/**
* Save one or more audiobooks to the current Spotify user's library.

*/
export const usePutMeAudiobooks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMeAudiobooksParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeAudiobooksMutation,
    ...options,
  });
export const deleteMeAudiobooksMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, DeleteMeAudiobooksParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/audiobooks",
    method: "delete",
  });
/**
* Remove one or more audiobooks from the Spotify user's library.

*/
export const useDeleteMeAudiobooks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, DeleteMeAudiobooksParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeAudiobooksMutation,
    ...options,
  });
/**
* Check if one or more audiobooks are already saved in the current Spotify user's library.

*/
export const useMeAudiobooksContains: CustomHook<
  boolean[],
  GetMeAudiobooksContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/audiobooks/contains", axiosConfig]
      : ["/me/audiobooks/contains"],
    ...options,
  });
/**
* Get Spotify catalog information for a single audiobook chapter. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useChaptersById: CustomHook<
  ChapterObject,
  GetChaptersByIdParams
> = (axiosConfig, options) =>
  useQuery<ChapterObject>({
    queryKey: [`/chapters/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for several audiobook chapters identified by their Spotify IDs. Chapters are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useChapters: CustomHook<
  {
    chapters: ChapterObject[];
  },
  GetChaptersParams
> = (axiosConfig, options) =>
  useQuery<{
    chapters: ChapterObject[];
  }>({
    queryKey: axiosConfig ? ["/chapters", axiosConfig] : ["/chapters"],
    ...options,
  });
/**
* Get Spotify catalog information for a single track identified by its
unique Spotify ID.

*/
export const useTracksById: CustomHook<TrackObject, GetTracksByIdParams> = (
  axiosConfig,
  options
) =>
  useQuery<TrackObject>({
    queryKey: [`/tracks/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get Spotify catalog information for multiple tracks based on their Spotify IDs.

*/
export const useTracks: CustomHook<
  {
    tracks: TrackObject[];
  },
  GetTracksParams
> = (axiosConfig, options) =>
  useQuery<{
    tracks: TrackObject[];
  }>({
    queryKey: axiosConfig ? ["/tracks", axiosConfig] : ["/tracks"],
    ...options,
  });
/**
* Get Spotify catalog information about albums, artists, playlists, tracks, shows, episodes or audiobooks
that match a keyword string. Audiobooks are only available within the US, UK, Canada, Ireland, New Zealand and Australia markets.

*/
export const useSearch: CustomHook<
  {
    tracks?: PagingTrackObject;
    artists?: PagingArtistObject;
    albums?: PagingSimplifiedAlbumObject;
    playlists?: PagingPlaylistObject;
    shows?: PagingSimplifiedShowObject;
    episodes?: PagingSimplifiedEpisodeObject;
    audiobooks?: PagingSimplifiedAudiobookObject;
  },
  SearchParams
> = (axiosConfig, options) =>
  useQuery<{
    tracks?: PagingTrackObject;
    artists?: PagingArtistObject;
    albums?: PagingSimplifiedAlbumObject;
    playlists?: PagingPlaylistObject;
    shows?: PagingSimplifiedShowObject;
    episodes?: PagingSimplifiedEpisodeObject;
    audiobooks?: PagingSimplifiedAudiobookObject;
  }>({
    queryKey: axiosConfig ? ["/search", axiosConfig] : ["/search"],
    ...options,
  });
/**
* Get detailed profile information about the current user (including the
current user's username).

*/
export const useMe: CustomHook<PrivateUserObject> = (axiosConfig, options) =>
  useQuery<PrivateUserObject>({
    queryKey: axiosConfig ? ["/me", axiosConfig] : ["/me"],
    ...options,
  });
/**
* Get a playlist owned by a Spotify user.

*/
export const usePlaylistsByPlaylistId: CustomHook<
  PlaylistObject,
  GetPlaylistsByPlaylistIdParams
> = (axiosConfig, options) =>
  useQuery<PlaylistObject>({
    queryKey: [`/playlists/${axiosConfig.params.playlist_id}`, axiosConfig],
    ...options,
  });
export const putPlaylistsByPlaylistIdMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** The new name for the playlist, for example `"My New Playlist Title"`
       */
      name?: string;
      /** The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
       */
      public?: boolean;
      /** If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
    _**Note**: You can only set `collaborative` to `true` on non-public playlists._
     */
      collaborative?: boolean;
      /** Value for playlist description as displayed in Spotify Clients and in the Web API.
       */
      description?: string;
      [key: string]: any;
    },
    PutPlaylistsByPlaylistIdParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}`,
    method: "put",
  });
/**
* Change a playlist's name and public/private state. (The user must, of
course, own the playlist.)

*/
export const usePutPlaylistsByPlaylistId = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** The new name for the playlist, for example `"My New Playlist Title"`
           */
          name?: string;
          /** The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
           */
          public?: boolean;
          /** If `true`, the playlist will become collaborative and other users will be able to modify the playlist in their Spotify client. <br/>
    _**Note**: You can only set `collaborative` to `true` on non-public playlists._
     */
          collaborative?: boolean;
          /** Value for playlist description as displayed in Spotify Clients and in the Web API.
           */
          description?: string;
          [key: string]: any;
        },
        PutPlaylistsByPlaylistIdParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putPlaylistsByPlaylistIdMutation,
    ...options,
  });
/**
* Get full details of the items of a playlist owned by a Spotify user.

*/
export const usePlaylistsByPlaylistIdTracks: CustomHook<
  PagingPlaylistTrackObject,
  GetPlaylistsByPlaylistIdTracksParams
> = (axiosConfig, options) =>
  useQuery<PagingPlaylistTrackObject>({
    queryKey: [
      `/playlists/${axiosConfig.params.playlist_id}/tracks`,
      axiosConfig,
    ],
    ...options,
  });
export const postPlaylistsByPlaylistIdTracksMutation: MutationFunction<
  AxiosResponse<{
    snapshot_id?: string;
  }>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
       */
      uris?: string[];
      /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
       */
      position?: number;
      [key: string]: any;
    },
    PostPlaylistsByPlaylistIdTracksParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/tracks`,
    method: "post",
  });
/**
* Add one or more items to a user's playlist.

*/
export const usePostPlaylistsByPlaylistIdTracks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<{
        snapshot_id?: string;
      }>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
           */
          uris?: string[];
          /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
           */
          position?: number;
          [key: string]: any;
        },
        PostPlaylistsByPlaylistIdTracksParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: postPlaylistsByPlaylistIdTracksMutation,
    ...options,
  });
export const putPlaylistsByPlaylistIdTracksMutation: MutationFunction<
  AxiosResponse<{
    snapshot_id?: string;
  }>,
  AxiosConfig<
    {
      uris?: string[];
      /** The position of the first item to be reordered.
       */
      range_start?: number;
      /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
       */
      insert_before?: number;
      /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
       */
      range_length?: number;
      /** The playlist's snapshot ID against which you want to make the changes.
       */
      snapshot_id?: string;
      [key: string]: any;
    },
    PutPlaylistsByPlaylistIdTracksParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/tracks`,
    method: "put",
  });
/**
* Either reorder or replace items in a playlist depending on the request's parameters.
To reorder items, include `range_start`, `insert_before`, `range_length` and `snapshot_id` in the request's body.
To replace items, include `uris` as either a query parameter or in the request's body.
Replacing items in a playlist will overwrite its existing items. This operation can be used for replacing or clearing items in a playlist.
<br/>
**Note**: Replace and reorder are mutually exclusive operations which share the same endpoint, but have different parameters.
These operations can't be applied together in a single request.

*/
export const usePutPlaylistsByPlaylistIdTracks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<{
        snapshot_id?: string;
      }>,
      AxiosError,
      AxiosConfig<
        {
          uris?: string[];
          /** The position of the first item to be reordered.
           */
          range_start?: number;
          /** The position where the items should be inserted.<br/>To reorder the items to the end of the playlist, simply set _insert_before_ to the position after the last item.<br/>Examples:<br/>To reorder the first item to the last position in a playlist with 10 items, set _range_start_ to 0, and _insert_before_ to 10.<br/>To reorder the last item in a playlist with 10 items to the start of the playlist, set _range_start_ to 9, and _insert_before_ to 0.
           */
          insert_before?: number;
          /** The amount of items to be reordered. Defaults to 1 if not set.<br/>The range of items to be reordered begins from the _range_start_ position, and includes the _range_length_ subsequent items.<br/>Example:<br/>To move the items at index 9-10 to the start of the playlist, _range_start_ is set to 9, and _range_length_ is set to 2.
           */
          range_length?: number;
          /** The playlist's snapshot ID against which you want to make the changes.
           */
          snapshot_id?: string;
          [key: string]: any;
        },
        PutPlaylistsByPlaylistIdTracksParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putPlaylistsByPlaylistIdTracksMutation,
    ...options,
  });
export const deletePlaylistsByPlaylistIdTracksMutation: MutationFunction<
  AxiosResponse<{
    snapshot_id?: string;
  }>,
  AxiosConfig<
    {
      /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
    For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
     */
      tracks: {
        /** Spotify URI */
        uri?: string;
      }[];
      /** The playlist's snapshot ID against which you want to make the changes.
    The API will validate that the specified items exist and in the specified positions and make the changes,
    even if more recent changes have been made to the playlist.
     */
      snapshot_id?: string;
    },
    DeletePlaylistsByPlaylistIdTracksParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/tracks`,
    method: "delete",
  });
/**
* Remove one or more items from a user's playlist.

*/
export const useDeletePlaylistsByPlaylistIdTracks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<{
        snapshot_id?: string;
      }>,
      AxiosError,
      AxiosConfig<
        {
          /** An array of objects containing [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) of the tracks or episodes to remove.
    For example: `{ "tracks": [{ "uri": "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" },{ "uri": "spotify:track:1301WleyT98MSxVHPZCA6M" }] }`. A maximum of 100 objects can be sent at once.
     */
          tracks: {
            /** Spotify URI */
            uri?: string;
          }[];
          /** The playlist's snapshot ID against which you want to make the changes.
    The API will validate that the specified items exist and in the specified positions and make the changes,
    even if more recent changes have been made to the playlist.
     */
          snapshot_id?: string;
        },
        DeletePlaylistsByPlaylistIdTracksParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deletePlaylistsByPlaylistIdTracksMutation,
    ...options,
  });
/**
* Get a list of the playlists owned or followed by the current Spotify
user.

*/
export const useMePlaylists: CustomHook<
  PagingPlaylistObject,
  GetMePlaylistsParams
> = (axiosConfig, options) =>
  useQuery<PagingPlaylistObject>({
    queryKey: axiosConfig ? ["/me/playlists", axiosConfig] : ["/me/playlists"],
    ...options,
  });
/**
* Get a list of the albums saved in the current Spotify user's 'Your Music' library.

*/
export const useMeAlbums: CustomHook<
  PagingSavedAlbumObject,
  GetMeAlbumsParams
> = (axiosConfig, options) =>
  useQuery<PagingSavedAlbumObject>({
    queryKey: axiosConfig ? ["/me/albums", axiosConfig] : ["/me/albums"],
    ...options,
  });
export const putMeAlbumsMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids?: string[];
      [key: string]: any;
    },
    PutMeAlbumsParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/albums",
    method: "put",
  });
/**
* Save one or more albums to the current user's 'Your Music' library.

*/
export const usePutMeAlbums = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids?: string[];
          [key: string]: any;
        },
        PutMeAlbumsParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeAlbumsMutation,
    ...options,
  });
export const deleteMeAlbumsMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids?: string[];
      [key: string]: any;
    },
    DeleteMeAlbumsParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/albums",
    method: "delete",
  });
/**
* Remove one or more albums from the current user's 'Your Music' library.

*/
export const useDeleteMeAlbums = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids?: string[];
          [key: string]: any;
        },
        DeleteMeAlbumsParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeAlbumsMutation,
    ...options,
  });
/**
* Check if one or more albums is already saved in the current Spotify user's 'Your Music' library.

*/
export const useMeAlbumsContains: CustomHook<
  boolean[],
  GetMeAlbumsContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/albums/contains", axiosConfig]
      : ["/me/albums/contains"],
    ...options,
  });
/**
* Get a list of the songs saved in the current Spotify user's 'Your Music' library.

*/
export const useMeTracks: CustomHook<
  PagingSavedTrackObject,
  GetMeTracksParams
> = (axiosConfig, options) =>
  useQuery<PagingSavedTrackObject>({
    queryKey: axiosConfig ? ["/me/tracks", axiosConfig] : ["/me/tracks"],
    ...options,
  });
export const putMeTracksMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids: string[];
      [key: string]: any;
    },
    PutMeTracksParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/tracks",
    method: "put",
  });
/**
* Save one or more tracks to the current user's 'Your Music' library.

*/
export const usePutMeTracks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids: string[];
          [key: string]: any;
        },
        PutMeTracksParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeTracksMutation,
    ...options,
  });
export const deleteMeTracksMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids?: string[];
      [key: string]: any;
    },
    DeleteMeTracksParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/tracks",
    method: "delete",
  });
/**
* Remove one or more tracks from the current user's 'Your Music' library.

*/
export const useDeleteMeTracks = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids?: string[];
          [key: string]: any;
        },
        DeleteMeTracksParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeTracksMutation,
    ...options,
  });
/**
* Check if one or more tracks is already saved in the current Spotify user's 'Your Music' library.

*/
export const useMeTracksContains: CustomHook<
  boolean[],
  GetMeTracksContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/tracks/contains", axiosConfig]
      : ["/me/tracks/contains"],
    ...options,
  });
/**
* Get a list of the episodes saved in the current Spotify user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

*/
export const useMeEpisodes: CustomHook<
  PagingSavedEpisodeObject,
  GetMeEpisodesParams
> = (axiosConfig, options) =>
  useQuery<PagingSavedEpisodeObject>({
    queryKey: axiosConfig ? ["/me/episodes", axiosConfig] : ["/me/episodes"],
    ...options,
  });
export const putMeEpisodesMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids: string[];
      [key: string]: any;
    },
    PutMeEpisodesParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/episodes",
    method: "put",
  });
/**
* Save one or more episodes to the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

*/
export const usePutMeEpisodes = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids: string[];
          [key: string]: any;
        },
        PutMeEpisodesParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeEpisodesMutation,
    ...options,
  });
export const deleteMeEpisodesMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids?: string[];
      [key: string]: any;
    },
    DeleteMeEpisodesParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/episodes",
    method: "delete",
  });
/**
* Remove one or more episodes from the current user's library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer).

*/
export const useDeleteMeEpisodes = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids?: string[];
          [key: string]: any;
        },
        DeleteMeEpisodesParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeEpisodesMutation,
    ...options,
  });
/**
* Check if one or more episodes is already saved in the current Spotify user's 'Your Episodes' library.<br/>
This API endpoint is in __beta__ and could change without warning. Please share any feedback that you have, or issues that you discover, in our [developer community forum](https://community.spotify.com/t5/Spotify-for-Developers/bd-p/Spotify_Developer)..

*/
export const useMeEpisodesContains: CustomHook<
  boolean[],
  GetMeEpisodesContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/episodes/contains", axiosConfig]
      : ["/me/episodes/contains"],
    ...options,
  });
/**
* Get a list of shows saved in the current Spotify user's library. Optional parameters can be used to limit the number of shows returned.

*/
export const useMeShows: CustomHook<PagingSavedShowObject, GetMeShowsParams> = (
  axiosConfig,
  options
) =>
  useQuery<PagingSavedShowObject>({
    queryKey: axiosConfig ? ["/me/shows", axiosConfig] : ["/me/shows"],
    ...options,
  });
export const putMeShowsMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
    A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
      ids?: string[];
    },
    PutMeShowsParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/shows",
    method: "put",
  });
/**
* Save one or more shows to current Spotify user's library.

*/
export const usePutMeShows = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
    A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
          ids?: string[];
        },
        PutMeShowsParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeShowsMutation,
    ...options,
  });
export const deleteMeShowsMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
    A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
      ids?: string[];
    },
    DeleteMeShowsParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/shows",
    method: "delete",
  });
/**
* Delete one or more shows from current Spotify user's library.

*/
export const useDeleteMeShows = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
    A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
          ids?: string[];
        },
        DeleteMeShowsParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeShowsMutation,
    ...options,
  });
/**
* Check if one or more shows is already saved in the current Spotify user's library.

*/
export const useMeShowsContains: CustomHook<
  boolean[],
  GetMeShowsContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/shows/contains", axiosConfig]
      : ["/me/shows/contains"],
    ...options,
  });
/**
* Get public profile information about a Spotify user.

*/
export const useUsersByUserId: CustomHook<
  PublicUserObject,
  GetUsersByUserIdParams
> = (axiosConfig, options) =>
  useQuery<PublicUserObject>({
    queryKey: [`/users/${axiosConfig.params.user_id}`, axiosConfig],
    ...options,
  });
/**
* Get a list of the playlists owned or followed by a Spotify user.

*/
export const useUsersByUserIdPlaylists: CustomHook<
  PagingPlaylistObject,
  GetUsersByUserIdPlaylistsParams
> = (axiosConfig, options) =>
  useQuery<PagingPlaylistObject>({
    queryKey: [`/users/${axiosConfig.params.user_id}/playlists`, axiosConfig],
    ...options,
  });
export const postUsersByUserIdPlaylistsMutation: MutationFunction<
  AxiosResponse<PlaylistObject>,
  AxiosConfig<
    {
      /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
       */
      name: string;
      /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
       */
      public?: boolean;
      /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
       */
      collaborative?: boolean;
      /** value for playlist description as displayed in Spotify Clients and in the Web API.
       */
      description?: string;
      [key: string]: any;
    },
    PostUsersByUserIdPlaylistsParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/users/${axiosConfig.params.user_id}/playlists`,
    method: "post",
  });
/**
* Create a playlist for a Spotify user. (The playlist will be empty until
you [add tracks](/documentation/web-api/reference/add-tracks-to-playlist).)
Each user is generally limited to a maximum of 11000 playlists.

*/
export const usePostUsersByUserIdPlaylists = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<PlaylistObject>,
      AxiosError,
      AxiosConfig<
        {
          /** The name for the new playlist, for example `"Your Coolest Playlist"`. This name does not need to be unique; a user may have several playlists with the same name.
           */
          name: string;
          /** Defaults to `true`. The playlist's public/private status (if it should be added to the user's profile or not): `true` the playlist will be public, `false` the playlist will be private. To be able to create private playlists, the user must have granted the `playlist-modify-private` [scope](/documentation/web-api/concepts/scopes/#list-of-scopes). For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
           */
          public?: boolean;
          /** Defaults to `false`. If `true` the playlist will be collaborative. _**Note**: to create a collaborative playlist you must also set `public` to `false`. To create collaborative playlists you must have granted `playlist-modify-private` and `playlist-modify-public` [scopes](/documentation/web-api/concepts/scopes/#list-of-scopes)._
           */
          collaborative?: boolean;
          /** value for playlist description as displayed in Spotify Clients and in the Web API.
           */
          description?: string;
          [key: string]: any;
        },
        PostUsersByUserIdPlaylistsParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: postUsersByUserIdPlaylistsMutation,
    ...options,
  });
export const putPlaylistsByPlaylistIdFollowersMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
       */
      public?: boolean;
      [key: string]: any;
    },
    PutPlaylistsByPlaylistIdFollowersParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/followers`,
    method: "put",
  });
/**
* Add the current user as a follower of a playlist.

*/
export const usePutPlaylistsByPlaylistIdFollowers = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
           */
          public?: boolean;
          [key: string]: any;
        },
        PutPlaylistsByPlaylistIdFollowersParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putPlaylistsByPlaylistIdFollowersMutation,
    ...options,
  });
export const deletePlaylistsByPlaylistIdFollowersMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, DeletePlaylistsByPlaylistIdFollowersParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/followers`,
    method: "delete",
  });
/**
* Remove the current user as a follower of a playlist.

*/
export const useDeletePlaylistsByPlaylistIdFollowers = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, DeletePlaylistsByPlaylistIdFollowersParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deletePlaylistsByPlaylistIdFollowersMutation,
    ...options,
  });
/**
* Get a list of Spotify featured playlists (shown, for example, on a Spotify player's 'Browse' tab).

*/
export const useBrowseFeaturedPlaylists: CustomHook<
  PagingFeaturedPlaylistObject,
  GetBrowseFeaturedPlaylistsParams
> = (axiosConfig, options) =>
  useQuery<PagingFeaturedPlaylistObject>({
    queryKey: axiosConfig
      ? ["/browse/featured-playlists", axiosConfig]
      : ["/browse/featured-playlists"],
    ...options,
  });
/**
* Get a list of categories used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

*/
export const useBrowseCategories: CustomHook<
  {
    categories: PagingObject & {
      items?: CategoryObject[];
    };
  },
  GetBrowseCategoriesParams
> = (axiosConfig, options) =>
  useQuery<{
    categories: PagingObject & {
      items?: CategoryObject[];
    };
  }>({
    queryKey: axiosConfig
      ? ["/browse/categories", axiosConfig]
      : ["/browse/categories"],
    ...options,
  });
/**
* Get a single category used to tag items in Spotify (on, for example, the Spotify player’s “Browse” tab).

*/
export const useBrowseCategoriesByCategoryId: CustomHook<
  CategoryObject,
  GetBrowseCategoriesByCategoryIdParams
> = (axiosConfig, options) =>
  useQuery<CategoryObject>({
    queryKey: [
      `/browse/categories/${axiosConfig.params.category_id}`,
      axiosConfig,
    ],
    ...options,
  });
/**
* Get a list of Spotify playlists tagged with a particular category.

*/
export const useBrowseCategoriesByCategoryIdPlaylists: CustomHook<
  PagingFeaturedPlaylistObject,
  GetBrowseCategoriesByCategoryIdPlaylistsParams
> = (axiosConfig, options) =>
  useQuery<PagingFeaturedPlaylistObject>({
    queryKey: [
      `/browse/categories/${axiosConfig.params.category_id}/playlists`,
      axiosConfig,
    ],
    ...options,
  });
/**
* Get the current image associated with a specific playlist.

*/
export const usePlaylistsByPlaylistIdImages: CustomHook<
  ImageObject[],
  GetPlaylistsByPlaylistIdImagesParams
> = (axiosConfig, options) =>
  useQuery<ImageObject[]>({
    queryKey: [
      `/playlists/${axiosConfig.params.playlist_id}/images`,
      axiosConfig,
    ],
    ...options,
  });
export const putPlaylistsByPlaylistIdImagesMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<string, PutPlaylistsByPlaylistIdImagesParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: `/playlists/${axiosConfig.params.playlist_id}/images`,
    method: "put",
  });
/**
* Replace the image used to represent a specific playlist.

*/
export const usePutPlaylistsByPlaylistIdImages = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<string, PutPlaylistsByPlaylistIdImagesParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putPlaylistsByPlaylistIdImagesMutation,
    ...options,
  });
/**
* Get a list of new album releases featured in Spotify (shown, for example, on a Spotify player’s “Browse” tab).

*/
export const useBrowseNewReleases: CustomHook<
  {
    albums: PagingSimplifiedAlbumObject;
  },
  GetBrowseNewReleasesParams
> = (axiosConfig, options) =>
  useQuery<{
    albums: PagingSimplifiedAlbumObject;
  }>({
    queryKey: axiosConfig
      ? ["/browse/new-releases", axiosConfig]
      : ["/browse/new-releases"],
    ...options,
  });
/**
* Get the current user's followed artists.

*/
export const useMeFollowing: CustomHook<
  {
    artists: CursorPagingSimplifiedArtistObject;
  },
  GetMeFollowingParams
> = (axiosConfig, options) =>
  useQuery<{
    artists: CursorPagingSimplifiedArtistObject;
  }>({
    queryKey: axiosConfig ? ["/me/following", axiosConfig] : ["/me/following"],
    ...options,
  });
export const putMeFollowingMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
    For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
     */
      ids: string[];
      [key: string]: any;
    },
    PutMeFollowingParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/following",
    method: "put",
  });
/**
* Add the current user as a follower of one or more artists or other Spotify users.

*/
export const usePutMeFollowing = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
    For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
     */
          ids: string[];
          [key: string]: any;
        },
        PutMeFollowingParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMeFollowingMutation,
    ...options,
  });
export const deleteMeFollowingMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
       */
      ids?: string[];
      [key: string]: any;
    },
    DeleteMeFollowingParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/following",
    method: "delete",
  });
/**
* Remove the current user as a follower of one or more artists or other Spotify users.

*/
export const useDeleteMeFollowing = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
           */
          ids?: string[];
          [key: string]: any;
        },
        DeleteMeFollowingParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: deleteMeFollowingMutation,
    ...options,
  });
/**
* Check to see if the current user is following one or more artists or other Spotify users.

*/
export const useMeFollowingContains: CustomHook<
  boolean[],
  GetMeFollowingContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: axiosConfig
      ? ["/me/following/contains", axiosConfig]
      : ["/me/following/contains"],
    ...options,
  });
/**
* Check to see if the current user is following a specified playlist.

*/
export const usePlaylistsByPlaylistIdFollowersContains: CustomHook<
  boolean[],
  GetPlaylistsByPlaylistIdFollowersContainsParams
> = (axiosConfig, options) =>
  useQuery<boolean[]>({
    queryKey: [
      `/playlists/${axiosConfig.params.playlist_id}/followers/contains`,
      axiosConfig,
    ],
    ...options,
  });
/**
* Get audio features for multiple tracks based on their Spotify IDs.

*/
export const useAudioFeatures: CustomHook<
  {
    audio_features: AudioFeaturesObject[];
  },
  GetAudioFeaturesParams
> = (axiosConfig, options) =>
  useQuery<{
    audio_features: AudioFeaturesObject[];
  }>({
    queryKey: axiosConfig
      ? ["/audio-features", axiosConfig]
      : ["/audio-features"],
    ...options,
  });
/**
* Get audio feature information for a single track identified by its unique
Spotify ID.

*/
export const useAudioFeaturesById: CustomHook<
  AudioFeaturesObject,
  GetAudioFeaturesByIdParams
> = (axiosConfig, options) =>
  useQuery<AudioFeaturesObject>({
    queryKey: [`/audio-features/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Get a low-level audio analysis for a track in the Spotify catalog. The audio analysis describes the track’s structure and musical content, including rhythm, pitch, and timbre.

*/
export const useAudioAnalysisById: CustomHook<
  AudioAnalysisObject,
  GetAudioAnalysisByIdParams
> = (axiosConfig, options) =>
  useQuery<AudioAnalysisObject>({
    queryKey: [`/audio-analysis/${axiosConfig.params.id}`, axiosConfig],
    ...options,
  });
/**
* Recommendations are generated based on the available information for a given seed entity and matched against similar artists and tracks. If there is sufficient information about the provided seeds, a list of tracks will be returned together with pool size details.

For artists and tracks that are very new or obscure there might not be enough data to generate a list of tracks.

*/
export const useRecommendations: CustomHook<
  RecommendationsObject,
  GetRecommendationsParams
> = (axiosConfig, options) =>
  useQuery<RecommendationsObject>({
    queryKey: axiosConfig
      ? ["/recommendations", axiosConfig]
      : ["/recommendations"],
    ...options,
  });
/**
* Retrieve a list of available genres seed parameter values for [recommendations](/documentation/web-api/reference/get-recommendations).

*/
export const useRecommendationsAvailableGenreSeeds: CustomHook<{
  genres: string[];
}> = (axiosConfig, options) =>
  useQuery<{
    genres: string[];
  }>({
    queryKey: axiosConfig
      ? ["/recommendations/available-genre-seeds", axiosConfig]
      : ["/recommendations/available-genre-seeds"],
    ...options,
  });
/**
* Get information about the user’s current playback state, including track or episode, progress, and active device.

*/
export const useMePlayer: CustomHook<
  CurrentlyPlayingContextObject,
  GetMePlayerParams
> = (axiosConfig, options) =>
  useQuery<CurrentlyPlayingContextObject>({
    queryKey: axiosConfig ? ["/me/player", axiosConfig] : ["/me/player"],
    ...options,
  });
export const putMePlayerMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<{
    /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
     */
    device_ids: string[];
    /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
     */
    play?: boolean;
    [key: string]: any;
  }>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player",
    method: "put",
  });
/**
* Transfer playback to a new device and optionally begin playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayer = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<{
        /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
         */
        device_ids: string[];
        /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
         */
        play?: boolean;
        [key: string]: any;
      }>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerMutation,
    ...options,
  });
/**
* Get information about a user’s available Spotify Connect devices. Some device models are not supported and will not be listed in the API response.

*/
export const useMePlayerDevices: CustomHook<{
  devices: DeviceObject[];
}> = (axiosConfig, options) =>
  useQuery<{
    devices: DeviceObject[];
  }>({
    queryKey: axiosConfig
      ? ["/me/player/devices", axiosConfig]
      : ["/me/player/devices"],
    ...options,
  });
/**
* Get the object currently being played on the user's Spotify account.

*/
export const useMePlayerCurrentlyPlaying: CustomHook<
  CurrentlyPlayingObject,
  GetMePlayerCurrentlyPlayingParams
> = (axiosConfig, options) =>
  useQuery<CurrentlyPlayingObject>({
    queryKey: axiosConfig
      ? ["/me/player/currently-playing", axiosConfig]
      : ["/me/player/currently-playing"],
    ...options,
  });
export const putMePlayerPlayMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<
    {
      /** Optional. Spotify URI of the context to play.
    Valid contexts are albums, artists & playlists.
    `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
     */
      context_uri?: string;
      /** Optional. A JSON array of the Spotify track URIs to play.
    For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
     */
      uris?: string[];
      /** Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
    "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
    "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
     */
      offset?: {
        [key: string]: any;
      };
      /** Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
       */
      position_ms?: number;
      [key: string]: any;
    },
    PutMePlayerPlayParams
  >
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/play",
    method: "put",
  });
/**
* Start a new context or resume current playback on the user's active device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerPlay = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<
        {
          /** Optional. Spotify URI of the context to play.
    Valid contexts are albums, artists & playlists.
    `{context_uri:"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"}`
     */
          context_uri?: string;
          /** Optional. A JSON array of the Spotify track URIs to play.
    For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"]}`
     */
          uris?: string[];
          /** Optional. Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object
    "position" is zero based and can’t be negative. Example: `"offset": {"position": 5}`
    "uri" is a string representing the uri of the item to start at. Example: `"offset": {"uri": "spotify:track:1301WleyT98MSxVHPZCA6M"}`
     */
          offset?: {
            [key: string]: any;
          };
          /** Indicates from what position to start playback. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song.
           */
          position_ms?: number;
          [key: string]: any;
        },
        PutMePlayerPlayParams
      >
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerPlayMutation,
    ...options,
  });
export const putMePlayerPauseMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMePlayerPauseParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/pause",
    method: "put",
  });
/**
* Pause playback on the user's account. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerPause = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMePlayerPauseParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerPauseMutation,
    ...options,
  });
export const postMePlayerNextMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PostMePlayerNextParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/next",
    method: "post",
  });
/**
* Skips to next track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePostMePlayerNext = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PostMePlayerNextParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: postMePlayerNextMutation,
    ...options,
  });
export const postMePlayerPreviousMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PostMePlayerPreviousParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/previous",
    method: "post",
  });
/**
* Skips to previous track in the user’s queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePostMePlayerPrevious = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PostMePlayerPreviousParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: postMePlayerPreviousMutation,
    ...options,
  });
export const putMePlayerSeekMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMePlayerSeekParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/seek",
    method: "put",
  });
/**
* Seeks to the given position in the user’s currently playing track. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerSeek = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMePlayerSeekParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerSeekMutation,
    ...options,
  });
export const putMePlayerRepeatMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMePlayerRepeatParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/repeat",
    method: "put",
  });
/**
* Set the repeat mode for the user's playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerRepeat = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMePlayerRepeatParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerRepeatMutation,
    ...options,
  });
export const putMePlayerVolumeMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMePlayerVolumeParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/volume",
    method: "put",
  });
/**
* Set the volume for the user’s current playback device. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerVolume = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMePlayerVolumeParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerVolumeMutation,
    ...options,
  });
export const putMePlayerShuffleMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PutMePlayerShuffleParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/shuffle",
    method: "put",
  });
/**
* Toggle shuffle on or off for user’s playback. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePutMePlayerShuffle = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PutMePlayerShuffleParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: putMePlayerShuffleMutation,
    ...options,
  });
/**
* Get tracks from the current user's recently played tracks.
_**Note**: Currently doesn't support podcast episodes._

*/
export const useMePlayerRecentlyPlayed: CustomHook<
  CursorPagingPlayHistoryObject,
  GetMePlayerRecentlyPlayedParams
> = (axiosConfig, options) =>
  useQuery<CursorPagingPlayHistoryObject>({
    queryKey: axiosConfig
      ? ["/me/player/recently-played", axiosConfig]
      : ["/me/player/recently-played"],
    ...options,
  });
/**
* Get the list of objects that make up the user's queue.

*/
export const useMePlayerQueue: CustomHook<QueueObject> = (
  axiosConfig,
  options
) =>
  useQuery<QueueObject>({
    queryKey: axiosConfig
      ? ["/me/player/queue", axiosConfig]
      : ["/me/player/queue"],
    ...options,
  });
export const postMePlayerQueueMutation: MutationFunction<
  AxiosResponse<void>,
  AxiosConfig<undefined, PostMePlayerQueueParams>
> = async (axiosConfig) =>
  axiosInstance.request({
    ...axiosConfig,
    url: "/me/player/queue",
    method: "post",
  });
/**
* Add an item to the end of the user's current playback queue. This API only works for users who have Spotify Premium. The order of execution is not guaranteed when you use this API with other Player API endpoints.

*/
export const usePostMePlayerQueue = (
  options?: Omit<
    UseMutationOptions<
      AxiosResponse<void>,
      AxiosError,
      AxiosConfig<undefined, PostMePlayerQueueParams>
    >,
    "mutationFn"
  >
) =>
  useMutation({
    mutationFn: postMePlayerQueueMutation,
    ...options,
  });
/**
* Get the list of markets where Spotify is available.

*/
export const useMarkets: CustomHook<{
  markets?: string[];
}> = (axiosConfig, options) =>
  useQuery<{
    markets?: string[];
  }>({
    queryKey: axiosConfig ? ["/markets", axiosConfig] : ["/markets"],
    ...options,
  });
/**
* Get the current user's top artists based on calculated affinity.

*/
export const useMeTopArtists: CustomHook<
  PagingArtistObject,
  GetMeTopArtistsParams
> = (axiosConfig, options) =>
  useQuery<PagingArtistObject>({
    queryKey: axiosConfig
      ? ["/me/top/artists", axiosConfig]
      : ["/me/top/artists"],
    ...options,
  });
/**
* Get the current user's top tracks based on calculated affinity.

*/
export const useMeTopTracks: CustomHook<
  PagingTrackObject,
  GetMeTopTracksParams
> = (axiosConfig, options) =>
  useQuery<PagingTrackObject>({
    queryKey: axiosConfig
      ? ["/me/top/tracks", axiosConfig]
      : ["/me/top/tracks"],
    ...options,
  });
