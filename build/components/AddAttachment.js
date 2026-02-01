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
function AddAttachment() {
    var _a = (0, react_1.useState)({
        employee: "",
        certificate: "",
        attachment: null,
        notes: "",
    }), form = _a[0], setForm = _a[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "card p-3", children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-3", children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0631\u0641\u0642" }), (0, jsx_runtime_1.jsxs)("div", { className: "row mb-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "col-md-6", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsxs)("select", { className: "form-select", value: form.employee, onChange: function (e) {
                                    return setForm(__assign(__assign({}, form), { employee: e.target.value }));
                                }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)("option", { children: "\u0648\u0644\u0627\u0621 \u0639\u0627\u064A\u0634" }), (0, jsx_runtime_1.jsx)("option", { children: "\u0639\u0644\u064A \u0623\u0628\u0648 \u0627\u0644\u0639\u0637\u0627" }), (0, jsx_runtime_1.jsx)("option", { children: "\u062D\u0633\u0627\u0645 \u062D\u0631\u0632" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "col-md-6", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0634\u0647\u0627\u062F\u0629" }), (0, jsx_runtime_1.jsxs)("select", { className: "form-select", value: form.certificate, onChange: function (e) {
                                    return setForm(__assign(__assign({}, form), { certificate: e.target.value }));
                                }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0634\u0647\u0627\u062F\u0629" }), (0, jsx_runtime_1.jsx)("option", { children: "\u0628\u0643\u0627\u0644\u0648\u0631\u064A\u0648\u0633" }), (0, jsx_runtime_1.jsx)("option", { children: "\u0645\u0627\u062C\u0633\u062A\u064A\u0631" }), (0, jsx_runtime_1.jsx)("option", { children: "\u062F\u0643\u062A\u0648\u0631\u0627\u0647" })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0625\u0631\u0641\u0627\u0642 \u0627\u0644\u0645\u0644\u0641" }), (0, jsx_runtime_1.jsx)("input", { type: "file", className: "form-control", onChange: function (e) {
                            return setForm(__assign(__assign({}, form), { attachment: e.target.files[0] }));
                        } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0645\u0644\u0627\u062D\u0638\u0627\u062A" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", placeholder: "\u0623\u062F\u062E\u0644 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A", value: form.notes, onChange: function (e) {
                            return setForm(__assign(__assign({}, form), { notes: e.target.value }));
                        } })] }), (0, jsx_runtime_1.jsx)("div", { className: "d-flex justify-content-end gap-2", children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", children: "\u0631\u0641\u0639 \u0627\u0627\u0644\u0645\u0631\u0641\u0642" }) })] }));
}
exports.default = AddAttachment;
