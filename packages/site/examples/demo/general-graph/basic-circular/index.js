import F6 from "@antv/f6";
import data from "./data";
import circular from "@antv/f6/dist/extends/layout/circularLayout";
const width = 375;
const height = 600;
const pixelRatio = 2;
F6.registerLayout("circular", circular);
const graph = new F6.Graph({
  width,
  height,
  pixelRatio,
  fitView: true,
  modes: {
    default: ["drag-canvas", "drag-node"],
  },
  layout: {
    type: "circular",
  },
  animate: true,
  defaultNode: {
    size: 20,
  },
});
graph.data(data);
graph.render();
graph.fitView();
