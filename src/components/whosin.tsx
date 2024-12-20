import { useParentSize } from "@visx/responsive";
import { Link, Network, NetworkZoom, Node } from "./network";
import { Search } from "./search";
import { useMemo, useState } from "react";
import {
  useQueries,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import { Zoom } from "@visx/zoom";
import { remaining } from "../App";

interface GroupMember {
  id: number;
  name: string;
  active: boolean;
}

interface Artist {
  id: number;
  name: string;
  members?: GroupMember[];
  groups?: GroupMember[];
  images?: { resource_url: string }[];
}

const createNode = (data: Artist) => {
  const { id, name, images: [{ resource_url = "" }] = [{}] } = data;
  const members = data.members?.map((member) => member.id) ?? [];
  const groups = data.groups?.map((member) => member.id) ?? [];
  const subNodes = [...members, ...groups];
  return { id, name, img: resource_url, nodes: subNodes };
};

export const Whosin = () => {
  const { width, height, parentRef } = useParentSize();
  const [artistIds, setArtistIds] = useState<number[]>([
    // 28963,
    // 77192,
    //  39770,
    // 77192, 177139, 258554, 980761,
  ]);
  // const [artistIds, setArtistIds] = useState<number[]>([]);
  const queryClient = useQueryClient();

  // root nodes
  const queries = useQueries({
    queries: artistIds.map(
      (id) =>
        ({
          queryKey: [`/artists/${id}`],
        }) as UseQueryOptions<Artist>,
    ),
  });

  // artist node
  // member nodes
  // links

  // link artist -> member
  // click artist
  // load members
  // for each mem

  const { nodes, links } = useMemo(() => {
    const nodes: Node[] = [];
    const links: Link[] = [];
    queries.forEach(({ data, refetch }) => {
      if (data) {
        const node = createNode(data);
        if (!nodes.find(({ id }) => id === data.id)) {
          nodes.push(node);
        }
        node.nodes.forEach((subId) => {
          const subData = queryClient.getQueryData<Artist>([
            `/artists/${subId}`,
          ]);
          if (subData) {
            const subNode = createNode(subData);
            links.push({ source: node.id, target: subId });
            if (!nodes.find(({ id }) => id === subId)) {
              console.log("PUSH", subId);
              nodes.push(subNode);
            } else {
              console.log("YOOOOO", subId);
            }
          }
        });
      } else {
        refetch();
      }
    });
    return { nodes, links };
  }, [queries]);

  console.log({ artistIds, nodes, links });

  return (
    <>
      <Search onSelect={({ value }) => setArtistIds(value.map(Number))} />
      Remaining requests: {remaining}
      <div ref={parentRef} style={{ width: "80vw", height: "80vh" }}>
        {/* <NetworkZoom width={width} height={height} /> */}
        <Zoom<SVGSVGElement>
          width={width}
          height={height}
          scaleXMin={0.5}
          scaleYMin={0.5}
          scaleXMax={2}
          scaleYMax={2}
          // key={id}
        >
          {(zoom) => (
            <>
              <Network
                zoom={zoom}
                width={width}
                height={height}
                nodes={nodes}
                links={links}
                onSelect={setArtistIds}
                expandedIds={artistIds}
              />
              <rect
                fill="transparent"
                width={zoom.isDragging ? width : 0}
                height={zoom.isDragging ? height : 0}
                // TODO: why does drag happen on the whole page in the visx demo?
                onMouseLeave={zoom.dragEnd}
                onMouseUp={zoom.dragEnd}
                onMouseMove={zoom.dragMove}
              />
            </>
          )}
        </Zoom>
      </div>
    </>
  );
};
