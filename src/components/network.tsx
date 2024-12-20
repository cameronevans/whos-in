import { DefaultNode, Graph } from "@visx/network";
import { ParentSize, useParentSize } from "@visx/responsive";
import { Zoom } from "@visx/zoom";

export type NetworkProps = {
  width: number;
  height: number;
};

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

const nodes: CustomNode[] = [
  { x: 50, y: 20 },
  { x: 200, y: 250 },
  { x: 300, y: 40, color: "#26deb0" },
];

const links: CustomLink[] = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[0] },
];

const graph = {
  nodes,
  links,
};

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

export const Network = ({ width, height }: NetworkProps) => {
  console.log({ width, height });

  return width < 10 ? null : (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} fill={background} />
      <Graph<CustomLink, CustomNode>
        graph={graph}
        top={20}
        left={100}
        nodeComponent={({ node: { color } }) =>
          color ? <DefaultNode fill={color} /> : <DefaultNode />
        }
        linkComponent={({ link: { source, target, dashed } }) => (
          <line
            x1={source.x}
            y1={source.y}
            x2={target.x}
            y2={target.y}
            strokeWidth={2}
            stroke="#999"
            strokeOpacity={0.6}
            strokeDasharray={dashed ? "8,4" : undefined}
          />
        )}
      />
    </svg>
  );
};
