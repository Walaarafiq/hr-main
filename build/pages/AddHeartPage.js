"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddHeart_1 = require("../components/AddHeart");
var EmpGateSideBar_1 = require("../components/EmpGateSideBar");
function AddHeartPage() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(EmpGateSideBar_1.default, { children: (0, jsx_runtime_1.jsx)(AddHeart_1.default, {}) }) }));
}
exports.default = AddHeartPage;
