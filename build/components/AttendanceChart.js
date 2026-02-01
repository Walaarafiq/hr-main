"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var recharts_1 = require("recharts");
var data = [
    { day: "الأحد", attendance: 430, absence: 15 },
    { day: "الإثنين", attendance: 420, absence: 18 },
    { day: "الثلاثاء", attendance: 440, absence: 10 },
    { day: "الأربعاء", attendance: 430, absence: 16 },
    { day: "الخميس", attendance: 415, absence: 20 },
];
function AttendanceChart() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card p-3 mt-3", style: { width: '550px', height: '450px', marginRight: '7%' }, children: [(0, jsx_runtime_1.jsx)("h6", { className: "fw-bold mb-3", children: "\u0645\u062A\u0627\u0628\u0639\u0629 \u062D\u0636\u0648\u0631 \u0648\u063A\u064A\u0627\u0628 \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)(recharts_1.ResponsiveContainer, { width: "100%", height: 250, children: (0, jsx_runtime_1.jsxs)(recharts_1.LineChart, { data: data, children: [(0, jsx_runtime_1.jsx)(recharts_1.CartesianGrid, { strokeDasharray: "3 3" }), (0, jsx_runtime_1.jsx)(recharts_1.XAxis, { dataKey: "day" }), (0, jsx_runtime_1.jsx)(recharts_1.YAxis, {}), (0, jsx_runtime_1.jsx)(recharts_1.Tooltip, {}), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "attendance", stroke: "#22c55e", strokeWidth: 2, name: "\u0627\u0644\u062D\u0636\u0648\u0631" }), (0, jsx_runtime_1.jsx)(recharts_1.Line, { type: "monotone", dataKey: "absence", stroke: "#ef4444", strokeWidth: 2, name: "\u0627\u0644\u063A\u064A\u0627\u0628" })] }) }), (0, jsx_runtime_1.jsx)("small", { className: "text-muted d-block mt-2", children: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0646\u0633\u0628 \u0627\u0644\u062D\u0636\u0648\u0631 \u0648\u0627\u0644\u063A\u064A\u0627\u0628 \u062E\u0644\u0627\u0644 \u0627\u0644\u0623\u0633\u0628\u0648\u0639 \u0627\u0644\u062D\u0627\u0644\u064A" })] }));
}
exports.default = AttendanceChart;
