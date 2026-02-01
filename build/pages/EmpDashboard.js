"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EmpGateSideBar_1 = require("../components/EmpGateSideBar");
var react_router_dom_1 = require("react-router-dom");
var DashHeader_1 = require("../components/DashHeader");
var EmpDashCards_1 = require("../components/EmpDashCards");
var ServicesHeader_1 = require("../components/ServicesHeader");
var EmpDetailsCards_1 = require("../components/EmpDetailsCards");
function EmpDashboard() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(EmpGateSideBar_1.default, { children: [(0, jsx_runtime_1.jsx)(DashHeader_1.default, { name: "\u0639\u0644\u0627\u0621" }), (0, jsx_runtime_1.jsx)(EmpDashCards_1.default, {}), (0, jsx_runtime_1.jsx)(ServicesHeader_1.default, {}), (0, jsx_runtime_1.jsx)(EmpDetailsCards_1.default, {}), (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {})] }) }));
}
exports.default = EmpDashboard;
