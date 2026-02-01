"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var recharts_1 = require("recharts");
var data = [
    { name: "المكتب الرئيسي - غزة", value: 215 },
    { name: "مكتب الشمال", value: 120 },
    { name: "مكتب الوسطى", value: 65 },
    { name: "مكتب الجنوب", value: 48 },
    { name: "مكتب رفح", value: 25 },
];
var COLORS = ["#22c55e", "#3b82f6", "#0ea5e9", "#f59e0b", "#64748b"];
function EmployeesByOfficeChart() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card p-3 mt-3", style: { width: '550px', marginRight: '7%' }, children: [(0, jsx_runtime_1.jsx)("h6", { className: "fw-bold mb-3", children: "\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0645\u0648\u0632\u0639\u064A\u0646 \u062D\u0633\u0628 \u0645\u0643\u0627\u062A\u0628 \u0627\u0644\u0639\u0645\u0644" }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: 250, children: (0, jsx_runtime_1.jsxs)(recharts_1.PieChart, { children: [(0, jsx_runtime_1.jsx)(recharts_1.Pie, { data: data, dataKey: "value", innerRadius: 70, outerRadius: 100, paddingAngle: 3, children: data.map(function (_, index) { return ((0, jsx_runtime_1.jsx)(recharts_1.Cell, { fill: COLORS[index] }, index)); }) }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {})] }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-3", children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "d-flex align-items-center mb-1", children: [(0, jsx_runtime_1.jsx)("span", { style: {
                                width: 10,
                                height: 10,
                                backgroundColor: COLORS[index],
                                display: "inline-block",
                                borderRadius: "50%",
                                marginLeft: 8,
                            } }), (0, jsx_runtime_1.jsxs)("small", { children: [item.name, " (", item.value, " \u0645\u0648\u0638\u0641)"] })] }, index)); }) })] }));
}
exports.default = EmployeesByOfficeChart;
