"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Card_1 = require("react-bootstrap/Card");
require("bootstrap/dist/css/bootstrap.min.css");
function EditEmpWizard(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var employee = _a.employee;
    var _s = (0, react_1.useState)(0), activeStep = _s[0], setActiveStep = _s[1];
    if (!employee)
        return (0, jsx_runtime_1.jsx)("p", { children: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u0639\u0631\u0636" });
    var steps = [
        {
            title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard", children: (0, jsx_runtime_1.jsx)("p", { children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629" }) }),
            content: ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue", style: { textAlign: "right" }, children: [
                    { label: "الإسم الكامل", value: employee.full_name || "-" },
                    { label: "رقم الهوية", value: employee.national_id || "-" },
                    { label: "الرقم الوظيفي", value: employee.employee_number || "-" },
                    { label: "رقم الجوال الأساسي", value: employee.primary_phone || "-" },
                    { label: "رقم الجوال البديل", value: employee.secondary_phone || "-" },
                    { label: "تاريخ الميلاد", value: ((_b = employee.birth_date) === null || _b === void 0 ? void 0 : _b.split("T")[0]) || "-" },
                    { label: "الجنس", value: employee.gender || "-" },
                    { label: "الحالة الاجتماعية", value: employee.marital_status || "-" },
                    { label: "المحافظة", value: ((_c = employee.governorate) === null || _c === void 0 ? void 0 : _c.name) || "-" },
                    { label: "المدينة", value: ((_d = employee.city) === null || _d === void 0 ? void 0 : _d.name) || "-" },
                    { label: "عنوان السكن", value: employee.address || "-" },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: item.label }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: "right", color: "grey" }, children: item.value })] }) }, index)); }) })),
        },
        {
            title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard", children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u062A\u0646\u0638\u064A\u0645\u064A\u0629" }),
            content: ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue", style: { textAlign: "right" }, children: [
                    { label: "الوزارة", value: employee.department_name || "-" },
                    { label: "الإدارة العامة", value: ((_e = employee.work_detail) === null || _e === void 0 ? void 0 : _e.division) || "-" },
                    { label: "الدائرة", value: employee.department_name || "-" },
                    { label: "القسم", value: employee.department_name || "-" },
                    { label: "الشعبة", value: ((_f = employee.work_detail) === null || _f === void 0 ? void 0 : _f.section) || "-" },
                    { label: "الوحدة", value: ((_g = employee.work_detail) === null || _g === void 0 ? void 0 : _g.unit) || "-" },
                    { label: "المكتب الفرعي", value: ((_h = employee.work_detail) === null || _h === void 0 ? void 0 : _h.sub_office) || "-" },
                    { label: "المعبر", value: ((_j = employee.work_detail) === null || _j === void 0 ? void 0 : _j.crossing) || "-" },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: item.label }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: "right", color: "grey" }, children: item.value })] }) }, index)); }) })),
        },
        {
            title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard", children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0648\u0638\u064A\u0641\u064A\u0629" }),
            content: ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue", style: { textAlign: "right" }, children: [
                    { label: "المسمى الوظيفي", value: ((_k = employee.work_detail) === null || _k === void 0 ? void 0 : _k.job_title) || "-" },
                    { label: "الحالة الوظيفية", value: ((_l = employee.work_detail) === null || _l === void 0 ? void 0 : _l.job_status) || "-" },
                    { label: "نوع التوظيف", value: employee.employment_type_name || "-" },
                    { label: "البرنامج", value: ((_m = employee.work_detail) === null || _m === void 0 ? void 0 : _m.program) || "-" },
                    { label: "العقد", value: ((_o = employee.contract) === null || _o === void 0 ? void 0 : _o.name) || "-" },
                    { label: "تاريخ التعيين", value: ((_p = employee.date_of_appointment) === null || _p === void 0 ? void 0 : _p.split("T")[0]) || "-" },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-3", children: (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: item.label }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: "right", color: "grey" }, children: item.value })] }) }, index)); }) })),
        },
        {
            title: (0, jsx_runtime_1.jsx)("div", { className: "headerOfCard", children: "\u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0627\u0644\u064A\u0629" }),
            content: ((0, jsx_runtime_1.jsx)("div", { className: "row g-3 cardValue", style: { textAlign: "right" }, children: [
                    { label: "البنك", value: ((_q = employee.bank) === null || _q === void 0 ? void 0 : _q.name) || "-" },
                    { label: "رقم الحساب البنكي", value: employee.bank_account_number || "-" },
                    { label: "الأيبان", value: employee.bank_iban || "-" },
                ].map(function (item, index) { return ((0, jsx_runtime_1.jsx)("div", { className: "col-12 col-sm-6 col-md-4", children: (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: item.label }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: "right", color: "grey" }, children: item.value })] }) }, index)); }) })),
        },
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container my-3", style: { height: "600px", paddingTop: "50px" }, children: [(0, jsx_runtime_1.jsx)("h4", { className: "employeeName", children: employee.full_name }), (0, jsx_runtime_1.jsx)("p", { className: "employeeRole", style: { marginTop: "-40px" }, children: ((_r = employee.work_detail) === null || _r === void 0 ? void 0 : _r.job_title) || "-" }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex flex-wrap justify-content-center mb-4 overflow-auto", children: steps.map(function (step, index) { return ((0, jsx_runtime_1.jsx)("div", { onClick: function () { return setActiveStep(index); }, className: "px-4 py-2 me-3 mb-2 border-bottom ".concat(activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"), style: {
                        cursor: "pointer",
                        minWidth: "150px",
                        textAlign: "center",
                        borderRadius: "5px",
                    }, children: step.title }, index)); }) }), (0, jsx_runtime_1.jsx)("div", { className: "p-4 border rounded shadow-sm", children: steps[activeStep].content })] }));
}
exports.default = EditEmpWizard;
