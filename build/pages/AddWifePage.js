"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddWife_1 = require("../components/AddWife");
var EmpGateSideBar_1 = require("../components/EmpGateSideBar");
function AddWifePage() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(EmpGateSideBar_1.default, { children: (0, jsx_runtime_1.jsx)(AddWife_1.default, {}) }) }));
}
exports.default = AddWifePage;
