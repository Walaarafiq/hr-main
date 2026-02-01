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
    { title: "بيانات الموظف الأساسية", contentKey: "basic" },
    { title: "البيانات التنظيمية", contentKey: "org" },
    { title: "البيانات الوظيفية", contentKey: "job" },
    { title: "البيانات المهنية", contentKey: "prof" },
    { title: "البيانات المالية", contentKey: "finance" },
    { title: "مراجعة وإنهاء", contentKey: "review" },
];
var fields = {
    basic: [
        { label: "الإسم الأول", type: "text", key: "first_name" },
        { label: "إسم الأب", type: "text", key: "second_name" },
        { label: "إسم الجد", type: "text", key: "third_name" },
        { label: "إسم العائلة", type: "text", key: "family_name" },
        { label: "الرقم الوظيفي", type: "number", key: "employee_number" },
        { label: "تاريخ الميلاد", type: "date", key: "birth_date" },
        { label: "الجنس", type: "select", options: ["ذكر", "أنثى"], key: "gender" },
        { label: "الحالة الإجتماعية", type: "select", options: ["متزوج", "منفصل"], key: "marital_status" },
        { label: "رقم الجوال", type: "number", key: "primary_phone" },
        { label: "رقم الجوال البديل", type: "number", key: "secondary_phone" },
        { label: "رقم الهوية", type: "number", key: "national_id" },
        { label: "تاريخ التعيين", type: "date", key: "date_of_appointment" },
        { label: "المحافظة", type: "select", options: ["غزة", "خانيونس", "رفح"], key: "governorate_id" },
        { label: "المدينة", type: "select", options: ["غزة", "الوسطى", "خان يونس"], key: "city_id" },
        { label: "عنوان السكن بالتفصيل", type: "text", key: "address" },
    ],
    org: [
        { label: "الوزارة", type: "select", options: ["وزارة الداخلية", "وزارة التعليم"], key: "ministry" },
        { label: "الإدارة العامة", type: "select", options: ["إدارة الموارد البشرية", "إدارة المالية"], key: "directorate" },
        { label: "الوحدة", type: "select", options: ["الوحدة أ", "الوحدة ب"], key: "unit" },
        { label: "المعبر", type: "select", options: ["معبر رفح", "معبر كرم أبو سالم"], key: "transporter" },
        { label: "الدائرة", type: "select", options: ["دائرة 1", "دائرة 2"], key: "circle" },
        { label: "القسم", type: "select", options: ["القسم أ", "القسم ب"], key: "department" },
        { label: "الشعبة", type: "select", options: ["الشعبة أ", "الشعبة ب"], key: "division" },
        { label: "مكان العمل", type: "select", options: ["مكتب غزة", "مكتب خان يونس"], key: "workplace" },
    ],
    job: [
        { label: "المسمى الوظيفي", type: "select", options: ["رسمي", "عقد"], key: "job_title" },
        { label: "الحالة الوظيفية", type: "select", options: ["نشط", "مستقيل"], key: "job_status" },
        { label: "البرنامج", type: "select", options: ["برنامج أ", "برنامج ب"], key: "program" },
        { label: "سلم الرواتب", type: "select", options: ["الدرجة 1", "الدرجة 2"], key: "salary_scale" },
    ],
    prof: [
        { label: "التصنيف", type: "select", options: ["رسمي", "عقد"], key: "classification" },
        { label: "الفئة", type: "select", options: ["أ", "ب"], key: "category" },
        { label: "الدرجة الوظيفية", type: "select", options: ["1", "2"], key: "job_grade" },
        { label: "الأقدمية", type: "select", options: ["5 سنوات", "10 سنوات"], key: "seniority" },
        { label: "المؤهل العلمي", type: "select", options: ["بكالوريوس", "ماجستير"], key: "qualification" },
        { label: "خدمة فعلية", type: "select", options: ["2 سنوات", "5 سنوات"], key: "actual_service" },
        { label: "ترقية", type: "select", options: ["أولية", "ثانوية"], key: "promotion" },
        { label: "لأغراض الراتب", type: "select", options: ["أساسي", "مكمل"], key: "salary_purpose" },
        { label: "التجزئة", type: "select", options: ["جزئي", "كامل"], key: "segment" },
    ],
    finance: [
        { label: "إسم البنك", type: "select", options: ["بنك فلسطين", "بنك العربي"], key: "bank_name" },
        { label: "رقم الحساب", type: "number", key: "account_number" },
        { label: "الأيبان", type: "text", key: "iban" },
    ],
};
function AddEmployeesforms() {
    var _this = this;
    var _a = (0, react_1.useState)(0), activeStep = _a[0], setActiveStep = _a[1];
    var _b = (0, react_1.useState)({}), formData = _b[0], setFormData = _b[1];
    var _c = (0, react_1.useState)(""), message = _c[0], setMessage = _c[1];
    var handleChange = function (key, value) {
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[key] = value, _a)));
        });
    };
    var handleSubmit = function () { return __awaiter(_this, void 0, void 0, function () {
        var payload_1, token, res, text, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    payload_1 = __assign({}, formData);
                    Object.keys(payload_1).forEach(function (key) {
                        if (payload_1[key] instanceof Date)
                            payload_1[key] = payload_1[key].toISOString().split("T")[0];
                    });
                    token = localStorage.getItem("token");
                    return [4 /*yield*/, fetch("https://darksalmon-anteater-608881.hostingersite.com/api/employees", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: token ? "Bearer ".concat(token) : "",
                            },
                            body: JSON.stringify(payload_1),
                        })];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.text()];
                case 2:
                    text = _a.sent();
                    console.log("Response status:", res.status);
                    console.log("Response text:", text);
                    if (res.ok) {
                        setMessage("تم إضافة الموظف بنجاح!");
                        setFormData({});
                        setActiveStep(0);
                    }
                    else {
                        setMessage("حدث خطأ: " + text);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error(err_1);
                    setMessage("حدث خطأ أثناء الإرسال");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var renderFields = function (stepKey) {
        var _a;
        return ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue1", style: { textAlign: "right" }, children: (_a = fields[stepKey]) === null || _a === void 0 ? void 0 : _a.map(function (field, i) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)("div", { className: "h-100 cardEmp1", children: [(0, jsx_runtime_1.jsx)("div", { className: "cardHeader1", children: field.label }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex align-items-center", style: { minHeight: "50px" }, children: field.type === "select" ? ((0, jsx_runtime_1.jsxs)("select", { className: "inputEmpInfo", value: formData[field.key] || "", onChange: function (e) { return handleChange(field.key, e.target.value); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631" }), field.options.map(function (opt, idx) { return (0, jsx_runtime_1.jsx)("option", { value: opt, children: opt }, idx); })] })) : field.type === "date" ? ((0, jsx_runtime_1.jsx)(react_datepicker_1.default, { selected: formData[field.key] || null, onChange: function (date) { return handleChange(field.key, date); }, dateFormat: "yyyy/MM/dd", className: "inputEmpInfo", placeholderText: "yyyy / mm / dd", wrapperClassName: "w-100", popperPlacement: "bottom-end", calendarStartDay: 6 })) : ((0, jsx_runtime_1.jsx)("input", { type: field.type, className: "inputEmpInfo", value: formData[field.key] || "", onChange: function (e) { return handleChange(field.key, e.target.value); } })) })] }) }, i)); }) }));
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container my-5", style: { height: "650px", width: "100%" }, children: [(0, jsx_runtime_1.jsx)("h4", { className: "employeeName", style: { marginBottom: "20px" }, children: "\u062A\u0633\u062C\u064A\u0644 \u0645\u0648\u0638\u0641 \u062C\u062F\u064A\u062F" }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex flex-wrap overflow-auto mb-4", children: steps.map(function (step, i) { return ((0, jsx_runtime_1.jsx)("div", { onClick: function () { return setActiveStep(i); }, className: "px-3 py-1 me-3 mb-2 border-bottom ".concat(activeStep === i ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"), style: { cursor: "pointer", minWidth: "100px", textAlign: "center" }, children: step.title }, i)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4 border rounded shadow-sm", children: steps[activeStep].contentKey === "review" ? ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("p", { children: "\u064A\u0631\u062C\u0649 \u0645\u0631\u0627\u062C\u0639\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0642\u0628\u0644 \u0627\u0644\u0625\u0631\u0633\u0627\u0644." }), (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(formData, null, 2) })] })) : (renderFields(steps[activeStep].contentKey)) }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between mt-4", children: [(0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveStep(function (prev) { return Math.max(prev - 1, 0); }); }, disabled: activeStep === 0, className: "btn btn-outline-secondary", children: "\u0627\u0644\u0639\u0648\u062F\u0629" }), activeStep === steps.length - 1 ? ((0, jsx_runtime_1.jsx)("button", { className: "btn btn-success", onClick: handleSubmit, children: "\u062D\u0641\u0638" })) : ((0, jsx_runtime_1.jsx)("button", { onClick: function () { return setActiveStep(function (prev) { return Math.min(prev + 1, steps.length - 1); }); }, className: "btn btn-primary", children: "\u0627\u0644\u062A\u0627\u0644\u064A" }))] }), message && (0, jsx_runtime_1.jsx)("p", { style: { marginTop: "10px" }, children: message })] }));
}
exports.default = AddEmployeesforms;
