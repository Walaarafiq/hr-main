"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var FiltersModalEmp_1 = require("./FiltersModalEmp");
var Nav_1 = require("react-bootstrap/Nav");
var react_router_dom_1 = require("react-router-dom");
function EmployeesHeader(_a) {
    var _b = _a.title, title = _b === void 0 ? "عنوان افتراضي" : _b, _c = _a.desc, desc = _c === void 0 ? "وصف" : _c, onApplyFilters = _a.onApplyFilters;
    var _d = (0, react_1.useState)(false), showFilters = _d[0], setShowFilters = _d[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "employees-header d-flex justify-content-between align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { style: { textAlign: "right", fontSize: "18px", fontWeight: "bold" }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: desc })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex gap-2", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-warning", style: { fontSize: "13px", padding: "6px 10px" }, onClick: function () { return setShowFilters(true); }, children: "\u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629" }), (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/add-employee", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", style: { fontSize: "13px", padding: "6px 10px" }, children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F" }) })] })] }), showFilters && ((0, jsx_runtime_1.jsx)(FiltersModalEmp_1.default, { onClose: function () { return setShowFilters(false); }, onApply: function (filters) {
                    onApplyFilters(filters);
                    setShowFilters(false);
                } }))] }));
}
exports.default = EmployeesHeader;
