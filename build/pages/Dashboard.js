"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var DashboardCards_1 = require("../components/DashboardCards");
var AttendanceChartDonut_1 = require("../components/AttendanceChartDonut");
var AttendanceChart_1 = require("../components/AttendanceChart");
var EmployeesByOfficeChart_1 = require("../components/EmployeesByOfficeChart");
function Dashboard() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(DashboardCards_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { className: 'd-flex mt-3', children: [(0, jsx_runtime_1.jsx)("div", { className: "col-md-6", children: (0, jsx_runtime_1.jsx)(AttendanceChartDonut_1.default, {}) }), (0, jsx_runtime_1.jsx)("div", { className: "col-md-6", children: (0, jsx_runtime_1.jsx)(EmployeesByOfficeChart_1.default, {}) })] })] }));
}
exports.default = Dashboard;
