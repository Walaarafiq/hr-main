"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var recharts_1 = require("recharts");
var data = [
    { name: "المكتب الرئيسي - غزة", value: 80 },
    { name: "مكتب الشمال", value: 50 },
    { name: "مكتب الوسطى", value: 10 },
    { name: "مكتب الجنوب", value: 48 },
    { name: "مكتب رفح", value: 100 },
];
var COLORS = [
    "#1e3a8a",
    "#2563eb",
    "#0f766e",
    "#64748b",
    "#334155",
];
function AttendanceChartDonut() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card p-3 mt-3", style: { width: '550px', marginRight: '7%' }, children: [(0, jsx_runtime_1.jsx)("h6", { className: "fw-bold mb-3", children: "\u0627\u0644\u062D\u0636\u0648\u0631 \u0648\u0627\u0644\u063A\u064A\u0627\u0628 \u0627\u0644\u062E\u0627\u0635 \u0628\u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: 250, children: (0, jsx_runtime_1.jsxs)(recharts_1.PieChart, { children: [(0, jsx_runtime_1.jsx)(recharts_1.Pie, { data: data, dataKey: "value", innerRadius: 70, outerRadius: 100, paddingAngle: 3, children: data.map(function (_, index) { return ((0, jsx_runtime_1.jsx)(recharts_1.Cell, { fill: COLORS[index] }, index)); }) }), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {})] }) }), (0, jsx_runtime_1.jsx)("div", { className: "mt-3", children: data.map(function (item, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: "d-flex align-items-center mb-1", children: [(0, jsx_runtime_1.jsx)("span", { style: {
                                width: 10,
                                height: 10,
                                backgroundColor: COLORS[index],
                                display: "inline-block",
                                borderRadius: "50%",
                                marginLeft: 8,
                            } }), (0, jsx_runtime_1.jsxs)("small", { children: [item.name, " (", item.value, " \u0645\u0648\u0638\u0641)"] })] }, index)); }) })] }));
}
exports.default = AttendanceChartDonut;
