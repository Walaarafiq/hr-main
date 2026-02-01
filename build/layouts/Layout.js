"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Layout;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var SideBar_1 = require("../components/SideBar");
function Layout() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(SideBar_1.default, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) }) }));
}
