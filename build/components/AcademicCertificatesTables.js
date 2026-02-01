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
function AcademicCertifcatesTables() {
    var initialEmployees = [
        { id: 1, GovName: "-", EmpNum: "", Certificate: "", state: "", info: "", date: "" },
    ];
    var _a = (0, react_1.useState)(initialEmployees), employees = _a[0], setEmployees = _a[1];
    var _b = (0, react_1.useState)(1), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = (0, react_1.useState)(false), showEditModal = _c[0], setShowEditModal = _c[1];
    var _d = (0, react_1.useState)(null), editItem = _d[0], setEditItem = _d[1];
    var _e = (0, react_1.useState)({ GovName: "", EmpNum: "", Certificate: "", state: "", info: "", date: "" }), form = _e[0], setForm = _e[1];
    var itemsPerPage = 10;
    var totalPages = Math.ceil(employees.length / itemsPerPage);
    var currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    (0, react_1.useEffect)(function () {
        if (editItem) {
            setForm({
                GovName: editItem.GovName,
                EmpNum: editItem.EmpNum,
                Certificate: editItem.Certificate,
                state: editItem.state,
                info: editItem.info,
                date: editItem.date,
            });
        }
    }, [editItem]);
    var handleDelete = function (id) {
        var emp = employees.find(function (e) { return e.id === id; });
        if (window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \"".concat(emp.GovName, "\"\u061F"))) {
            setEmployees(function (prev) { return prev.filter(function (e) { return e.id !== id; }); });
        }
    };
    var handleSaveEdit = function () {
        setEmployees(function (prev) {
            return prev.map(function (emp) {
                return emp.id === editItem.id ? __assign(__assign({}, emp), form) : emp;
            });
        });
        setShowEditModal(false);
        setEditItem(null);
    };
    var handlePrev = function () { if (currentPage > 1)
        setCurrentPage(currentPage - 1); };
    var handleNext = function () { if (currentPage < totalPages)
        setCurrentPage(currentPage + 1); };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "card mt-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", style: { fontSize: "14px" }, children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0634\u0647\u0627\u062F\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u062D\u0627\u0644\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A" }), (0, jsx_runtime_1.jsx)("th", { children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: currentData.map(function (emp, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (currentPage - 1) * itemsPerPage + index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: emp.GovName }), (0, jsx_runtime_1.jsx)("td", { children: emp.Certificate }), (0, jsx_runtime_1.jsx)("td", { children: emp.state }), (0, jsx_runtime_1.jsx)("td", { children: emp.info }), (0, jsx_runtime_1.jsx)("td", { children: emp.date }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-2 mx-1", onClick: function () { return handleDelete(emp.id); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary", onClick: function () { setEditItem(emp); setShowEditModal(true); }, children: "\u270F" })] })] }, emp.id)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-center align-items-center mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handlePrev, disabled: currentPage === 1, children: "< \u0627\u0644\u0633\u0627\u0628\u0642" }), Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn me-1 ".concat(page === currentPage ? 'btn-dark' : 'btn-outline-dark'), onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handleNext, disabled: currentPage === totalPages, children: "\u0627\u0644\u062A\u0627\u0644\u064A >" })] })] }) }), showEditModal && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: "fixed",
                    inset: 0,
                    background: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                }, children: (0, jsx_runtime_1.jsxs)("div", { style: { background: "#fff", padding: 20, borderRadius: 8, width: 400 }, children: [(0, jsx_runtime_1.jsx)("h5", { children: "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: form.GovName, onChange: function (e) { return setForm(__assign(__assign({}, form), { GovName: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0634\u0647\u0627\u062F\u0629" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: form.Certificate, onChange: function (e) { return setForm(__assign(__assign({}, form), { Certificate: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u062D\u0627\u0644\u0629" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: form.state, onChange: function (e) { return setForm(__assign(__assign({}, form), { state: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: form.info, onChange: function (e) { return setForm(__assign(__assign({}, form), { info: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0631\u0641\u0639" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: form.date, onChange: function (e) { return setForm(__assign(__assign({}, form), { date: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary", onClick: function () { return setShowEditModal(false); }, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: handleSaveEdit, children: "\u062D\u0641\u0638" })] })] }) }))] }));
}
exports.default = AcademicCertifcatesTables;
