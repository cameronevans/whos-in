import { Graph } from "@visx/network";
import { Zoom } from "@visx/zoom";
import { ZoomProps } from "@visx/zoom/lib/Zoom";
import * as d3 from "d3";
import { Dispatch, SetStateAction } from "react";
import { css } from "../../styled-system/css";

interface CustomNode {
  x: number;
  y: number;
  color?: string;
}

interface CustomLink {
  source: CustomNode;
  target: CustomNode;
  dashed?: boolean;
}

export interface Node extends d3.SimulationNodeDatum {
  id: number;
  name: string;
  nodes: number[];
  img: string;
}
export interface Link extends d3.SimulationLinkDatum<Node> {
  source: number;
  target: number;
}

export const background = "#272b4d";

export const NetworkZoom = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <Zoom
      width={width}
      height={height}
      scaleXMin={0.5}
      scaleYMin={0.5}
      scaleXMax={2}
      scaleYMax={2}
    >
      {(zoom) => <Network width={width} height={height} />}
    </Zoom>
  );
};

const RADIUS = 15;
const SCALE = 10;

export const Network = ({
  width,
  height,
  nodes: nodesData,
  links: linksData,
  onSelect,
  zoom,
  expandedIds,
}: {
  width: number;
  height: number;
  nodes: Node[];
  links: Link[];
  onSelect: Dispatch<SetStateAction<number[]>>;
  zoom: Parameters<ZoomProps<SVGSVGElement>["children"]>[0];
  expandedIds: number[];
}) => {
  const links = linksData.map((d) => ({ ...d }));
  const nodes = nodesData.map((d) => ({ ...d }));
  // Create a simulation with several forces.
  // const simulation = d3
  //   .forceSimulation(nodes)
  //   .force(
  //     "link",
  //     d3.forceLink(links).id((d) => d.id)
  //   )
  //   .force("charge", d3.forceManyBody())
  //   .force("x", d3.forceX())
  //   .force("y", d3.forceY());

  const simulation = d3
    .forceSimulation(nodes) // apply the simulation to our array of nodes

    // Force #1: links between nodes
    .force(
      "link",
      d3.forceLink<Node, Link>(links).id((d) => d.id),
    )

    // Force #2: avoid node overlaps
    .force("collide", d3.forceCollide().radius(RADIUS))

    // Force #3: attraction or repulsion between nodes
    .force("charge", d3.forceManyBody())

    // Force #4: nodes are attracted by the center of the chart area
    // .force("center", d3.forceCenter(width / 2, height / 2))

    // test
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  return (
    <svg
      width={width}
      height={height}
      // viewBox={[-width / 2, -height / 2, width, height].join(" ")}
      // style={{ maxWidth: "100%", height: "auto" }}
      ref={zoom.containerRef}
      cursor={zoom.isDragging ? "grabbing" : "grab"}
    >
      <rect width={width} height={height} rx={14} fill={background} />
      <g transform={zoom.toString()}>
        <Graph
          top={height / 2}
          left={width / 2}
          graph={{ nodes, links }}
          // x={(d) => d.x}
          // y={(d) => d.y}
          nodeComponent={({ node: { id, nodes, img, name, x = 0, y = 0 } }) => {
            const xScaled = x * SCALE;
            const yScaled = y * SCALE;
            return (
              <>
                <foreignObject
                  width={RADIUS * 2}
                  height={RADIUS * 2}
                  x={xScaled}
                  y={yScaled}
                  cursor="pointer"
                >
                  <div
                    className={css({
                      cursor: "pointer",
                    })}
                  >
                    <div
                      onClick={() => {
                        onSelect((ids) => {
                          const s = [
                            ...new Set([id, ...ids, ...nodes.map(Number)]),
                          ];
                          console.log("sel", s);
                          return s;
                        });
                      }}
                      className={css({
                        borderRadius: "9999px",
                        display: "flex",
                        width: `${RADIUS * 2}px`,
                        height: `${RADIUS * 2}px`,
                        justifyContent: "center",
                        alignItems: "center",
                        overflow: "hidden",
                      })}
                      title={name}
                    >
                      <img
                        src={
                          img
                            ? img
                            : "http://vignette1.wikia.nocookie.net/nintendo/images/8/85/MissingNoNormal.png/revision/latest?cb=20131114211037&path-prefix=en"
                        }
                        className={css({
                          cursor: "pointer",
                          borderRadius: "9999px",
                          flex: 1,
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        })}
                      />
                      <div
                        className={css({
                          cursor: "pointer",
                          height: "100%",
                          width: "100%",
                          position: "absolute",
                          borderRadius: "9999px",
                          display: "block",
                          background: expandedIds?.includes(id)
                            ? "linear-gradient(rgba(46, 11, 202, 0.5), transparent)"
                            : "linear-gradient(rgba(209, 168, 35, 0.5), transparent)",
                        })}
                      />
                    </div>
                  </div>
                </foreignObject>
                <text
                  textAnchor="middle"
                  fill="white"
                  x={xScaled + RADIUS}
                  y={yScaled + RADIUS * 3}
                >
                  {name}
                </text>
              </>
            );
          }}
          linkComponent={({ link: { source, target } }) => {
            return (
              <line
                // x1={source.x + RADIUS}
                // y1={source.y + RADIUS}
                // x2={target.x + RADIUS}
                // y2={target.y + RADIUS}
                x1={source.x * SCALE + RADIUS}
                y1={source.y * SCALE + RADIUS}
                x2={target.x * SCALE + RADIUS}
                y2={target.y * SCALE + RADIUS}
                strokeWidth={2}
                stroke="#999"
                strokeOpacity={0.6}
                // strokeDasharray={dashed ? "8,4" : undefined}
              />
            );
          }}
        />
      </g>
    </svg>
  );
};
