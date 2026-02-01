"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function ProgramsTable(_a) {
    var projects = _a.projects, setProjects = _a.setProjects;
    var _b = (0, react_1.useState)(false), showViewModal = _b[0], setShowViewModal = _b[1];
    var _c = (0, react_1.useState)(false), showEditModal = _c[0], setShowEditModal = _c[1];
    var _d = (0, react_1.useState)(null), selectedProject = _d[0], setSelectedProject = _d[1];
    var _e = (0, react_1.useState)(null), editProjectData = _e[0], setEditProjectData = _e[1];
    var handleDelete = function (id) {
        var project = projects.find(function (p) { return p.id === id; });
        if (window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0645\u0634\u0631\u0648\u0639 \"".concat(project.name, "\"\u061F"))) {
            setProjects(function (prev) { return prev.filter(function (p) { return p.id !== id; }); });
        }
    };
    var openViewModal = function (project) {
        setSelectedProject(project);
        setShowViewModal(true);
    };
    var openEditModal = function (project) {
        setEditProjectData(__assign({}, project));
        setShowEditModal(true);
    };
    var handleEditChange = function (field, value) {
        setEditProjectData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    var saveEdit = function () {
        setProjects(function (prev) { return prev.map(function (p) { return p.id === editProjectData.id ? editProjectData : p; }); });
        setShowEditModal(false);
    };
    var ModalWrapper = function (_a) {
        var children = _a.children, onClose = _a.onClose;
        return ((0, jsx_runtime_1.jsx)("div", { onClick: onClose, style: {
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000
            }, children: (0, jsx_runtime_1.jsx)("div", { onClick: function (e) { return e.stopPropagation(); }, style: { backgroundColor: "#fff", padding: "20px", borderRadius: "8px", width: "500px", maxHeight: "90%", overflowY: "auto" }, children: children }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card mt-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "card-body", children: (0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", children: (0, jsx_runtime_1.jsxs)("tr", { style: { fontSize: '14px' }, children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0645\u062F\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0645\u0648\u0644\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: projects.map(function (proj, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: proj.name }), (0, jsx_runtime_1.jsx)("td", { children: proj.duration }), (0, jsx_runtime_1.jsx)("td", { children: proj.start_date }), (0, jsx_runtime_1.jsx)("td", { children: proj.end_date }), (0, jsx_runtime_1.jsx)("td", { children: proj.funding_source }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-2", onClick: function () { return handleDelete(proj.id); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary me-2", onClick: function () { return openEditModal(proj); }, children: "\u270F" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-warning me-2", onClick: function () { return openViewModal(proj); }, children: "\uD83D\uDC41" })] })] }, proj.id)); }) })] }) }), showViewModal && selectedProject && ((0, jsx_runtime_1.jsxs)(ModalWrapper, { onClose: function () { return setShowViewModal(false); }, children: [(0, jsx_runtime_1.jsx)("h5", { children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), " ", selectedProject.name] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0645\u062F\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), " ", selectedProject.duration] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), " ", selectedProject.start_date] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), " ", selectedProject.end_date] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0645\u0648\u0644\u0629:" }), " ", selectedProject.funding_source] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0627\u0644\u0648\u0635\u0641:" }), " ", selectedProject.description] }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: function () { return setShowViewModal(false); }, children: "\u0625\u063A\u0644\u0627\u0642" })] })), showEditModal && editProjectData && ((0, jsx_runtime_1.jsxs)(ModalWrapper, { onClose: function () { return setShowEditModal(false); }, children: [(0, jsx_runtime_1.jsx)("h5", { children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editProjectData.name, onChange: function (e) { return handleEditChange("name", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0645\u062F\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editProjectData.duration, onChange: function (e) { return handleEditChange("duration", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editProjectData.start_date, onChange: function (e) { return handleEditChange("start_date", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editProjectData.end_date, onChange: function (e) { return handleEditChange("end_date", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0645\u0648\u0644\u0629:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editProjectData.funding_source, onChange: function (e) { return handleEditChange("funding_source", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0627\u0644\u0648\u0635\u0641:" }), (0, jsx_runtime_1.jsx)("textarea", { className: "form-control", value: editProjectData.description, onChange: function (e) { return handleEditChange("description", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-end mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary me-2 mx-1", onClick: function () { return setShowEditModal(false); }, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", onClick: saveEdit, children: "\u062D\u0641\u0638" })] })] }))] }));
}
exports.default = ProgramsTable;
