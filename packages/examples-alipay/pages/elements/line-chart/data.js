export default {
  nodes: [
    {
      id: "nodeB",
      x: 150,
      y: 150,
      label: "Line1",
      type: "circleLine",
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
      details: [
        { cat: "pv", values: [20, 30, 40, 30, 30], color: "#5B8FF9" },
        { cat: "dal", values: [40, 30, 20, 30, 50], color: "#5AD8A6" },
        { cat: "uv", values: [40, 30, 30, 40, 40], color: "#5D7092" },
        { cat: "sal", values: [20, 30, 50, 20, 20], color: "#F6BD16" },
        { cat: "cal", values: [10, 10, 20, 20, 20], color: "#E8684A" },
      ],
      centerColor: "#5b8ff9",
    },
    {
      id: "nodeB2",
      x: 500,
      y: 150,
      label: "Line2",
      type: "circleLine",
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
      details: [
        { cat: "pv", values: [10, 10, 50, 20, 10], color: "#5ad8a6" },
        { cat: "dal", values: [20, 30, 10, 50, 40], color: "#ff99c3" },
        { cat: "uv", values: [10, 50, 30, 20, 30], color: "#6dc8ec" },
        { cat: "sal", values: [50, 30, 20, 20, 20], color: "#269a99" },
        { cat: "cal", values: [50, 10, 20, 50, 30], color: "#9270CA" },
      ],
      centerColor: "#5b8ff9",
    },
  ],
  edges: [
    {
      source: "nodeB",
      target: "nodeB2",
    },
  ],
};
