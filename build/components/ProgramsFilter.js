"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Card_1 = require("react-bootstrap/Card");
require("bootstrap/dist/css/bootstrap.min.css");
function ProgramsFilter() {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "employees-filters d-flex justify-content-start align-items-center mt-3 mx-3", style: { fontSize: '12px' }, children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp mx-2 p-1", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center ", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "2" })] }), (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp mx-2 p-1", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0622\u062E\u0631 \u0645\u0634\u0631\u0648\u0639 \u0645\u0636\u0627\u0641" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center ", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A" })] })] }));
}
exports.default = ProgramsFilter;
