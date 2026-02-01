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
function CategoriesTable() {
    var initialEmployees = [
        { id: 1, GovName: "الاولى", EmpNum: "1 موظف" },
        { id: 2, GovName: "الثالثة", EmpNum: "10 موظفين" },
        { id: 3, GovName: "الثانية", EmpNum: "3 موظفين" },
        { id: 4, GovName: "الخامسة", EmpNum: "11 موظف" },
        { id: 5, GovName: "الاولى", EmpNum: "50 موظف" },
    ];
    var _a = (0, react_1.useState)(initialEmployees), employees = _a[0], setEmployees = _a[1];
    var _b = (0, react_1.useState)(false), showModal = _b[0], setShowModal = _b[1];
    var _c = (0, react_1.useState)(null), selectedEmployee = _c[0], setSelectedEmployee = _c[1];
    var _d = (0, react_1.useState)(false), isEdit = _d[0], setIsEdit = _d[1]; // هل المودال للتعديل؟
    var _e = (0, react_1.useState)(1), currentPage = _e[0], setCurrentPage = _e[1];
    var itemsPerPage = 10;
    var totalPages = Math.ceil(employees.length / itemsPerPage);
    var currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    var handlePrev = function () { if (currentPage > 1)
        setCurrentPage(currentPage - 1); };
    var handleNext = function () { if (currentPage < totalPages)
        setCurrentPage(currentPage + 1); };
    var handleDelete = function (empId) {
        var emp = employees.find(function (e) { return e.id === empId; });
        if (window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \"".concat(emp.GovName, "\"\u061F"))) {
            setEmployees(function (prev) { return prev.filter(function (e) { return e.id !== empId; }); });
        }
    };
    var openEditModal = function (emp) {
        setSelectedEmployee(__assign({}, emp));
        setIsEdit(true);
        setShowModal(true);
    };
    var openViewModal = function (emp) {
        setSelectedEmployee(emp);
        setIsEdit(false);
        setShowModal(true);
    };
    var saveEdit = function () {
        setEmployees(function (prev) {
            return prev.map(function (emp) { return emp.id === selectedEmployee.id ? selectedEmployee : emp; });
        });
        setShowModal(false);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "card mt-4", style: { overflow: 'visible' }, children: (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", style: { fontSize: "14px" }, children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0642\u064A\u0645\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { style: { fontSize: "13px" }, children: currentData.map(function (emp, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (currentPage - 1) * itemsPerPage + index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: emp.GovName }), (0, jsx_runtime_1.jsx)("td", { children: emp.EmpNum }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-2", onClick: function () { return handleDelete(emp.id); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary me-2", onClick: function () { return openEditModal(emp); }, children: "\u270F" })] })] }, emp.id)); }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-center align-items-center mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handlePrev, disabled: currentPage === 1, children: "< \u0627\u0644\u0633\u0627\u0628\u0642" }), Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn me-1 ".concat(page === currentPage ? 'btn-dark' : 'btn-outline-dark'), onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handleNext, disabled: currentPage === totalPages, children: "\u0627\u0644\u062A\u0627\u0644\u064A >" })] })] }) }), showModal && selectedEmployee && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                    backgroundColor: "rgba(128,128,128,0.5)", display: "flex",
                    justifyContent: "center", alignItems: "center", zIndex: 1000
                }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                        backgroundColor: "#fff",
                        padding: "30px",
                        borderRadius: "10px",
                        width: "600px",
                        maxHeight: "90%",
                        overflowY: "auto"
                    }, children: [(0, jsx_runtime_1.jsx)("h5", { children: isEdit ? "تعديل البيانات" : "عرض البيانات" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0627\u0644\u0642\u064A\u0645\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: selectedEmployee.GovName, onChange: function (e) { return isEdit && setSelectedEmployee(__assign(__assign({}, selectedEmployee), { GovName: e.target.value })); }, disabled: !isEdit })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: selectedEmployee.EmpNum, onChange: function (e) { return isEdit && setSelectedEmployee(__assign(__assign({}, selectedEmployee), { EmpNum: e.target.value })); }, disabled: !isEdit })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-end mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary me-2 mx-1", onClick: function () { return setShowModal(false); }, children: "\u0625\u063A\u0644\u0627\u0642" }), isEdit && (0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", onClick: saveEdit, children: "\u062D\u0641\u0638" })] })] }) }))] }));
}
exports.default = CategoriesTable;
