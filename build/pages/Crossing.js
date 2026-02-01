"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var JobTitleTable_1 = require("../components/JobTitleTable");
var EmployeesFilters_1 = require("../components/EmployeesFilters");
var CategoriesHeader_1 = require("../components/CategoriesHeader");
var CrossingTable_1 = require("../components/CrossingTable");
function Crossing() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(CategoriesHeader_1.default, { title: "\u0627\u0644\u0645\u0639\u0627\u0628\u0631", desc: "\u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u062D\u0630\u0641 \u0627\u0644\u0642\u064A\u0645." }), (0, jsx_runtime_1.jsx)(EmployeesFilters_1.default, {}), (0, jsx_runtime_1.jsx)(CrossingTable_1.default, {})] }));
}
exports.default = Crossing;
