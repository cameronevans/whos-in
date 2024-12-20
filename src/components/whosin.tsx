import { useParentSize } from "@visx/responsive";
import { Network, NetworkZoom } from "./network";
import { Search } from "./search";
import { useState } from "react";
import { useArtistsById, useArtistsByIdRelatedArtists } from "../api/hooks";

export const Whosin = () => {
  const { width, height, parentRef } = useParentSize();
  const [artistId = "", setArtistId] = useState<string>();

  const { data } = useArtistsByIdRelatedArtists(
    { params: { id: artistId } },
    { enabled: !!artistId }
  );

  console.log({ width, height });
  return (
    <>
      <Search
        onSelect={({ value: [id] }) => {
          setArtistId(id);
        }}
      />
      <div ref={parentRef} style={{ width: "80vw", height: "80vh" }}>
        {/* <NetworkZoom width={width} height={height} /> */}
        <Network width={width} height={height} />
      </div>
    </>
  );
};
