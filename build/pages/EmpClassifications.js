"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var EmployeesFilters_1 = require("../components/EmployeesFilters");
var EmployeesTable_1 = require("../components/EmployeesTable");
var ClassificationHeader_1 = require("../components/ClassificationHeader");
var EmpClassificationsTable_1 = require("../components/EmpClassificationsTable");
function EmpClassifications() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(ClassificationHeader_1.default, { title: "\u062A\u0635\u0646\u064A\u0641\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0627\u0644\u0639\u0627\u0645\u0629", desc: "\u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0648\u0627\u0644\u0628\u062D\u062B \u0627\u0644\u0645\u062A\u0642\u062F\u0645 \u0639\u0628\u0631 \u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u062A\u062E\u0635\u0635\u064A\u0629" }), (0, jsx_runtime_1.jsx)(EmployeesFilters_1.default, {}), (0, jsx_runtime_1.jsx)(EmpClassificationsTable_1.default, {})] }));
}
exports.default = EmpClassifications;
