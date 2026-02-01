"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// EmployeesTable.jsx
var react_1 = require("react");
var EditEmpWizard_1 = require("../components/EditEmpWizard");
var EditEmployeesForm_1 = require("../components/EditEmployeesForm");
function EmployeesTable(_a) {
    var _this = this;
    var employees = _a.employees, setEmployees = _a.setEmployees;
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(false), showWizard = _c[0], setShowWizard = _c[1];
    var _d = (0, react_1.useState)(false), showEditForm = _d[0], setShowEditForm = _d[1];
    var _e = (0, react_1.useState)(null), selectedEmployee = _e[0], setSelectedEmployee = _e[1];
    var _f = (0, react_1.useState)(false), modalLoading = _f[0], setModalLoading = _f[1];
    var _g = (0, react_1.useState)(1), currentPage = _g[0], setCurrentPage = _g[1];
    var itemsPerPage = 10;
    var employeesList = (0, react_1.useMemo)(function () {
        if (Array.isArray(employees))
            return employees;
        if ((employees === null || employees === void 0 ? void 0 : employees.data) && Array.isArray(employees.data))
            return employees.data;
        return [];
    }, [employees]);
    (0, react_1.useEffect)(function () {
        setCurrentPage(1);
        setLoading(false);
    }, [employeesList]);
    var totalPages = Math.ceil(employeesList.length / itemsPerPage);
    var currentData = employeesList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    var handlePrev = function () {
        if (currentPage > 1)
            setCurrentPage(function (prev) { return prev - 1; });
    };
    var handleNext = function () {
        if (currentPage < totalPages)
            setCurrentPage(function (prev) { return prev + 1; });
    };
    var handleDelete = function (emp) {
        if (!window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0645\u0646 \u062D\u0630\u0641 \u0627\u0644\u0645\u0648\u0638\u0641 ".concat(emp.full_name, "\u061F")))
            return;
        setEmployees(function (prev) {
            return Array.isArray(prev) ? prev.filter(function (e) { return e.id !== emp.id; }) : prev;
        });
    };
    var handleShowWizard = function (emp) { return __awaiter(_this, void 0, void 0, function () {
        var token, res, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setShowWizard(true);
                    setSelectedEmployee(null);
                    setModalLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    token = localStorage.getItem("token");
                    return [4 /*yield*/, fetch("https://darksalmon-anteater-608881.hostingersite.com/api/employees/".concat(emp.id), {
                            headers: { Authorization: "Bearer ".concat(token) },
                        })];
                case 2:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 3:
                    data = _a.sent();
                    setSelectedEmployee((data === null || data === void 0 ? void 0 : data.data) || null);
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert("حدث خطأ أثناء جلب بيانات الموظف");
                    setShowWizard(false);
                    return [3 /*break*/, 6];
                case 5:
                    setModalLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card mt-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u062A\u0635\u0646\u064A\u0641" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0631\u0642\u0645 \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644" }), (0, jsx_runtime_1.jsx)("th", { children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u062F\u0627\u0626\u0631\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0645\u0633\u0645\u0649 \u0627\u0644\u0648\u0638\u064A\u0641\u064A" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: loading ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: "10", children: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." }) })) : currentData.length === 0 ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: "10", children: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A" }) })) : (currentData.map(function (emp, index) {
                                    var _a, _b;
                                    return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (currentPage - 1) * itemsPerPage + index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: emp.full_name }), (0, jsx_runtime_1.jsx)("td", { children: emp.employment_type_name }), (0, jsx_runtime_1.jsx)("td", { children: emp.national_id }), (0, jsx_runtime_1.jsx)("td", { children: emp.employee_number }), (0, jsx_runtime_1.jsx)("td", { children: emp.primary_phone }), (0, jsx_runtime_1.jsx)("td", { children: (_a = emp.birth_date) === null || _a === void 0 ? void 0 : _a.split("T")[0] }), (0, jsx_runtime_1.jsx)("td", { children: emp.department_name }), (0, jsx_runtime_1.jsx)("td", { children: (_b = emp.work_detail) === null || _b === void 0 ? void 0 : _b.job_title }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-1", onClick: function () { return handleDelete(emp); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary me-1 mx-1", onClick: function () {
                                                            setSelectedEmployee(emp);
                                                            setShowEditForm(true);
                                                        }, children: "\u270F" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-warning", onClick: function () { return handleShowWizard(emp); }, children: "\uD83D\uDC41" })] })] }, emp.id));
                                })) })] }), !loading && totalPages > 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-center mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handlePrev, disabled: currentPage === 1, children: "\u0627\u0644\u0633\u0627\u0628\u0642" }), Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn me-1 ".concat(page === currentPage ? "btn-dark" : "btn-outline-dark"), onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark", onClick: handleNext, disabled: currentPage === totalPages, children: "\u0627\u0644\u062A\u0627\u0644\u064A" })] }))] }), showWizard && ((0, jsx_runtime_1.jsx)("div", { className: "modal-backdrop d-flex justify-content-center align-items-center", style: { backgroundColor: "white" }, onClick: function () { return setShowWizard(false); }, children: (0, jsx_runtime_1.jsx)("div", { className: "modal-dialog modal-xl", onClick: function (e) { return e.stopPropagation(); }, children: (0, jsx_runtime_1.jsxs)("div", { className: "modal-content p-3", children: [modalLoading ? ((0, jsx_runtime_1.jsx)("p", { children: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." })) : selectedEmployee ? ((0, jsx_runtime_1.jsx)(EditEmpWizard_1.default, { employee: selectedEmployee })) : ((0, jsx_runtime_1.jsx)("p", { children: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A" })), (0, jsx_runtime_1.jsx)("div", { className: "text-end mt-3", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary", onClick: function () { return setShowWizard(false); }, children: "\u0625\u063A\u0644\u0627\u0642" }) })] }) }) })), showEditForm && selectedEmployee && ((0, jsx_runtime_1.jsx)("div", { className: "modal-backdrop d-flex justify-content-center align-items-center", style: { background: "white" }, onClick: function () { return setShowEditForm(false); }, children: (0, jsx_runtime_1.jsx)("div", { className: "modal-dialog modal-xl", onClick: function (e) { return e.stopPropagation(); }, children: (0, jsx_runtime_1.jsxs)("div", { className: "modal-content p-3", children: [(0, jsx_runtime_1.jsx)(EditEmployeesForm_1.default, { employee: selectedEmployee, onSave: function (updatedEmp) {
                                    setEmployees(function (prev) {
                                        return Array.isArray(prev)
                                            ? prev.map(function (emp) {
                                                return emp.id === updatedEmp.id ? updatedEmp : emp;
                                            })
                                            : prev;
                                    });
                                    setShowEditForm(false);
                                } }), (0, jsx_runtime_1.jsx)("div", { className: "text-end mt-3", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary", onClick: function () { return setShowEditForm(false); }, children: "\u0625\u063A\u0644\u0627\u0642" }) })] }) }) }))] }));
}
exports.default = EmployeesTable;
