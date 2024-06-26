const data = { nodes: [], edges: [] };
for (let i = 0; i < 32; i++) {
  data.nodes.push({
    id: `${i}`,
    label: i < 17 ? `employee-${i}` : `company-${i - 17}`,
    dataType: i < 17 ? "employee" : "company",
    style:
      i < 17
        ? { stroke: "#5D7092", fill: "#5D7092", fillOpacity: 0.5 }
        : { stroke: "#5B8FF9", fill: "#5B8FF9", fillOpacity: 0.5 },
  });
}
data.edges = [
  { source: "0", target: "1" },
  { source: "0", target: "2" },
  { source: "0", target: "3" },
  { source: "0", target: "4" },
  { source: "0", target: "5" },
  { source: "0", target: "6" },
  { source: "1", target: "2" },
  { source: "1", target: "3" },
  { source: "1", target: "4" },
  { source: "1", target: "5" },
  { source: "1", target: "6" },
  { source: "2", target: "3" },
  { source: "2", target: "4" },
  { source: "2", target: "5" },
  { source: "2", target: "6" },

  { source: "7", target: "8" },
  { source: "8", target: "9" },
  { source: "9", target: "10" },

  { source: "11", target: "12" },
  { source: "12", target: "13" },
  { source: "13", target: "14" },
  { source: "14", target: "15" },
  { source: "15", target: "16" },
  { source: "11", target: "14" },

  { source: "31", target: "11" },
  { source: "24", target: "4" },
  { source: "23", target: "7" },
];

const legendData = {
  nodes: [
    {
      id: "employee",
      label: "employee",
      style: { stroke: "#5D7092", fill: "#5D7092" },
    },
    {
      id: "company",
      label: "company",
      style: { stroke: "#5B8FF9", fill: "#5B8FF9" },
    },
  ],
  edges: [],
};

export { data, legendData };
