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
  ErrorObject,
  PagingObject,
  PagingSimplifiedAlbumObject,
  CursorPagingSimplifiedArtistObject,
  DeviceObject,
  PagingSimplifiedShowObject,
  PagingSimplifiedAudiobookObject,
  SimplifiedShowObject,
} from "./index";

export type QueryMap = {
  "/albums/{id}": {
    get: {
      params: GetAlbumsByIdParams;
      response: {
        /** undefined */
        200: AlbumObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/albums": {
    get: {
      params: GetAlbumsParams;
      response: {
        /** undefined */
        200: {
          albums: AlbumObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/albums/{id}/tracks": {
    get: {
      params: GetAlbumsByIdTracksParams;
      response: {
        /** undefined */
        200: PagingSimplifiedTrackObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/artists/{id}": {
    get: {
      params: GetArtistsByIdParams;
      response: {
        /** undefined */
        200: ArtistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/artists": {
    get: {
      params: GetArtistsParams;
      response: {
        /** undefined */
        200: {
          artists: ArtistObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/artists/{id}/albums": {
    get: {
      params: GetArtistsByIdAlbumsParams;
      response: {
        /** undefined */
        200: PagingArtistDiscographyAlbumObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/artists/{id}/top-tracks": {
    get: {
      params: GetArtistsByIdTopTracksParams;
      response: {
        /** undefined */
        200: {
          tracks: TrackObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/artists/{id}/related-artists": {
    get: {
      params: GetArtistsByIdRelatedArtistsParams;
      response: {
        /** undefined */
        200: {
          artists: ArtistObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/shows/{id}": {
    get: {
      params: GetShowsByIdParams;
      response: {
        /** undefined */
        200: ShowObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/shows": {
    get: {
      params: GetShowsParams;
      response: {
        /** undefined */
        200: {
          shows: SimplifiedShowObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/shows/{id}/episodes": {
    get: {
      params: GetShowsByIdEpisodesParams;
      response: {
        /** undefined */
        200: PagingSimplifiedEpisodeObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/episodes/{id}": {
    get: {
      params: GetEpisodesByIdParams;
      response: {
        /** undefined */
        200: EpisodeObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/episodes": {
    get: {
      params: GetEpisodesParams;
      response: {
        /** undefined */
        200: {
          episodes: EpisodeObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audiobooks/{id}": {
    get: {
      params: GetAudiobooksByIdParams;
      response: {
        /** undefined */
        200: AudiobookObject;
        /** undefined */
        400: {
          error: ErrorObject;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        404: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audiobooks": {
    get: {
      params: GetAudiobooksParams;
      response: {
        /** undefined */
        200: {
          audiobooks: AudiobookObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audiobooks/{id}/chapters": {
    get: {
      params: GetAudiobooksByIdChaptersParams;
      response: {
        /** undefined */
        200: PagingSimplifiedChapterObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/audiobooks": {
    get: {
      params: GetMeAudiobooksParams;
      response: {
        /** undefined */
        200: PagingSavedAudiobookObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeAudiobooksParams;
      response: {
        /** Audiobook(s) are saved to the library */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeAudiobooksParams;
      response: {
        /** Audiobook(s) have been removed from the library */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/audiobooks/contains": {
    get: {
      params: GetMeAudiobooksContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/chapters/{id}": {
    get: {
      params: GetChaptersByIdParams;
      response: {
        /** undefined */
        200: ChapterObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/chapters": {
    get: {
      params: GetChaptersParams;
      response: {
        /** undefined */
        200: {
          chapters: ChapterObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/tracks/{id}": {
    get: {
      params: GetTracksByIdParams;
      response: {
        /** undefined */
        200: TrackObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/tracks": {
    get: {
      params: GetTracksParams;
      response: {
        /** undefined */
        200: {
          tracks: TrackObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/search": {
    get: {
      params: SearchParams;
      response: {
        /** undefined */
        200: {
          tracks?: PagingTrackObject;
          artists?: PagingArtistObject;
          albums?: PagingSimplifiedAlbumObject;
          playlists?: PagingPlaylistObject;
          shows?: PagingSimplifiedShowObject;
          episodes?: PagingSimplifiedEpisodeObject;
          audiobooks?: PagingSimplifiedAudiobookObject;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me": {
    get: {
      response: {
        /** undefined */
        200: PrivateUserObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/playlists/{playlist_id}": {
    get: {
      params: GetPlaylistsByPlaylistIdParams;
      response: {
        /** undefined */
        200: PlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutPlaylistsByPlaylistIdParams;
      body: {
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
      };
      response: {
        /** Playlist updated */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/playlists/{playlist_id}/tracks": {
    get: {
      params: GetPlaylistsByPlaylistIdTracksParams;
      response: {
        /** undefined */
        200: PagingPlaylistTrackObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    post: {
      params: PostPlaylistsByPlaylistIdTracksParams;
      body: {
        /** A JSON array of the [Spotify URIs](/documentation/web-api/concepts/spotify-uris-ids) to add. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M", "spotify:episode:512ojhOuo1ktJprKbVcKyQ"]}`<br/>A maximum of 100 items can be added in one request. _**Note**: if the `uris` parameter is present in the query string, any URIs listed here in the body will be ignored._
         */
        uris?: string[];
        /** The position to insert the items, a zero-based index. For example, to insert the items in the first position: `position=0` ; to insert the items in the third position: `position=2`. If omitted, the items will be appended to the playlist. Items are added in the order they appear in the uris array. For example: `{"uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh","spotify:track:1301WleyT98MSxVHPZCA6M"], "position": 3}`
         */
        position?: number;
        [key: string]: any;
      };
      response: {
        /** undefined */
        201: {
          snapshot_id?: string;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutPlaylistsByPlaylistIdTracksParams;
      body: {
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
      };
      response: {
        /** undefined */
        200: {
          snapshot_id?: string;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeletePlaylistsByPlaylistIdTracksParams;
      body: {
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
      };
      response: {
        /** undefined */
        200: {
          snapshot_id?: string;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/playlists": {
    get: {
      params: GetMePlaylistsParams;
      response: {
        /** undefined */
        200: PagingPlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/albums": {
    get: {
      params: GetMeAlbumsParams;
      response: {
        /** undefined */
        200: PagingSavedAlbumObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeAlbumsParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids?: string[];
        [key: string]: any;
      };
      response: {
        /** The album is saved */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeAlbumsParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids?: string[];
        [key: string]: any;
      };
      response: {
        /** Album(s) have been removed from the library */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/albums/contains": {
    get: {
      params: GetMeAlbumsContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/tracks": {
    get: {
      params: GetMeTracksParams;
      response: {
        /** undefined */
        200: PagingSavedTrackObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeTracksParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids: string[];
        [key: string]: any;
      };
      response: {
        /** Track saved */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeTracksParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `["4iV5W9uYEdYUVa79Axb7Rh", "1301WleyT98MSxVHPZCA6M"]`<br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids?: string[];
        [key: string]: any;
      };
      response: {
        /** Track removed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/tracks/contains": {
    get: {
      params: GetMeTracksContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/episodes": {
    get: {
      params: GetMeEpisodesParams;
      response: {
        /** undefined */
        200: PagingSavedEpisodeObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeEpisodesParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids: string[];
        [key: string]: any;
      };
      response: {
        /** Episode saved */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeEpisodesParams;
      body: {
        /** A JSON array of the [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). <br/>A maximum of 50 items can be specified in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids?: string[];
        [key: string]: any;
      };
      response: {
        /** Episode removed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/episodes/contains": {
    get: {
      params: GetMeEpisodesContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/shows": {
    get: {
      params: GetMeShowsParams;
      response: {
        /** undefined */
        200: PagingSavedShowObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeShowsParams;
      body: {
        /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
                A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
        ids?: string[];
      };
      response: {
        /** Show saved */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeShowsParams;
      body: {
        /** A JSON array of the [Spotify IDs](https://developer.spotify.com/documentation/web-api/#spotify-uris-and-ids).
                A maximum of 50 items can be specified in one request. *Note: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored.* */
        ids?: string[];
      };
      response: {
        /** Show removed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/shows/contains": {
    get: {
      params: GetMeShowsContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/users/{user_id}": {
    get: {
      params: GetUsersByUserIdParams;
      response: {
        /** undefined */
        200: PublicUserObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/users/{user_id}/playlists": {
    get: {
      params: GetUsersByUserIdPlaylistsParams;
      response: {
        /** undefined */
        200: PagingPlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    post: {
      params: PostUsersByUserIdPlaylistsParams;
      body: {
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
      };
      response: {
        /** undefined */
        201: PlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/playlists/{playlist_id}/followers": {
    put: {
      params: PutPlaylistsByPlaylistIdFollowersParams;
      body: {
        /** Defaults to `true`. If `true` the playlist will be included in user's public playlists (added to profile), if `false` it will remain private. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
         */
        public?: boolean;
        [key: string]: any;
      };
      response: {
        /** Playlist followed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeletePlaylistsByPlaylistIdFollowersParams;
      response: {
        /** Playlist unfollowed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/browse/featured-playlists": {
    get: {
      params: GetBrowseFeaturedPlaylistsParams;
      response: {
        /** undefined */
        200: PagingFeaturedPlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/browse/categories": {
    get: {
      params: GetBrowseCategoriesParams;
      response: {
        /** undefined */
        200: {
          categories: PagingObject & {
            items?: CategoryObject[];
          };
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/browse/categories/{category_id}": {
    get: {
      params: GetBrowseCategoriesByCategoryIdParams;
      response: {
        /** undefined */
        200: CategoryObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/browse/categories/{category_id}/playlists": {
    get: {
      params: GetBrowseCategoriesByCategoryIdPlaylistsParams;
      response: {
        /** undefined */
        200: PagingFeaturedPlaylistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/playlists/{playlist_id}/images": {
    get: {
      params: GetPlaylistsByPlaylistIdImagesParams;
      response: {
        /** undefined */
        200: ImageObject[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutPlaylistsByPlaylistIdImagesParams;
      body: string;
      response: {
        /** Image uploaded */
        202: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/browse/new-releases": {
    get: {
      params: GetBrowseNewReleasesParams;
      response: {
        /** undefined */
        200: {
          albums: PagingSimplifiedAlbumObject;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/following": {
    get: {
      params: GetMeFollowingParams;
      response: {
        /** undefined */
        200: {
          artists: CursorPagingSimplifiedArtistObject;
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      params: PutMeFollowingParams;
      body: {
        /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids).
                For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
                 */
        ids: string[];
        [key: string]: any;
      };
      response: {
        /** Artist or user followed */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    delete: {
      params: DeleteMeFollowingParams;
      body: {
        /** A JSON array of the artist or user [Spotify IDs](/documentation/web-api/concepts/spotify-uris-ids). For example: `{ids:["74ASZWbe4lXaubB36ztrGX", "08td7MxkoHQkXnWAYD8d6Q"]}`. A maximum of 50 IDs can be sent in one request. _**Note**: if the `ids` parameter is present in the query string, any IDs listed here in the body will be ignored._
         */
        ids?: string[];
        [key: string]: any;
      };
      response: {
        /** Artist or user unfollowed */
        200: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/following/contains": {
    get: {
      params: GetMeFollowingContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/playlists/{playlist_id}/followers/contains": {
    get: {
      params: GetPlaylistsByPlaylistIdFollowersContainsParams;
      response: {
        /** undefined */
        200: boolean[];
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audio-features": {
    get: {
      params: GetAudioFeaturesParams;
      response: {
        /** undefined */
        200: {
          audio_features: AudioFeaturesObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audio-features/{id}": {
    get: {
      params: GetAudioFeaturesByIdParams;
      response: {
        /** undefined */
        200: AudioFeaturesObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/audio-analysis/{id}": {
    get: {
      params: GetAudioAnalysisByIdParams;
      response: {
        /** undefined */
        200: AudioAnalysisObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/recommendations": {
    get: {
      params: GetRecommendationsParams;
      response: {
        /** undefined */
        200: RecommendationsObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/recommendations/available-genre-seeds": {
    get: {
      response: {
        /** undefined */
        200: {
          genres: string[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player": {
    get: {
      params: GetMePlayerParams;
      response: {
        /** undefined */
        200: CurrentlyPlayingContextObject;
        /** Playback not available or active */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    put: {
      body: {
        /** A JSON array containing the ID of the device on which playback should be started/transferred.<br/>For example:`{device_ids:["74ASZWbe4lXaubB36ztrGX"]}`<br/>_**Note**: Although an array is accepted, only a single device_id is currently supported. Supplying more than one will return `400 Bad Request`_
         */
        device_ids: string[];
        /** **true**: ensure playback happens on new device.<br/>**false** or not provided: keep the current playback state.
         */
        play?: boolean;
        [key: string]: any;
      };
      response: {
        /** Playback transferred */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/devices": {
    get: {
      response: {
        /** undefined */
        200: {
          devices: DeviceObject[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/currently-playing": {
    get: {
      params: GetMePlayerCurrentlyPlayingParams;
      response: {
        /** undefined */
        200: CurrentlyPlayingObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/play": {
    put: {
      params: PutMePlayerPlayParams;
      body: {
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
      };
      response: {
        /** Playback started */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/pause": {
    put: {
      params: PutMePlayerPauseParams;
      response: {
        /** Playback paused */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/next": {
    post: {
      params: PostMePlayerNextParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/previous": {
    post: {
      params: PostMePlayerPreviousParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/seek": {
    put: {
      params: PutMePlayerSeekParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/repeat": {
    put: {
      params: PutMePlayerRepeatParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/volume": {
    put: {
      params: PutMePlayerVolumeParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/shuffle": {
    put: {
      params: PutMePlayerShuffleParams;
      response: {
        /** Command sent */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/recently-played": {
    get: {
      params: GetMePlayerRecentlyPlayedParams;
      response: {
        /** undefined */
        200: CursorPagingPlayHistoryObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/player/queue": {
    get: {
      response: {
        /** undefined */
        200: QueueObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
    post: {
      params: PostMePlayerQueueParams;
      response: {
        /** Command received */
        204: void;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/markets": {
    get: {
      response: {
        /** undefined */
        200: {
          markets?: string[];
        };
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/top/artists": {
    get: {
      params: GetMeTopArtistsParams;
      response: {
        /** undefined */
        200: PagingArtistObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
  "/me/top/tracks": {
    get: {
      params: GetMeTopTracksParams;
      response: {
        /** undefined */
        200: PagingTrackObject;
        /** undefined */
        401: {
          error: ErrorObject;
        };
        /** undefined */
        403: {
          error: ErrorObject;
        };
        /** undefined */
        429: {
          error: ErrorObject;
        };
      };
    };
  };
};
