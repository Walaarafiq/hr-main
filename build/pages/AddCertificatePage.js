"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddCertificate_1 = require("../components/AddCertificate");
var AcademicCertificatesHeader_1 = require("../components/AcademicCertificatesHeader");
var AcademicCertifcatesFilters_1 = require("../components/AcademicCertifcatesFilters");
function AddCertificatePage() {
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(AcademicCertificatesHeader_1.default, { title: "\u0625\u0636\u0627\u0641\u0629 \u0634\u0647\u0627\u062F\u0629", desc: "\u0631\u0641\u0639 \u0634\u0647\u0627\u062F\u0629 \u0623\u0643\u0627\u062F\u064A\u0645\u064A\u0629 \u062C\u062F\u064A\u062F \u0644\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)(AcademicCertifcatesFilters_1.default, {}), (0, jsx_runtime_1.jsx)(AddCertificate_1.default, {})] }));
}
exports.default = AddCertificatePage;
