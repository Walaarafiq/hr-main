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
require("bootstrap/dist/css/bootstrap.min.css");
var react_datepicker_1 = require("react-datepicker");
require("react-datepicker/dist/react-datepicker.css");
var steps = [
    {
        title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard1", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" }) }),
        content: ((0, jsx_runtime_1.jsxs)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u062A\u062D\u062F\u064A\u062F \u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0648\u0638\u0641 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0625\u062F\u0627\u0631\u064A" }), [
                    { label: "الإسم الأول", type: "text" },
                    { label: "إسم الأب", type: "text" },
                    { label: "رقم الهوية", type: "number" },
                    { label: "الرقم الوظيفي", type: "number" },
                    { label: "تاريخ التعيين", type: "date" },
                    { label: "الجنس", type: "select", options: ["رسمي", "عقد"] },
                    { label: "الحالة الإجتماعية", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "رقم الجوال", type: "number" },
                    { label: "رقم الجوال البديل", type: "number" },
                    { label: "تاريخ الميلاد", type: "date" },
                    { label: "المحافظة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "المدينة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "عنوان السكن بالتفصيل", type: "text" },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: item.type === "select" ? ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), item.options.map(function (opt, i) { return ((0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, i)); })] })) : item.type === "date" ? ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { dateFormat: "yyyy/MM/dd", placeholderText: "yyyy / mm / dd", className: "inputEmpInfo", wrapperClassName: "w-100", popperPlacement: "bottom-end", calendarStartDay: 6 })) : ((0, jsx_runtime_1.jsx)("input", { type: item.type, className: "inputEmpInfo" })) })] }) }, index)); })] })),
    },
    {
        title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard1", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A\u0629" }) }),
        content: ((0, jsx_runtime_1.jsxs)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u062A\u062D\u062F\u064A\u062F \u0645\u0648\u0642\u0639 \u0627\u0644\u0645\u0648\u0638\u0641 \u062F\u0627\u062E\u0644 \u0627\u0644\u0645\u0633\u062A\u0648\u0649 \u0627\u0644\u0625\u062F\u0627\u0631\u064A" }), [
                    { label: "الوزارة", type: "select", options: ["رسمي", "عقد"] },
                    { label: "الإدارة العامة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "الوحدة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "المعبر", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "الدائرة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "القسم", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "الشعبة", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "مكان العمل", type: "select", options: ["متزوج", "منفصل"] },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: item.type === "select" ? ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), item.options.map(function (opt, i) { return ((0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, i)); })] })) : ((0, jsx_runtime_1.jsx)("input", { type: item.type, className: "inputEmpInfo" })) })] }) }, index)); })] })),
    },
    {
        title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard1", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0638\u064A\u0641\u064A\u0629" }) }),
        content: ((0, jsx_runtime_1.jsxs)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u062A\u062D\u062F\u064A\u062F \u0637\u0628\u064A\u0639\u0629 \u0627\u0644\u0648\u0638\u064A\u0641\u0629 \u0648\u0645\u0633\u0645\u0627\u0647\u0627 \u0648\u0645\u0633\u062A\u0648\u0627\u0647\u0627 \u0627\u0644\u0625\u062F\u0627\u0631\u064A" }), [
                    { label: "المسمى الوظيفي", type: "select", options: ["رسمي", "عقد"] },
                    { label: "الحالة الوظيفية", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "البرنامج", type: "select", options: ["متزوج", "منفصل"] },
                    { label: "سلم الرواتب", type: "select", options: ["متزوج", "منفصل"] },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: item.type === "select" ? ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), item.options.map(function (opt, i) { return ((0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, i)); })] })) : ((0, jsx_runtime_1.jsx)("input", { type: item.type, className: "inputEmpInfo" })) })] }) }, index)); })] })),
    },
    {
        title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard1", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0647\u0646\u064A\u0629" }) }),
        content: ((0, jsx_runtime_1.jsx)("div", {})),
    },
    {
        title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard1", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629" }) }),
        content: ((0, jsx_runtime_1.jsxs)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: [(0, jsx_runtime_1.jsx)("p", { children: "\u0625\u062F\u062E\u0627\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0628\u0646\u0643\u064A\u0629" }), [
                    { label: "إسم البنك", type: "select", options: ["رسمي", "عقد"] },
                    { label: "رقم الحساب", type: "number" },
                    { label: "الأيبان", type: "text" },
                ].map(function (item, index) {
                    var _a;
                    return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: item.type === "select" ? ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), (_a = item.options) === null || _a === void 0 ? void 0 : _a.map(function (opt, i) { return ((0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, i)); })] })) : ((0, jsx_runtime_1.jsx)("input", { type: item.type, className: "inputEmpInfo" })) })] }) }, index));
                })] })),
    },
];
function EditEmployeesForm(_a) {
    var _this = this;
    var employee = _a.employee, onSave = _a.onSave;
    var _b = (0, react_1.useState)(0), activeStep = _b[0], setActiveStep = _b[1];
    var _c = (0, react_1.useState)(__assign({}, employee)), formData = _c[0], setFormData = _c[1]; // نحفظ البيانات هنا
    // تحديث البيانات عند تغيير أي input
    var handleChange = function (field, value) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = value, _a)));
        });
    };
    // زر الحفظ النهائي
    var handleSave = function () { return __awaiter(_this, void 0, void 0, function () {
        var token, res, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    token = localStorage.getItem("token");
                    return [4 /*yield*/, fetch("https://darksalmon-anteater-608881.hostingersite.com/api/temp-contract-employees/1", {
                            method: "PUT", // أو POST حسب الـ API
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer ".concat(token),
                            },
                            body: JSON.stringify(formData),
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    alert("تم حفظ البيانات بنجاح");
                    if (onSave)
                        onSave(data);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    alert("حدث خطأ أثناء الحفظ");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    // نتحكم في عرض الحقول لتحديث formData
    var renderField = function (item, key) {
        var _a;
        var value = formData[item.label] || "";
        if (item.type === "select") {
            return ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", value: value, onChange: function (e) { return handleChange(item.label, e.target.value); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), (_a = item.options) === null || _a === void 0 ? void 0 : _a.map(function (opt, i) { return ((0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, i)); })] }));
        }
        else if (item.type === "date") {
            return ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { dateFormat: "yyyy/MM/dd", selected: value ? new Date(value) : null, onChange: function (date) { return handleChange(item.label, date); }, placeholderText: "yyyy / mm / dd", className: "inputEmpInfo" }));
        }
        else {
            return ((0, jsx_runtime_1.jsx)("input", { type: item.type, className: "inputEmpInfo", value: value, onChange: function (e) { return handleChange(item.label, e.target.value); } }));
        }
    };
    // تحديث محتوى الخطوة ليستخدم renderField
    var renderStepContent = function (step) {
        var _a;
        return ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: (_a = step.content.props.children) === null || _a === void 0 ? void 0 : _a.map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: item.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: renderField(item, index) })] }) }, index)); }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container my-5", style: { height: "580px", marginTop: "50px", width: "100%" }, children: [(0, jsx_runtime_1.jsx)("h4", { className: "employeeName", style: { marginBottom: "20px" }, children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex flex-wrap justify-content-center mb-4 overflow-auto", children: steps.map(function (step, index) { return ((0, jsx_runtime_1.jsx)("div", { onClick: function () { return setActiveStep(index); }, className: "px-4 py-2 me-3 mb-2 border-bottom ".concat(activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"), style: { cursor: "pointer", minWidth: "120px", textAlign: "center", borderRadius: "5px" }, children: step.title }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4 border rounded shadow-sm", children: renderStepContent(steps[activeStep]) }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between mt-4", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveStep(function (prev) { return Math.max(prev - 1, 0); }); }, disabled: activeStep === 0, className: "btn btn-outline-secondary", children: "\u0627\u0644\u0639\u0648\u062F\u0629" }), activeStep === steps.length - 1 ? ((0, jsx_runtime_1.jsx)("button", { className: "btn btn-success", onClick: handleSave, children: "\u062D\u0641\u0638" })) : ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveStep(function (prev) { return Math.min(prev + 1, steps.length - 1); }); }, className: "btn btn-primary", children: "\u0627\u0644\u062A\u0627\u0644\u064A" }))] })] }));
}
exports.default = EditEmployeesForm;
