export type GetAlbumsByIdParams = {
  id: string;
  market?: string;
};
export type GetAlbumsParams = {
  ids: string;
  market?: string;
};
export type GetAlbumsByIdTracksParams = {
  id: string;
  market?: string;
  limit?: number;
  offset?: number;
};
export type GetArtistsByIdParams = {
  id: string;
};
export type GetArtistsParams = {
  ids: string;
};
export type GetArtistsByIdAlbumsParams = {
  id: string;
  include_groups?: string;
  market?: string;
  limit?: number;
  offset?: number;
};
export type GetArtistsByIdTopTracksParams = {
  id: string;
  market?: string;
};
export type GetArtistsByIdRelatedArtistsParams = {
  id: string;
};
export type GetShowsByIdParams = {
  market?: string;
  id: string;
};
export type GetShowsParams = {
  market?: string;
  ids: string;
};
export type GetShowsByIdEpisodesParams = {
  id: string;
  market?: string;
  limit?: number;
  offset?: number;
};
export type GetEpisodesByIdParams = {
  id: string;
  market?: string;
};
export type GetEpisodesParams = {
  ids: string;
  market?: string;
};
export type GetAudiobooksByIdParams = {
  id: string;
  market?: string;
};
export type GetAudiobooksParams = {
  ids: string;
  market?: string;
};
export type GetAudiobooksByIdChaptersParams = {
  id: string;
  market?: string;
  limit?: number;
  offset?: number;
};
export type GetMeAudiobooksParams = {
  limit?: number;
  offset?: number;
};
export type PutMeAudiobooksParams = {
  ids: string;
};
export type DeleteMeAudiobooksParams = {
  ids: string;
};
export type GetMeAudiobooksContainsParams = {
  ids: string;
};
export type GetChaptersByIdParams = {
  id: string;
  market?: string;
};
export type GetChaptersParams = {
  ids: string;
  market?: string;
};
export type GetTracksByIdParams = {
  id: string;
  market?: string;
};
export type GetTracksParams = {
  market?: string;
  ids: string;
};
export type SearchParams = {
  q: string;
  type: (
    | "album"
    | "artist"
    | "playlist"
    | "track"
    | "show"
    | "episode"
    | "audiobook"
  )[];
  market?: string;
  limit?: number;
  offset?: number;
  include_external?: "audio";
};
export type GetMeParams = void;
export type GetPlaylistsByPlaylistIdParams = {
  playlist_id: string;
  market?: string;
  fields?: string;
  additional_types?: string;
};
export type PutPlaylistsByPlaylistIdParams = {
  playlist_id: string;
};
export type GetPlaylistsByPlaylistIdTracksParams = {
  playlist_id: string;
  market?: string;
  fields?: string;
  limit?: number;
  offset?: number;
  additional_types?: string;
};
export type PostPlaylistsByPlaylistIdTracksParams = {
  playlist_id: string;
  position?: number;
  uris?: string;
};
export type PutPlaylistsByPlaylistIdTracksParams = {
  playlist_id: string;
  uris?: string;
};
export type DeletePlaylistsByPlaylistIdTracksParams = {
  playlist_id: string;
};
export type GetMePlaylistsParams = {
  limit?: number;
  offset?: number;
};
export type GetMeAlbumsParams = {
  limit?: number;
  offset?: number;
  market?: string;
};
export type PutMeAlbumsParams = {
  ids: string;
};
export type DeleteMeAlbumsParams = {
  ids: string;
};
export type GetMeAlbumsContainsParams = {
  ids: string;
};
export type GetMeTracksParams = {
  market?: string;
  limit?: number;
  offset?: number;
};
export type PutMeTracksParams = {
  ids: string;
};
export type DeleteMeTracksParams = {
  ids: string;
};
export type GetMeTracksContainsParams = {
  ids: string;
};
export type GetMeEpisodesParams = {
  market?: string;
  limit?: number;
  offset?: number;
};
export type PutMeEpisodesParams = {
  ids: string;
};
export type DeleteMeEpisodesParams = {
  ids: string;
};
export type GetMeEpisodesContainsParams = {
  ids: string;
};
export type GetMeShowsParams = {
  limit?: number;
  offset?: number;
};
export type PutMeShowsParams = {
  ids: string;
};
export type DeleteMeShowsParams = {
  ids: string;
  market?: string;
};
export type GetMeShowsContainsParams = {
  ids: string;
};
export type GetUsersByUserIdParams = {
  user_id: string;
};
export type GetUsersByUserIdPlaylistsParams = {
  user_id: string;
  limit?: number;
  offset?: number;
};
export type PostUsersByUserIdPlaylistsParams = {
  user_id: string;
};
export type PutPlaylistsByPlaylistIdFollowersParams = {
  playlist_id: string;
};
export type DeletePlaylistsByPlaylistIdFollowersParams = {
  playlist_id: string;
};
export type GetBrowseFeaturedPlaylistsParams = {
  locale?: string;
  limit?: number;
  offset?: number;
};
export type GetBrowseCategoriesParams = {
  locale?: string;
  limit?: number;
  offset?: number;
};
export type GetBrowseCategoriesByCategoryIdParams = {
  category_id: string;
  locale?: string;
};
export type GetBrowseCategoriesByCategoryIdPlaylistsParams = {
  category_id: string;
  limit?: number;
  offset?: number;
};
export type GetPlaylistsByPlaylistIdImagesParams = {
  playlist_id: string;
};
export type PutPlaylistsByPlaylistIdImagesParams = {
  playlist_id: string;
};
export type GetBrowseNewReleasesParams = {
  limit?: number;
  offset?: number;
};
export type GetMeFollowingParams = {
  type: "artist";
  after?: string;
  limit?: number;
};
export type PutMeFollowingParams = {
  type: "artist" | "user";
  ids: string;
};
export type DeleteMeFollowingParams = {
  type: "artist" | "user";
  ids: string;
};
export type GetMeFollowingContainsParams = {
  type: "artist" | "user";
  ids: string;
};
export type GetPlaylistsByPlaylistIdFollowersContainsParams = {
  playlist_id: string;
  ids?: string;
};
export type GetAudioFeaturesParams = {
  ids: string;
};
export type GetAudioFeaturesByIdParams = {
  id: string;
};
export type GetAudioAnalysisByIdParams = {
  id: string;
};
export type GetRecommendationsParams = {
  limit?: number;
  market?: string;
  seed_artists?: string;
  seed_genres?: string;
  seed_tracks?: string;
  min_acousticness?: number;
  max_acousticness?: number;
  target_acousticness?: number;
  min_danceability?: number;
  max_danceability?: number;
  target_danceability?: number;
  min_duration_ms?: number;
  max_duration_ms?: number;
  target_duration_ms?: number;
  min_energy?: number;
  max_energy?: number;
  target_energy?: number;
  min_instrumentalness?: number;
  max_instrumentalness?: number;
  target_instrumentalness?: number;
  min_key?: number;
  max_key?: number;
  target_key?: number;
  min_liveness?: number;
  max_liveness?: number;
  target_liveness?: number;
  min_loudness?: number;
  max_loudness?: number;
  target_loudness?: number;
  min_mode?: number;
  max_mode?: number;
  target_mode?: number;
  min_popularity?: number;
  max_popularity?: number;
  target_popularity?: number;
  min_speechiness?: number;
  max_speechiness?: number;
  target_speechiness?: number;
  min_tempo?: number;
  max_tempo?: number;
  target_tempo?: number;
  min_time_signature?: number;
  max_time_signature?: number;
  target_time_signature?: number;
  min_valence?: number;
  max_valence?: number;
  target_valence?: number;
};
export type GetRecommendationsAvailableGenreSeedsParams = void;
export type GetMePlayerParams = {
  market?: string;
  additional_types?: string;
};
export type PutMePlayerParams = void;
export type GetMePlayerDevicesParams = void;
export type GetMePlayerCurrentlyPlayingParams = {
  market?: string;
  additional_types?: string;
};
export type PutMePlayerPlayParams = {
  device_id?: string;
};
export type PutMePlayerPauseParams = {
  device_id?: string;
};
export type PostMePlayerNextParams = {
  device_id?: string;
};
export type PostMePlayerPreviousParams = {
  device_id?: string;
};
export type PutMePlayerSeekParams = {
  position_ms: number;
  device_id?: string;
};
export type PutMePlayerRepeatParams = {
  state: string;
  device_id?: string;
};
export type PutMePlayerVolumeParams = {
  volume_percent: number;
  device_id?: string;
};
export type PutMePlayerShuffleParams = {
  state: boolean;
  device_id?: string;
};
export type GetMePlayerRecentlyPlayedParams = {
  limit?: number;
  after?: number;
  before?: number;
};
export type GetMePlayerQueueParams = void;
export type PostMePlayerQueueParams = {
  uri: string;
  device_id?: string;
};
export type GetMarketsParams = void;
export type GetMeTopArtistsParams = {
  time_range?: string;
  limit?: number;
  offset?: number;
};
export type GetMeTopTracksParams = {
  time_range?: string;
  limit?: number;
  offset?: number;
};
export type ExternalUrlObject = {
  /** The [Spotify URL](/documentation/web-api/concepts/spotify-uris-ids) for the object.
   */
  spotify?: string;
};
export type ImageObject = {
  /** The source URL of the image.
   */
  url: string;
  /** The image height in pixels.
   */
  height: number | null;
  /** The image width in pixels.
   */
  width: number | null;
};
export type AlbumRestrictionObject = {
  /** The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
    Additional reasons may be added in the future.
     */
  reason?: "market" | "product" | "explicit";
};
export type AlbumBase = {
  /** The type of the album.
   */
  album_type: "album" | "single" | "compilation";
  /** The number of tracks in the album. */
  total_tracks: number;
  /** The markets in which the album is available: [ISO 3166-1 alpha-2 country codes](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _**NOTE**: an album is considered available in a market when at least 1 of its tracks is available in that market._
   */
  available_markets: string[];
  /** Known external URLs for this album.
   */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the album.
   */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the album.
   */
  id: string;
  /** The cover art for the album in various sizes, widest first.
   */
  images: ImageObject[];
  /** The name of the album. In case of an album takedown, the value may be an empty string.
   */
  name: string;
  /** The date the album was first released.
   */
  release_date: string;
  /** The precision with which `release_date` value is known.
   */
  release_date_precision: "year" | "month" | "day";
  /** Included in the response when a content restriction is applied.
   */
  restrictions?: AlbumRestrictionObject;
  /** The object type.
   */
  type: "album";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the album.
   */
  uri: string;
};
export type SimplifiedArtistObject = {
  /** Known external URLs for this artist.
   */
  external_urls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the artist.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
   */
  id?: string;
  /** The name of the artist.
   */
  name?: string;
  /** The object type.
   */
  type?: "artist";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
   */
  uri?: string;
};
export type PagingObject = {
  /** A link to the Web API endpoint returning the full result of the request
   */
  href: string;
  /** The maximum number of items in the response (as set in the query or by default).
   */
  limit: number;
  /** URL to the next page of items. ( `null` if none)
   */
  next: string | null;
  /** The offset of the items returned (as set in the query or by default)
   */
  offset: number;
  /** URL to the previous page of items. ( `null` if none)
   */
  previous: string | null;
  /** The total number of items available to return.
   */
  total: number;
};
export type LinkedTrackObject = {
  /** Known external URLs for this track.
   */
  external_urls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  id?: string;
  /** The object type: "track".
   */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  uri?: string;
};
export type TrackRestrictionObject = {
  /** The reason for the restriction. Supported values:
    - `market` - The content item is not available in the given market.
    - `product` - The content item is not available for the user's subscription type.
    - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
    
    Additional reasons may be added in the future.
    **Note**: If you use this field, make sure that your application safely handles unknown values.
     */
  reason?: string;
};
export type SimplifiedTrackObject = {
  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist. */
  artists?: SimplifiedArtistObject[];
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  available_markets?: string[];
  /** The disc number (usually `1` unless the album consists of more than one disc). */
  disc_number?: number;
  /** The track length in milliseconds. */
  duration_ms?: number;
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown). */
  explicit?: boolean;
  /** External URLs for this track.
   */
  external_urls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  id?: string;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
   */
  is_playable?: boolean;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking/) is applied and is only part of the response if the track linking, in fact, exists. The requested track has been replaced with a different track. The track in the `linked_from` object contains information about the originally requested track. */
  linked_from?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied.
   */
  restrictions?: TrackRestrictionObject;
  /** The name of the track. */
  name?: string;
  /** A URL to a 30 second preview (MP3 format) of the track.
   */
  preview_url?: string | null;
  /** The number of the track. If an album has several discs, the track number is the number on the specified disc.
   */
  track_number?: number;
  /** The object type: "track".
   */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  uri?: string;
  /** Whether or not the track is from a local file.
   */
  is_local?: boolean;
};
export type PagingSimplifiedTrackObject = PagingObject & {
  items?: SimplifiedTrackObject[];
};
export type CopyrightObject = {
  /** The copyright text for this content.
   */
  text?: string;
  /** The type of copyright: `C` = the copyright, `P` = the sound recording (performance) copyright.
   */
  type?: string;
};
export type ExternalIdObject = {
  /** [International Standard Recording Code](http://en.wikipedia.org/wiki/International_Standard_Recording_Code)
   */
  isrc?: string;
  /** [International Article Number](http://en.wikipedia.org/wiki/International_Article_Number_%28EAN%29)
   */
  ean?: string;
  /** [Universal Product Code](http://en.wikipedia.org/wiki/Universal_Product_Code)
   */
  upc?: string;
};
export type AlbumObject = AlbumBase & {
  /** The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
   */
  artists?: SimplifiedArtistObject[];
  /** The tracks of the album.
   */
  tracks?: PagingSimplifiedTrackObject;
  /** The copyright statements of the album.
   */
  copyrights?: CopyrightObject[];
  /** Known external IDs for the album.
   */
  external_ids?: ExternalIdObject;
  /** A list of the genres the album is associated with. If not yet classified, the array is empty.
   */
  genres?: string[];
  /** The label associated with the album.
   */
  label?: string;
  /** The popularity of the album. The value will be between 0 and 100, with 100 being the most popular.
   */
  popularity?: number;
};
export type ErrorObject = {
  /** The HTTP status code (also returned in the response header; see [Response Status Codes](/documentation/web-api/concepts/api-calls#response-status-codes) for more information).
   */
  status: number;
  /** A short description of the cause of the error.
   */
  message: string;
};
export type FollowersObject = {
  /** This will always be set to null, as the Web API does not support it at the moment.
   */
  href?: string | null;
  /** The total number of followers.
   */
  total?: number;
};
export type ArtistObject = {
  /** Known external URLs for this artist.
   */
  external_urls?: ExternalUrlObject;
  /** Information about the followers of the artist.
   */
  followers?: FollowersObject;
  /** A list of the genres the artist is associated with. If not yet classified, the array is empty.
   */
  genres?: string[];
  /** A link to the Web API endpoint providing full details of the artist.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
   */
  id?: string;
  /** Images of the artist in various sizes, widest first.
   */
  images?: ImageObject[];
  /** The name of the artist.
   */
  name?: string;
  /** The popularity of the artist. The value will be between 0 and 100, with 100 being the most popular. The artist's popularity is calculated from the popularity of all the artist's tracks.
   */
  popularity?: number;
  /** The object type.
   */
  type?: "artist";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the artist.
   */
  uri?: string;
};
export type SimplifiedAlbumObject = AlbumBase & {
  /** The artists of the album. Each artist object includes a link in `href` to more detailed information about the artist.
   */
  artists: SimplifiedArtistObject[];
};
export type ArtistDiscographyAlbumObject = SimplifiedAlbumObject & {
  /** This field describes the relationship between the artist and the album.
   */
  album_group: "album" | "single" | "compilation" | "appears_on";
};
export type PagingArtistDiscographyAlbumObject = PagingObject & {
  items?: ArtistDiscographyAlbumObject[];
};
export type TrackObject = {
  /** The album on which the track appears. The album object includes a link in `href` to full information about the album.
   */
  album?: SimplifiedAlbumObject;
  /** The artists who performed the track. Each artist object includes a link in `href` to more detailed information about the artist.
   */
  artists?: SimplifiedArtistObject[];
  /** A list of the countries in which the track can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  available_markets?: string[];
  /** The disc number (usually `1` unless the album consists of more than one disc).
   */
  disc_number?: number;
  /** The track length in milliseconds.
   */
  duration_ms?: number;
  /** Whether or not the track has explicit lyrics ( `true` = yes it does; `false` = no it does not OR unknown).
   */
  explicit?: boolean;
  /** Known external IDs for the track.
   */
  external_ids?: ExternalIdObject;
  /** Known external URLs for this track.
   */
  external_urls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the track.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  id?: string;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied. If `true`, the track is playable in the given market. Otherwise `false`.
   */
  is_playable?: boolean;
  /** Part of the response when [Track Relinking](/documentation/web-api/concepts/track-relinking) is applied, and the requested track has been replaced with different track. The track in the `linked_from` object contains information about the originally requested track. */
  linked_from?: LinkedTrackObject;
  /** Included in the response when a content restriction is applied.
   */
  restrictions?: TrackRestrictionObject;
  /** The name of the track.
   */
  name?: string;
  /** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular.<br/>The popularity of a track is a value between 0 and 100, with 100 being the most popular. The popularity is calculated by algorithm and is based, in the most part, on the total number of plays the track has had and how recent those plays are.<br/>Generally speaking, songs that are being played a lot now will have a higher popularity than songs that were played a lot in the past. Duplicate tracks (e.g. the same track from a single and an album) are rated independently. Artist and album popularity is derived mathematically from track popularity. _**Note**: the popularity value may lag actual popularity by a few days: the value is not updated in real time._
   */
  popularity?: number;
  /** A link to a 30 second preview (MP3 format) of the track. Can be `null`
   */
  preview_url?: string | null;
  /** The number of the track. If an album has several discs, the track number is the number on the specified disc.
   */
  track_number?: number;
  /** The object type: "track".
   */
  type?: "track";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the track.
   */
  uri?: string;
  /** Whether or not the track is from a local file.
   */
  is_local?: boolean;
};
export type ShowBase = {
  /** A list of the countries in which the show can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  available_markets: string[];
  /** The copyright statements of the show.
   */
  copyrights: CopyrightObject[];
  /** A description of the show. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the show. This field may contain HTML tags.
   */
  html_description: string;
  /** Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown).
   */
  explicit: boolean;
  /** External URLs for this show.
   */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the show.
   */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the show.
   */
  id: string;
  /** The cover art for the show in various sizes, widest first.
   */
  images: ImageObject[];
  /** True if all of the shows episodes are hosted outside of Spotify's CDN. This field might be `null` in some cases.
   */
  is_externally_hosted: boolean;
  /** A list of the languages used in the show, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The media type of the show.
   */
  media_type: string;
  /** The name of the episode.
   */
  name: string;
  /** The publisher of the show.
   */
  publisher: string;
  /** The object type.
   */
  type: "show";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the show.
   */
  uri: string;
  /** The total number of episodes in the show.
   */
  total_episodes: number;
};
export type ResumePointObject = {
  /** Whether or not the episode has been fully played by the user.
   */
  fully_played?: boolean;
  /** The user's most recent position in the episode in milliseconds.
   */
  resume_position_ms?: number;
};
export type EpisodeRestrictionObject = {
  /** The reason for the restriction. Supported values:
    - `market` - The content item is not available in the given market.
    - `product` - The content item is not available for the user's subscription type.
    - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
    
    Additional reasons may be added in the future.
    **Note**: If you use this field, make sure that your application safely handles unknown values.
     */
  reason?: string;
};
export type EpisodeBase = {
  /** A URL to a 30 second preview (MP3 format) of the episode. `null` if not available.
   */
  audio_preview_url: string | null;
  /** A description of the episode. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the episode. This field may contain HTML tags.
   */
  html_description: string;
  /** The episode length in milliseconds.
   */
  duration_ms: number;
  /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown).
   */
  explicit: boolean;
  /** External URLs for this episode.
   */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the episode.
   */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
   */
  id: string;
  /** The cover art for the episode in various sizes, widest first.
   */
  images: ImageObject[];
  /** True if the episode is hosted outside of Spotify's CDN.
   */
  is_externally_hosted: boolean;
  /** True if the episode is playable in the given market. Otherwise false.
   */
  is_playable: boolean;
  /** The language used in the episode, identified by a [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code. This field is deprecated and might be removed in the future. Please use the `languages` field instead.
   */
  language?: string;
  /** A list of the languages used in the episode, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The name of the episode.
   */
  name: string;
  /** The date the episode was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
   */
  release_date: string;
  /** The precision with which `release_date` value is known.
   */
  release_date_precision: "year" | "month" | "day";
  /** The user's most recent position in the episode. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
   */
  resume_point?: ResumePointObject;
  /** The object type.
   */
  type: "episode";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the episode.
   */
  uri: string;
  /** Included in the response when a content restriction is applied.
   */
  restrictions?: EpisodeRestrictionObject;
};
export type SimplifiedEpisodeObject = EpisodeBase;
export type PagingSimplifiedEpisodeObject = PagingObject & {
  items?: SimplifiedEpisodeObject[];
};
export type ShowObject = ShowBase & {
  /** The episodes of the show.
   */
  episodes: PagingSimplifiedEpisodeObject;
};
export type SimplifiedShowObject = ShowBase;
export type EpisodeObject = EpisodeBase & {
  /** The show on which the episode belongs.
   */
  show: SimplifiedShowObject;
};
export type AuthorObject = {
  /** The name of the author.
   */
  name?: string;
};
export type NarratorObject = {
  /** The name of the Narrator.
   */
  name?: string;
};
export type AudiobookBase = {
  /** The author(s) for the audiobook.
   */
  authors: AuthorObject[];
  /** A list of the countries in which the audiobook can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  available_markets: string[];
  /** The copyright statements of the audiobook.
   */
  copyrights: CopyrightObject[];
  /** A description of the audiobook. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the audiobook. This field may contain HTML tags.
   */
  html_description: string;
  /** The edition of the audiobook.
   */
  edition?: string;
  /** Whether or not the audiobook has explicit content (true = yes it does; false = no it does not OR unknown).
   */
  explicit: boolean;
  /** External URLs for this audiobook.
   */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the audiobook.
   */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
   */
  id: string;
  /** The cover art for the audiobook in various sizes, widest first.
   */
  images: ImageObject[];
  /** A list of the languages used in the audiobook, identified by their [ISO 639](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The media type of the audiobook.
   */
  media_type: string;
  /** The name of the audiobook.
   */
  name: string;
  /** The narrator(s) for the audiobook.
   */
  narrators: NarratorObject[];
  /** The publisher of the audiobook.
   */
  publisher: string;
  /** The object type.
   */
  type: "audiobook";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the audiobook.
   */
  uri: string;
  /** The number of chapters in this audiobook.
   */
  total_chapters: number;
};
export type ChapterRestrictionObject = {
  /** The reason for the restriction. Supported values:
    - `market` - The content item is not available in the given market.
    - `product` - The content item is not available for the user's subscription type.
    - `explicit` - The content item is explicit and the user's account is set to not play explicit content.
    - `payment_required` - Payment is required to play the content item.
    
    Additional reasons may be added in the future.
    **Note**: If you use this field, make sure that your application safely handles unknown values.
     */
  reason?: string;
};
export type ChapterBase = {
  /** A URL to a 30 second preview (MP3 format) of the chapter. `null` if not available.
   */
  audio_preview_url: string | null;
  /** A list of the countries in which the chapter can be played, identified by their [ISO 3166-1 alpha-2](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) code.
   */
  available_markets?: string[];
  /** The number of the chapter
   */
  chapter_number: number;
  /** A description of the chapter. HTML tags are stripped away from this field, use `html_description` field in case HTML tags are needed.
   */
  description: string;
  /** A description of the chapter. This field may contain HTML tags.
   */
  html_description: string;
  /** The chapter length in milliseconds.
   */
  duration_ms: number;
  /** Whether or not the chapter has explicit content (true = yes it does; false = no it does not OR unknown).
   */
  explicit: boolean;
  /** External URLs for this chapter.
   */
  external_urls: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the chapter.
   */
  href: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
   */
  id: string;
  /** The cover art for the chapter in various sizes, widest first.
   */
  images: ImageObject[];
  /** True if the chapter is playable in the given market. Otherwise false.
   */
  is_playable: boolean;
  /** A list of the languages used in the chapter, identified by their [ISO 639-1](https://en.wikipedia.org/wiki/ISO_639) code.
   */
  languages: string[];
  /** The name of the chapter.
   */
  name: string;
  /** The date the chapter was first released, for example `"1981-12-15"`. Depending on the precision, it might be shown as `"1981"` or `"1981-12"`.
   */
  release_date: string;
  /** The precision with which `release_date` value is known.
   */
  release_date_precision: "year" | "month" | "day";
  /** The user's most recent position in the chapter. Set if the supplied access token is a user token and has the scope 'user-read-playback-position'.
   */
  resume_point?: ResumePointObject;
  /** The object type.
   */
  type: "episode";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the chapter.
   */
  uri: string;
  /** Included in the response when a content restriction is applied.
   */
  restrictions?: ChapterRestrictionObject;
};
export type SimplifiedChapterObject = ChapterBase;
export type PagingSimplifiedChapterObject = PagingObject & {
  items?: SimplifiedChapterObject[];
};
export type AudiobookObject = AudiobookBase & {
  /** The chapters of the audiobook.
   */
  chapters: PagingSimplifiedChapterObject;
};
export type SavedAudiobookObject = {
  /** The date and time the audiobook was saved
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
     */
  added_at?: string;
  /** Information about the audiobook. */
  audiobook?: AudiobookObject;
};
export type PagingSavedAudiobookObject = PagingObject & {
  items?: SavedAudiobookObject[];
};
export type SimplifiedAudiobookObject = AudiobookBase;
export type ChapterObject = ChapterBase & {
  /** The audiobook for which the chapter belongs.
   */
  audiobook: SimplifiedAudiobookObject;
};
export type PagingTrackObject = PagingObject & {
  items?: TrackObject[];
};
export type PagingArtistObject = PagingObject & {
  items?: ArtistObject[];
};
export type PagingSimplifiedAlbumObject = PagingObject & {
  items?: SimplifiedAlbumObject[];
};
export type PlaylistUserObject = {
  /** Known public external URLs for this user.
   */
  external_urls?: ExternalUrlObject;
  /** Information about the followers of this user.
   */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user.
   */
  href?: string;
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
   */
  id?: string;
  /** The object type.
   */
  type?: "user";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
   */
  uri?: string;
};
export type PlaylistOwnerObject = PlaylistUserObject & {
  /** The name displayed on the user's profile. `null` if not available.
   */
  display_name?: string | null;
};
export type PlaylistTracksRefObject = {
  /** A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
   */
  href?: string;
  /** Number of tracks in the playlist.
   */
  total?: number;
};
export type SimplifiedPlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist.
   */
  collaborative?: boolean;
  /** The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
   */
  description?: string;
  /** Known external URLs for this playlist.
   */
  external_urls?: ExternalUrlObject;
  /** A link to the Web API endpoint providing full details of the playlist.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
   */
  id?: string;
  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
   */
  images?: ImageObject[];
  /** The name of the playlist.
   */
  name?: string;
  /** The user who owns the playlist
   */
  owner?: PlaylistOwnerObject;
  /** The playlist's public/private status (if it is added to the user's profile): `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
   */
  public?: boolean;
  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id?: string;
  /** A collection containing a link ( `href` ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the `total` number of tracks in the playlist. Note, a track object may be `null`. This can happen if a track is no longer available.
   */
  tracks?: PlaylistTracksRefObject;
  /** The object type: "playlist"
   */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
   */
  uri?: string;
};
export type PagingPlaylistObject = PagingObject & {
  items?: SimplifiedPlaylistObject[];
};
export type PagingSimplifiedShowObject = PagingObject & {
  items?: SimplifiedShowObject[];
};
export type PagingSimplifiedAudiobookObject = PagingObject & {
  items?: SimplifiedAudiobookObject[];
};
export type ExplicitContentSettingsObject = {
  /** When `true`, indicates that explicit content should not be played.
   */
  filter_enabled?: boolean;
  /** When `true`, indicates that the explicit content setting is locked and can't be changed by the user.
   */
  filter_locked?: boolean;
};
export type PrivateUserObject = {
  /** The country of the user, as set in the user's account profile. An [ISO 3166-1 alpha-2 country code](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-2). _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
   */
  country?: string;
  /** The name displayed on the user's profile. `null` if not available.
   */
  display_name?: string;
  /** The user's email address, as entered by the user when creating their account. _**Important!** This email address is unverified; there is no proof that it actually belongs to the user._ _This field is only available when the current user has granted access to the [user-read-email](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
   */
  email?: string;
  /** The user's explicit content settings. _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
   */
  explicit_content?: ExplicitContentSettingsObject;
  /** Known external URLs for this user. */
  external_urls?: ExternalUrlObject;
  /** Information about the followers of the user. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user.
   */
  href?: string;
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for the user.
   */
  id?: string;
  /** The user's profile image. */
  images?: ImageObject[];
  /** The user's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".) _This field is only available when the current user has granted access to the [user-read-private](/documentation/web-api/concepts/scopes/#list-of-scopes) scope._
   */
  product?: string;
  /** The object type: "user"
   */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the user.
   */
  uri?: string;
};
export type PlaylistTrackObject = {
  /** The date and time the track or episode was added. _**Note**: some very old playlists may return `null` in this field._
   */
  added_at?: string;
  /** The Spotify user who added the track or episode. _**Note**: some very old playlists may return `null` in this field._
   */
  added_by?: PlaylistUserObject;
  /** Whether this track or episode is a [local file](/documentation/web-api/concepts/playlists/#local-files) or not.
   */
  is_local?: boolean;
  /** Information about the track or episode. */
  track?:
    | ({
        type: "TrackObject";
      } & TrackObject)
    | ({
        type: "EpisodeObject";
      } & EpisodeObject);
};
export type PagingPlaylistTrackObject = PagingObject & {
  items?: PlaylistTrackObject[];
};
export type PlaylistObject = {
  /** `true` if the owner allows other users to modify the playlist.
   */
  collaborative?: boolean;
  /** The playlist description. _Only returned for modified, verified playlists, otherwise_ `null`.
   */
  description?: string | null;
  /** Known external URLs for this playlist.
   */
  external_urls?: ExternalUrlObject;
  /** Information about the followers of the playlist. */
  followers?: FollowersObject;
  /** A link to the Web API endpoint providing full details of the playlist.
   */
  href?: string;
  /** The [Spotify ID](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
   */
  id?: string;
  /** Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See [Working with Playlists](/documentation/web-api/concepts/playlists). _**Note**: If returned, the source URL for the image (`url`) is temporary and will expire in less than a day._
   */
  images?: ImageObject[];
  /** The name of the playlist.
   */
  name?: string;
  /** The user who owns the playlist
   */
  owner?: PlaylistOwnerObject;
  /** The playlist's public/private status (if it is added to the user's profile): `true` the playlist is public, `false` the playlist is private, `null` the playlist status is not relevant. For more about public/private status, see [Working with Playlists](/documentation/web-api/concepts/playlists)
   */
  public?: boolean;
  /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  snapshot_id?: string;
  /** The tracks of the playlist.
   */
  tracks?: PagingPlaylistTrackObject;
  /** The object type: "playlist"
   */
  type?: string;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the playlist.
   */
  uri?: string;
};
export type SavedAlbumObject = {
  /** The date and time the album was saved
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
     */
  added_at?: string;
  /** Information about the album. */
  album?: AlbumObject;
};
export type PagingSavedAlbumObject = PagingObject & {
  items?: SavedAlbumObject[];
};
export type SavedTrackObject = {
  /** The date and time the track was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
     */
  added_at?: string;
  /** Information about the track. */
  track?: TrackObject;
};
export type PagingSavedTrackObject = PagingObject & {
  items?: SavedTrackObject[];
};
export type SavedEpisodeObject = {
  /** The date and time the episode was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
     */
  added_at?: string;
  /** Information about the episode. */
  episode?: EpisodeObject;
};
export type PagingSavedEpisodeObject = PagingObject & {
  items?: SavedEpisodeObject[];
};
export type SavedShowObject = {
  /** The date and time the show was saved.
    Timestamps are returned in ISO 8601 format as Coordinated Universal Time (UTC) with a zero offset: YYYY-MM-DDTHH:MM:SSZ.
    If the time is imprecise (for example, the date/time of an album release), an additional field indicates the precision; see for example, release_date in an album object.
     */
  added_at?: string;
  /** Information about the show. */
  show?: SimplifiedShowObject;
};
export type PagingSavedShowObject = PagingObject & {
  items?: SavedShowObject[];
};
export type PublicUserObject = {
  /** The name displayed on the user's profile. `null` if not available.
   */
  display_name?: string | null;
  /** Known public external URLs for this user.
   */
  external_urls?: ExternalUrlObject;
  /** Information about the followers of this user.
   */
  followers?: FollowersObject;
  /** A link to the Web API endpoint for this user.
   */
  href?: string;
  /** The [Spotify user ID](/documentation/web-api/concepts/spotify-uris-ids) for this user.
   */
  id?: string;
  /** The user's profile image.
   */
  images?: ImageObject[];
  /** The object type.
   */
  type?: "user";
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for this user.
   */
  uri?: string;
};
export type PagingFeaturedPlaylistObject = {
  /** The localized message of a playlist.
   */
  message?: string;
  playlists?: PagingPlaylistObject;
};
export type CategoryObject = {
  /** A link to the Web API endpoint returning full details of the category.
   */
  href: string;
  /** The category icon, in various sizes.
   */
  icons: ImageObject[];
  /** The [Spotify category ID](/documentation/web-api/concepts/spotify-uris-ids) of the category.
   */
  id: string;
  /** The name of the category.
   */
  name: string;
};
export type CursorObject = {
  /** The cursor to use as key to find the next page of items. */
  after?: string;
  /** The cursor to use as key to find the previous page of items. */
  before?: string;
};
export type CursorPagingObject = {
  /** A link to the Web API endpoint returning the full result of the request. */
  href?: string;
  /** The maximum number of items in the response (as set in the query or by default). */
  limit?: number;
  /** URL to the next page of items. ( `null` if none) */
  next?: string;
  /** The cursors used to find the next set of items. */
  cursors?: CursorObject;
  /** The total number of items available to return. */
  total?: number;
};
export type CursorPagingSimplifiedArtistObject = CursorPagingObject & {
  items?: ArtistObject[];
};
export type Key = number;
export type Loudness = number;
export type Mode = number;
export type Tempo = number;
export type TimeSignature = number;
export type AudioFeaturesObject = {
  /** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic.
   */
  acousticness?: number;
  /** A URL to access the full audio analysis of this track. An access token is required to access this data.
   */
  analysis_url?: string;
  /** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
   */
  danceability?: number;
  /** The duration of the track in milliseconds.
   */
  duration_ms?: number;
  /** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.
   */
  energy?: number;
  /** The Spotify ID for the track.
   */
  id?: string;
  /** Predicts whether a track contains no vocals. "Ooh" and "aah" sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly "vocal". The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0.
   */
  instrumentalness?: number;
  key?: Key;
  /** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live.
   */
  liveness?: number;
  loudness?: Loudness;
  mode?: Mode;
  /** Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks.
   */
  speechiness?: number;
  tempo?: Tempo;
  time_signature?: TimeSignature;
  /** A link to the Web API endpoint providing full details of the track.
   */
  track_href?: string;
  /** The object type.
   */
  type?: "audio_features";
  /** The Spotify URI for the track.
   */
  uri?: string;
  /** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).
   */
  valence?: number;
};
export type TimeIntervalObject = {
  /** The starting point (in seconds) of the time interval. */
  start?: number;
  /** The duration (in seconds) of the time interval. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the interval. */
  confidence?: number;
};
export type SectionObject = {
  /** The starting point (in seconds) of the section. */
  start?: number;
  /** The duration (in seconds) of the section. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the section's "designation". */
  confidence?: number;
  /** The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks. */
  loudness?: number;
  /** The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
  tempo?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field. */
  tempo_confidence?: number;
  /** The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1. */
  key?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field. */
  key_confidence?: number;
  /** Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches. */
  mode?: -1 | 0 | 1;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
  mode_confidence?: number;
  time_signature?: TimeSignature;
  /** The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. Sections with time signature changes may correspond to low values in this field. */
  time_signature_confidence?: number;
};
export type SegmentObject = {
  /** The starting point (in seconds) of the segment. */
  start?: number;
  /** The duration (in seconds) of the segment. */
  duration?: number;
  /** The confidence, from 0.0 to 1.0, of the reliability of the segmentation. Segments of the song which are difficult to logically segment (e.g: noise) may correspond to low values in this field.
   */
  confidence?: number;
  /** The onset loudness of the segment in decibels (dB). Combined with `loudness_max` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
  loudness_start?: number;
  /** The peak loudness of the segment in decibels (dB). Combined with `loudness_start` and `loudness_max_time`, these components can be used to describe the "attack" of the segment. */
  loudness_max?: number;
  /** The segment-relative offset of the segment peak loudness in seconds. Combined with `loudness_start` and `loudness_max`, these components can be used to desctibe the "attack" of the segment. */
  loudness_max_time?: number;
  /** The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment. */
  loudness_end?: number;
  /** Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7).
    
    Vectors are normalized to 1 by their strongest dimension, therefore noisy sounds are likely represented by values that are all close to 1, while pure tones are described by one value at 1 (the pitch) and others near 0.
    As can be seen below, the 12 vector indices are a combination of low-power spectrum values at their respective pitch frequencies.
    ![pitch vector](https://developer.spotify.com/assets/audio/Pitch_vector.png)
     */
  pitches?: number[];
  /** Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. The timbre feature is a vector that includes 12 unbounded values roughly centered around 0. Those values are high level abstractions of the spectral surface, ordered by degree of importance.
    
    For completeness however, the first dimension represents the average loudness of the segment; second emphasizes brightness; third is more closely correlated to the flatness of a sound; fourth to sounds with a stronger attack; etc. See an image below representing the 12 basis functions (i.e. template segments).
    ![timbre basis functions](https://developer.spotify.com/assets/audio/Timbre_basis_functions.png)
    
    The actual timbre of the segment is best described as a linear combination of these 12 basis functions weighted by the coefficient values: timbre = c1 x b1 + c2 x b2 + ... + c12 x b12, where c1 to c12 represent the 12 coefficients and b1 to b12 the 12 basis functions as displayed below. Timbre vectors are best used in comparison with each other.
     */
  timbre?: number[];
};
export type AudioAnalysisObject = {
  meta?: {
    /** The version of the Analyzer used to analyze this track. */
    analyzer_version?: string;
    /** The platform used to read the track's audio data. */
    platform?: string;
    /** A detailed status code for this track. If analysis data is missing, this code may explain why. */
    detailed_status?: string;
    /** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
    status_code?: number;
    /** The Unix timestamp (in seconds) at which this track was analyzed. */
    timestamp?: number;
    /** The amount of time taken to analyze this track. */
    analysis_time?: number;
    /** The method used to read the track's audio data. */
    input_process?: string;
  };
  track?: {
    /** The exact number of audio samples analyzed from this track. See also `analysis_sample_rate`. */
    num_samples?: number;
    /** Length of the track in seconds. */
    duration?: number;
    /** This field will always contain the empty string. */
    sample_md5?: string;
    /** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
    offset_seconds?: number;
    /** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
    window_seconds?: number;
    /** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
    analysis_sample_rate?: number;
    /** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
    analysis_channels?: number;
    /** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
    end_of_fade_in?: number;
    /** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
    start_of_fade_out?: number;
    loudness?: Loudness;
    tempo?: Tempo;
    /** The confidence, from 0.0 to 1.0, of the reliability of the `tempo`. */
    tempo_confidence?: number;
    time_signature?: TimeSignature;
    /** The confidence, from 0.0 to 1.0, of the reliability of the `time_signature`. */
    time_signature_confidence?: number;
    key?: Key;
    /** The confidence, from 0.0 to 1.0, of the reliability of the `key`. */
    key_confidence?: number;
    mode?: Mode;
    /** The confidence, from 0.0 to 1.0, of the reliability of the `mode`. */
    mode_confidence?: number;
    /** An [Echo Nest Musical Fingerprint (ENMFP)](https://academiccommons.columbia.edu/doi/10.7916/D8Q248M4) codestring for this track. */
    codestring?: string;
    /** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
    code_version?: number;
    /** An [EchoPrint](https://github.com/spotify/echoprint-codegen) codestring for this track. */
    echoprintstring?: string;
    /** A version number for the EchoPrint format used in the echoprintstring field. */
    echoprint_version?: number;
    /** A [Synchstring](https://github.com/echonest/synchdata) for this track. */
    synchstring?: string;
    /** A version number for the Synchstring used in the synchstring field. */
    synch_version?: number;
    /** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
    rhythmstring?: string;
    /** A version number for the Rhythmstring used in the rhythmstring field. */
    rhythm_version?: number;
  };
  /** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
  bars?: TimeIntervalObject[];
  /** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
  beats?: TimeIntervalObject[];
  /** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
  sections?: SectionObject[];
  /** Each segment contains a roughly conisistent sound throughout its duration. */
  segments?: SegmentObject[];
  /** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
  tatums?: TimeIntervalObject[];
};
export type RecommendationSeedObject = {
  /** The number of tracks available after min\_\* and max\_\* filters have been applied.
   */
  afterFilteringSize?: number;
  /** The number of tracks available after relinking for regional availability.
   */
  afterRelinkingSize?: number;
  /** A link to the full track or artist data for this seed. For tracks this will be a link to a Track Object. For artists a link to an Artist Object. For genre seeds, this value will be `null`.
   */
  href?: string;
  /** The id used to select this seed. This will be the same as the string used in the `seed_artists`, `seed_tracks` or `seed_genres` parameter.
   */
  id?: string;
  /** The number of recommended tracks available for this seed.
   */
  initialPoolSize?: number;
  /** The entity type of this seed. One of `artist`, `track` or `genre`.
   */
  type?: string;
};
export type RecommendationsObject = {
  /** An array of recommendation seed objects.
   */
  seeds: RecommendationSeedObject[];
  /** An array of track objects ordered according to the parameters supplied.
   */
  tracks: TrackObject[];
};
export type DeviceObject = {
  /** The device ID. This ID is unique and persistent to some extent. However, this is not guaranteed and any cached `device_id` should periodically be cleared out and refetched as necessary. */
  id?: string | null;
  /** If this device is the currently active device. */
  is_active?: boolean;
  /** If this device is currently in a private session. */
  is_private_session?: boolean;
  /** Whether controlling this device is restricted. At present if this is "true" then no Web API commands will be accepted by this device. */
  is_restricted?: boolean;
  /** A human-readable name for the device. Some devices have a name that the user can configure (e.g. \"Loudest speaker\") and some devices have a generic name associated with the manufacturer or device model. */
  name?: string;
  /** Device type, such as "computer", "smartphone" or "speaker". */
  type?: string;
  /** The current volume in percent. */
  volume_percent?: number | null;
  /** If this device can be used to set the volume. */
  supports_volume?: boolean;
};
export type ContextObject = {
  /** The object type, e.g. "artist", "playlist", "album", "show".
   */
  type?: string;
  /** A link to the Web API endpoint providing full details of the track. */
  href?: string;
  /** External URLs for this context. */
  external_urls?: ExternalUrlObject;
  /** The [Spotify URI](/documentation/web-api/concepts/spotify-uris-ids) for the context.
   */
  uri?: string;
};
export type DisallowsObject = {
  /** Interrupting playback. Optional field. */
  interrupting_playback?: boolean;
  /** Pausing. Optional field. */
  pausing?: boolean;
  /** Resuming. Optional field. */
  resuming?: boolean;
  /** Seeking playback location. Optional field. */
  seeking?: boolean;
  /** Skipping to the next context. Optional field. */
  skipping_next?: boolean;
  /** Skipping to the previous context. Optional field. */
  skipping_prev?: boolean;
  /** Toggling repeat context flag. Optional field. */
  toggling_repeat_context?: boolean;
  /** Toggling shuffle flag. Optional field. */
  toggling_shuffle?: boolean;
  /** Toggling repeat track flag. Optional field. */
  toggling_repeat_track?: boolean;
  /** Transfering playback between devices. Optional field. */
  transferring_playback?: boolean;
};
export type CurrentlyPlayingContextObject = {
  /** The device that is currently active.
   */
  device?: DeviceObject;
  /** off, track, context */
  repeat_state?: string;
  /** If shuffle is on or off. */
  shuffle_state?: boolean;
  /** A Context Object. Can be `null`. */
  context?: ContextObject;
  /** Unix Millisecond Timestamp when playback state was last changed (play, pause, skip, scrub, new song, etc.). */
  timestamp?: number;
  /** Progress into the currently playing track or episode. Can be `null`. */
  progress_ms?: number;
  /** If something is currently playing, return `true`. */
  is_playing?: boolean;
  /** The currently playing track or episode. Can be `null`. */
  item?:
    | ({
        type: "TrackObject";
      } & TrackObject)
    | ({
        type: "EpisodeObject";
      } & EpisodeObject);
  /** The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
   */
  currently_playing_type?: string;
  /** Allows to update the user interface based on which playback actions are available within the current context.
   */
  actions?: DisallowsObject;
};
export type CurrentlyPlayingObject = {
  /** A Context Object. Can be `null`. */
  context?: ContextObject;
  /** Unix Millisecond Timestamp when data was fetched */
  timestamp?: number;
  /** Progress into the currently playing track or episode. Can be `null`. */
  progress_ms?: number;
  /** If something is currently playing, return `true`. */
  is_playing?: boolean;
  /** The currently playing track or episode. Can be `null`. */
  item?:
    | ({
        type: "TrackObject";
      } & TrackObject)
    | ({
        type: "EpisodeObject";
      } & EpisodeObject);
  /** The object type of the currently playing item. Can be one of `track`, `episode`, `ad` or `unknown`.
   */
  currently_playing_type?: string;
  /** Allows to update the user interface based on which playback actions are available within the current context.
   */
  actions?: DisallowsObject;
};
export type PlayHistoryObject = {
  /** The track the user listened to. */
  track?: TrackObject;
  /** The date and time the track was played. */
  played_at?: string;
  /** The context the track was played from. */
  context?: ContextObject;
};
export type CursorPagingPlayHistoryObject = CursorPagingObject & {
  items?: PlayHistoryObject[];
};
export type QueueObject = {
  /** The currently playing track or episode. Can be `null`. */
  currently_playing?:
    | ({
        type: "TrackObject";
      } & TrackObject)
    | ({
        type: "EpisodeObject";
      } & EpisodeObject);
  /** The tracks or episodes in the queue. Can be empty. */
  queue?: (
    | ({
        type: "TrackObject";
      } & TrackObject)
    | ({
        type: "EpisodeObject";
      } & EpisodeObject)
  )[];
};
