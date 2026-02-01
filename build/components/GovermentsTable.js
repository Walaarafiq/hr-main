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
var EditEmpWizard_1 = require("../components/EditEmpWizard");
function GovermentsTable(_a) {
    var employees = _a.employees, setEmployees = _a.setEmployees;
    var _b = (0, react_1.useState)(false), showEditModal = _b[0], setShowEditModal = _b[1];
    var _c = (0, react_1.useState)(false), showViewModal = _c[0], setShowViewModal = _c[1];
    var _d = (0, react_1.useState)(null), selectedEmployee = _d[0], setSelectedEmployee = _d[1];
    var _e = (0, react_1.useState)(null), editEmployeeData = _e[0], setEditEmployeeData = _e[1];
    var _f = (0, react_1.useState)(1), currentPage = _f[0], setCurrentPage = _f[1];
    var itemsPerPage = 10;
    var totalPages = Math.ceil(employees.length / itemsPerPage);
    var currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    var handlePrev = function () { if (currentPage > 1)
        setCurrentPage(currentPage - 1); };
    var handleNext = function () { if (currentPage < totalPages)
        setCurrentPage(currentPage + 1); };
    var handleDelete = function (empId) {
        var emp = employees.find(function (e) { return e.id === empId; });
        if (window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \u0627\u0644\u0645\u0648\u0638\u0641 \"".concat(emp.GovName, "\"\u061F"))) {
            setEmployees(function (prev) { return prev.filter(function (e) { return e.id !== empId; }); });
        }
    };
    var openViewModal = function (emp) {
        setSelectedEmployee(emp);
        setShowViewModal(true);
    };
    var openEditModal = function (emp) {
        setEditEmployeeData(__assign({}, emp)); // عمل نسخة للتعديل
        setShowEditModal(true);
    };
    var saveEdit = function () {
        if (!editEmployeeData)
            return;
        setEmployees(function (prev) {
            return prev.map(function (e) { return e.id === editEmployeeData.id ? editEmployeeData : e; });
        });
        setShowEditModal(false);
    };
    var handleEditChange = function (field, value) {
        setEditEmployeeData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    var ModalWrapper = function (_a) {
        var children = _a.children, onClose = _a.onClose;
        return ((0, jsx_runtime_1.jsx)("div", { onClick: onClose, style: {
                position: "fixed", inset: 0, backgroundColor: "rgba(200,200,200,0.5)",
                display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
            }, children: (0, jsx_runtime_1.jsx)("div", { onClick: function (e) { return e.stopPropagation(); }, style: {
                    backgroundColor: "#fff", padding: "30px", borderRadius: "10px",
                    maxWidth: "700px", width: "90%", maxHeight: "90%", overflowY: "auto",
                    boxShadow: "0 0 15px rgba(0,0,0,0.2)"
                }, children: children }) }));
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "card mt-4", style: { overflow: 'visible' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", style: { fontSize: "14px" }, children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0642\u064A\u0645\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { style: { fontSize: "13px" }, children: currentData.map(function (emp, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (currentPage - 1) * itemsPerPage + index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: emp.GovName }), (0, jsx_runtime_1.jsx)("td", { children: emp.EmpNum }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-2", onClick: function () { return handleDelete(emp.id); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary me-2", onClick: function () { return openEditModal(emp); }, children: "\u270F" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-warning me-2", onClick: function () { return openViewModal(emp); }, children: "\uD83D\uDC41" })] })] }, emp.id)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-center align-items-center mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handlePrev, disabled: currentPage === 1, children: "< \u0627\u0644\u0633\u0627\u0628\u0642" }), Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn me-1 ".concat(page === currentPage ? 'btn-dark' : 'btn-outline-dark'), onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handleNext, disabled: currentPage === totalPages, children: "\u0627\u0644\u062A\u0627\u0644\u064A >" })] })] }) }), showViewModal && selectedEmployee && ((0, jsx_runtime_1.jsxs)(ModalWrapper, { onClose: function () { return setShowViewModal(false); }, children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-3", children: "\u0639\u0631\u0636 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0627\u0644\u0642\u064A\u0645\u0629:" }), " ", selectedEmployee.GovName] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646:" }), " ", selectedEmployee.EmpNum] }), (0, jsx_runtime_1.jsx)("div", { className: "text-end", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary mt-3", onClick: function () { return setShowViewModal(false); }, children: "\u0625\u063A\u0644\u0627\u0642" }) })] })), showEditModal && editEmployeeData && ((0, jsx_runtime_1.jsxs)(ModalWrapper, { onClose: function () { return setShowEditModal(false); }, children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-3", children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0642\u064A\u0645\u0629:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", value: editEmployeeData.GovName, onChange: function (e) { return handleEditChange("GovName", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646:" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", type: "number", value: editEmployeeData.EmpNum, onChange: function (e) { return handleEditChange("EmpNum", e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-end mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary me-2 mx-1", onClick: function () { return setShowEditModal(false); }, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", onClick: saveEdit, children: "\u062D\u0641\u0638" })] })] }))] }));
}
exports.default = GovermentsTable;
