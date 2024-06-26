import F6 from "@antv/f6";
import TreeGraph from "@antv/f6/dist/extends/graph/treeGraph";
import mockData from "./data";
const width = 375;
const height = 600;
const pixelRatio = 2;
const colors = {
  B: "#5B8FF9",
  R: "#F46649",
  Y: "#EEBC20",
  G: "#5BD8A6",
  DI: "#A7A7A7",
};
F6.registerGraph("TreeGraph", TreeGraph);
const defaultConfig = {
  width,
  height,
  modes: {
    default: ["zoom-canvas", "drag-canvas"],
  },
  fitView: true,
  animate: true,
  defaultNode: {
    type: "flow-rect",
  },
  defaultEdge: {
    type: "cubic-horizontal",
    style: {
      stroke: "#CED4D9",
    },
  },
  layout: {
    type: "indented",
    direction: "LR",
    dropCap: false,
    indent: 300,
    getHeight: () => {
      return 60;
    },
  },
};
const props = {
  data: mockData,
  config: {
    padding: [20, 50],
    defaultLevel: 3,
    defaultZoom: 0.8,
    modes: {
      default: ["zoom-canvas", "drag-canvas"],
    },
  },
};

const registerFn = () => {
  F6.registerNode(
    "flow-rect",
    {
      shapeType: "flow-rect",

      draw(cfg, group) {
        const {
          name = "",
          variableName,
          variableValue,
          variableUp,
          label,
          collapsed,
          currency,
          status,
        } = cfg;
        const grey = "#CED4D9";
        const rectConfig = {
          width: 202,
          height: 60,
          lineWidth: 1,
          fontSize: 12,
          fill: "#fff",
          radius: 4,
          stroke: grey,
          opacity: 1,
        };
        const nodeOrigin = {
          x: -rectConfig.width / 2,
          y: -rectConfig.height / 2,
        };
        const textConfig = {
          textAlign: "left",
          textBaseline: "bottom",
        };
        const rect = group.addShape("rect", {
          attrs: {
            x: nodeOrigin.x,
            y: nodeOrigin.y,
            ...rectConfig,
          },
        });
        const rectBBox = rect.getBBox();
        group.addShape("text", {
          attrs: {
            ...textConfig,
            x: 12 + nodeOrigin.x,
            y: 20 + nodeOrigin.y,
            text: name.length > 28 ? `${name.substr(0, 28)}...` : name,
            fontSize: 12,
            opacity: 0.85,
            fill: "#000",
            cursor: "pointer",
          },
          name: "name-shape",
        });
        const price = group.addShape("text", {
          attrs: {
            ...textConfig,
            x: 12 + nodeOrigin.x,
            y: rectBBox.maxY - 12,
            text: label,
            fontSize: 16,
            fill: "#000",
            opacity: 0.85,
          },
        });
        group.addShape("text", {
          attrs: {
            ...textConfig,
            x: price.getBBox().maxX + 5,
            y: rectBBox.maxY - 12,
            text: currency,
            fontSize: 12,
            fill: "#000",
            opacity: 0.75,
          },
        });
        const percentText = group.addShape("text", {
          attrs: {
            ...textConfig,
            x: rectBBox.maxX - 8,
            y: rectBBox.maxY - 12,
            text: `${((variableValue || 0) * 100).toFixed(2)}%`,
            fontSize: 12,
            textAlign: "right",
            fill: colors[status],
          },
        });
        const symbol = variableUp ? "triangle" : "triangle-down";
        const triangle = group.addShape("marker", {
          attrs: {
            ...textConfig,
            x: percentText.getBBox().minX - 10,
            y: rectBBox.maxY - 12 - 6,
            symbol,
            r: 6,
            fill: colors[status],
          },
        });
        group.addShape("text", {
          attrs: {
            ...textConfig,
            x: triangle.getBBox().minX - 4,
            y: rectBBox.maxY - 12,
            text: variableName,
            fontSize: 12,
            textAlign: "right",
            fill: "#000",
            opacity: 0.45,
          },
        });

        if (cfg.children && cfg.children.length) {
          group.addShape("rect", {
            attrs: {
              x: rectConfig.width / 2 - 8,
              y: -8,
              width: 16,
              height: 16,
              stroke: "rgba(0, 0, 0, 0.25)",
              cursor: "pointer",
              fill: "#fff",
            },
            name: "collapse-back",
            modelId: cfg.id,
          });
          group.addShape("text", {
            attrs: {
              x: rectConfig.width / 2,
              y: -1,
              textAlign: "center",
              textBaseline: "middle",
              text: collapsed ? "+" : "-",
              fontSize: 16,
              cursor: "pointer",
              fill: "rgba(0, 0, 0, 0.25)",
            },
            name: "collapse-text",
            modelId: cfg.id,
          });
        }

        this.drawLinkPoints(cfg, group);
        return rect;
      },

      update(cfg, item) {
        const group = item.getContainer();
        this.updateLinkPoints(cfg, group);
      },

      setState(name, value, item) {
        if (name === "collapse") {
          const group = item.getContainer();
          const collapseText = group.find(
            (e) => e.get("name") === "collapse-text",
          );

          if (collapseText) {
            if (!value) {
              collapseText.attr({
                text: "-",
              });
            } else {
              collapseText.attr({
                text: "+",
              });
            }
          }
        }
      },

      getAnchorPoints() {
        return [
          [0, 0.5],
          [1, 0.5],
        ];
      },
    },
    "rect",
  );
  F6.registerEdge(
    "flow-cubic",
    {
      getControlPoints(cfg) {
        let { controlPoints } = cfg;

        if (!controlPoints || !controlPoints.length) {
          const { startPoint, endPoint, sourceNode, targetNode } = cfg;
          const {
            x: startX,
            y: startY,
            coefficientX,
            coefficientY,
          } = sourceNode ? sourceNode.getModel() : startPoint;
          const { x: endX, y: endY } = targetNode
            ? targetNode.getModel()
            : endPoint;
          let curveStart = (endX - startX) * coefficientX;
          let curveEnd = (endY - startY) * coefficientY;
          curveStart = curveStart > 40 ? 40 : curveStart;
          curveEnd = curveEnd < -30 ? curveEnd : -30;
          controlPoints = [
            {
              x: startPoint.x + curveStart,
              y: startPoint.y,
            },
            {
              x: endPoint.x + curveEnd,
              y: endPoint.y,
            },
          ];
        }

        return controlPoints;
      },

      getPath(points) {
        const path = [];
        path.push(["M", points[0].x, points[0].y]);
        path.push([
          "C",
          points[1].x,
          points[1].y,
          points[2].x,
          points[2].y,
          points[3].x,
          points[3].y,
        ]);
        return path;
      },
    },
    "single-line",
  );
};

registerFn();
const { onInit, config } = props;
console.log(onInit);
const tooltip = new F6.Tooltip({
  offsetX: 20,
  offsetY: 30,
  itemTypes: ["node"],
  getContent: (e) => {
    const outDiv = document.createElement("div");
    const nodeName = e.item.getModel().name;
    let formatedNodeName = "";

    for (let i = 0; i < nodeName.length; i++) {
      formatedNodeName = `${formatedNodeName}${nodeName[i]}`;
      if (i !== 0 && i % 20 === 0)
        formatedNodeName = `${formatedNodeName}<br/>`;
    }

    outDiv.innerHTML = `${formatedNodeName}`;
    return outDiv;
  },
  shouldBegin: (e) => {
    if (e.target.get("name") === "name-shape") return true;
    return false;
  },
});
const graph = new F6.TreeGraph({
  width,
  height,
  linkCenter: true,
  pixelRatio,
  fitView: true,
  ...defaultConfig,
  ...config,
  plugins: [tooltip],
});
graph.data(mockData);
graph.render();
graph.fitView();
graph.zoom(config.defaultZoom || 1);

const handleCollapse = (e) => {
  const { target } = e;
  const id = target.get("modelId");
  const item = graph.findById(id);
  const nodeModel = item.getModel();
  nodeModel.collapsed = !nodeModel.collapsed;
  graph.layout();
  graph.setItemState(item, "collapse", nodeModel.collapsed);
};

graph.on("collapse-text:tap", (e) => {
  handleCollapse(e);
});
graph.on("collapse-back:tap", (e) => {
  handleCollapse(e);
});
