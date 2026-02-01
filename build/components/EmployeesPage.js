"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var EmployeesTable_1 = require("../components/EmployeesTable");
var EmployeesFilters_1 = require("./EmployeesFilters");
var EmployeesHeader_1 = require("./EmployeesHeader");
var EmployeesRow_1 = require("./EmployeesRow");
function EmployeesPage() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "p-4", children: [(0, jsx_runtime_1.jsx)(EmployeesHeader_1.default, {}), (0, jsx_runtime_1.jsx)(EmployeesFilters_1.default, {}), (0, jsx_runtime_1.jsx)(EmployeesTable_1.default, {})] }));
}
exports.default = EmployeesPage;
