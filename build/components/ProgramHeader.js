"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var AddProgramsModal_1 = require("./AddProgramsModal");
var Card_1 = require("react-bootstrap/Card");
function ProgramHeader(_a) {
    var title = _a.title, desc = _a.desc, onAddProject = _a.onAddProject;
    var _b = (0, react_1.useState)(false), showAddModal = _b[0], setShowAddModal = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "employees-header d-flex justify-content-between align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { style: { fontSize: "18px", fontWeight: "bold" }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: desc })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex gap-2", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/temporary-contrast-employees", className: "btn btn-outline-warning", style: { fontSize: "13px" }, children: "\u0627\u0644\u0625\u0646\u062A\u0642\u0627\u0644 \u0625\u0644\u0649 \u0645\u0648\u0638\u0641\u064A \u0627\u0644\u0639\u0642\u0648\u062F \u0627\u0644\u0645\u0624\u0642\u062A\u0629" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", style: { fontSize: "13px" }, onClick: function () { return setShowAddModal(true); }, children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex", children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp col-2 mx-2 mt-2", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0639\u062F\u062F \u0627\u0644\u0628\u0631\u0627\u0645\u062C" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center ", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "4" })] }), (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp col-2 mx-1 mt-2", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0622\u062E\u0631 \u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center ", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639 \u0627\u0644\u0628\u0644\u062C\u064A\u0643\u064A" })] })] }), showAddModal && ((0, jsx_runtime_1.jsx)(AddProgramsModal_1.default, { onClose: function () { return setShowAddModal(false); }, onSave: function (project) {
                    onAddProject(project);
                    setShowAddModal(false);
                } }))] }));
}
exports.default = ProgramHeader;
