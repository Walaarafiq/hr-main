"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EmployeesHeader_1 = require("../components/EmployeesHeader");
var EmployeesFilters_1 = require("../components/EmployeesFilters");
var TemporaryEmpTable_1 = require("../components/TemporaryEmpTable");
function TemporaryContrastEmployees() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(EmployeesHeader_1.default, { title: "\u0645\u0648\u0638\u0641\u064A \u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0624\u0642\u062A\u0629", desc: "\u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645 \u0639\u0628\u0631 \u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" }), (0, jsx_runtime_1.jsx)(EmployeesFilters_1.default, {}), (0, jsx_runtime_1.jsx)(TemporaryEmpTable_1.default, {})] }));
}
exports.default = TemporaryContrastEmployees;
