"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EmpGateSideBar_1 = require("../components/EmpGateSideBar");
var MaritalStatus_1 = require("../components/MaritalStatus");
function MaritalStatusPage() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(EmpGateSideBar_1.default, { children: (0, jsx_runtime_1.jsx)(MaritalStatus_1.default, {}) }) }));
}
exports.default = MaritalStatusPage;
