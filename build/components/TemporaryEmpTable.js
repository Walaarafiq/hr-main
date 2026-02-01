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
var react_1 = require("react");
var EditEmpWizard_1 = require("../components/EditEmpWizard");
var EditEmployeesForm_1 = require("../components/EditEmployeesForm");
function TemporaryEmpTable() {
    var _this = this;
    var _a = (0, react_1.useState)([]), employees = _a[0], setEmployees = _a[1];
    var _b = (0, react_1.useState)(true), loading = _b[0], setLoading = _b[1];
    var _c = (0, react_1.useState)(false), showWizard = _c[0], setShowWizard = _c[1];
    var _d = (0, react_1.useState)(false), showEditForm = _d[0], setShowEditForm = _d[1];
    var _e = (0, react_1.useState)(null), selectedEmployee = _e[0], setSelectedEmployee = _e[1];
    var _f = (0, react_1.useState)(1), currentPage = _f[0], setCurrentPage = _f[1];
    var itemsPerPage = 10;
    (0, react_1.useEffect)(function () {
        var fetchEmployees = function () { return __awaiter(_this, void 0, void 0, function () {
            var token, res, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, 4, 5]);
                        token = localStorage.getItem("token");
                        return [4 /*yield*/, fetch("https://darksalmon-anteater-608881.hostingersite.com/api/temp-contract-employees", {
                                headers: { Authorization: "Bearer ".concat(token) },
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        data = _a.sent();
                        setEmployees(data.data || []);
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        alert("حدث خطأ أثناء جلب البيانات");
                        return [3 /*break*/, 5];
                    case 4:
                        setLoading(false);
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        fetchEmployees();
    }, []);
    var totalPages = Math.ceil(employees.length / itemsPerPage);
    var currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    var handlePrev = function () { return currentPage > 1 && setCurrentPage(currentPage - 1); };
    var handleNext = function () { return currentPage < totalPages && setCurrentPage(currentPage + 1); };
    var handleDelete = function (empId) {
        var emp = employees.find(function (e) { return e.row_number === empId; });
        if (window.confirm("\u0647\u0644 \u0623\u0646\u062A \u0645\u062A\u0623\u0643\u062F \u0623\u0646\u0643 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 \"".concat(emp.full_name, "\"\u061F"))) {
            setEmployees(function (prev) { return prev.filter(function (e) { return e.row_number !== empId; }); });
        }
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { className: "card mt-4", style: { overflow: "visible" }, children: (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsxs)("table", { className: "table table-bordered text-center align-middle", children: [(0, jsx_runtime_1.jsx)("thead", { className: "table-light", style: { fontSize: "14px" }, children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "\u0645" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644" }), (0, jsx_runtime_1.jsx)("th", { children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0645\u064A\u0644\u0627\u062F" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0637\u0628\u064A\u0639\u0629 \u0627\u0644\u0639\u0645\u0644" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0639\u0642\u062F" }), (0, jsx_runtime_1.jsx)("th", { children: "\u0627\u0644\u0625\u062C\u0631\u0627\u0621\u0627\u062A" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { style: { fontSize: "13px" }, children: loading ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: "9", children: "\u062C\u0627\u0631\u064D \u0627\u0644\u062A\u062D\u0645\u064A\u0644..." }) })) : currentData.length === 0 ? ((0, jsx_runtime_1.jsx)("tr", { children: (0, jsx_runtime_1.jsx)("td", { colSpan: "9", children: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A" }) })) : (currentData.map(function (emp, index) { return ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: (currentPage - 1) * itemsPerPage + index + 1 }), (0, jsx_runtime_1.jsx)("td", { children: emp.full_name }), (0, jsx_runtime_1.jsx)("td", { children: emp.national_id }), (0, jsx_runtime_1.jsx)("td", { children: emp.primary_phone }), (0, jsx_runtime_1.jsx)("td", { children: emp.birth_date }), (0, jsx_runtime_1.jsx)("td", { children: emp.project_name }), (0, jsx_runtime_1.jsx)("td", { children: emp.position_type }), (0, jsx_runtime_1.jsx)("td", { children: emp.start_contract_date }), (0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-danger me-2", onClick: function () { return handleDelete(emp.row_number); }, children: "\uD83D\uDDD1" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-primary me-2", onClick: function () { setSelectedEmployee(emp); setShowEditForm(true); }, children: "\u270F" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-sm btn-outline-warning me-2", onClick: function () { setSelectedEmployee(emp); setShowWizard(true); }, children: "\uD83D\uDC41" })] })] }, emp.row_number)); })) })] }), !loading && totalPages > 1 && ((0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-center align-items-center mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handlePrev, disabled: currentPage === 1, children: "< \u0627\u0644\u0633\u0627\u0628\u0642" }), Array.from({ length: totalPages }, function (_, i) { return i + 1; }).map(function (page) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn me-1 ".concat(page === currentPage ? "btn-dark" : "btn-outline-dark"), onClick: function () { return setCurrentPage(page); }, children: page }, page)); }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-dark me-1", onClick: handleNext, disabled: currentPage === totalPages, children: "\u0627\u0644\u062A\u0627\u0644\u064A >" })] }))] }) }), showWizard && ((0, jsx_runtime_1.jsx)("div", { className: "modal-backdrop", onClick: function () { return setShowWizard(false); }, style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                }, children: (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { return e.stopPropagation(); }, style: {
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        maxWidth: "90%",
                        maxHeight: "100%",
                        overflowY: "auto",
                    }, children: [(0, jsx_runtime_1.jsx)(EditEmpWizard_1.default, { employee: selectedEmployee }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-danger mt-2", onClick: function () { return setShowWizard(false); }, children: "\u0625\u063A\u0644\u0627\u0642" })] }) })), showEditForm && selectedEmployee && ((0, jsx_runtime_1.jsx)("div", { className: "modal-backdrop", onClick: function () { return setShowEditForm(false); }, style: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                }, children: (0, jsx_runtime_1.jsxs)("div", { onClick: function (e) { return e.stopPropagation(); }, style: {
                        backgroundColor: "#fff",
                        padding: "20px",
                        borderRadius: "8px",
                        maxWidth: "90%",
                        maxHeight: "100%",
                        overflowY: "auto",
                    }, children: [(0, jsx_runtime_1.jsx)(EditEmployeesForm_1.default, { employee: selectedEmployee }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-danger mt-2", onClick: function () { return setShowEditForm(false); }, children: "\u0625\u063A\u0644\u0627\u0642" })] }) }))] }));
}
exports.default = TemporaryEmpTable;
