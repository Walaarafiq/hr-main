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
function AddProgramsModal(_a) {
    var onClose = _a.onClose, onSave = _a.onSave;
    var _b = (0, react_1.useState)({
        name: "",
        interval: "",
        ProStart: "",
        ProFinished: "",
        Organize: ""
    }), form = _b[0], setForm = _b[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000
        }, children: (0, jsx_runtime_1.jsx)("div", { className: "card", style: { width: "500px" }, children: (0, jsx_runtime_1.jsxs)("div", { className: "card-body", children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-3", children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u0634\u0631\u0648\u0639 \u062C\u062F\u064A\u062F" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", name: "name", value: form.name, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0645\u062F\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", name: "interval", value: form.interval, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0628\u062F\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("input", { type: "date", className: "form-control", name: "ProStart", value: form.ProStart, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0645\u0634\u0631\u0648\u0639" }), (0, jsx_runtime_1.jsx)("input", { type: "date", className: "form-control", name: "ProFinished", value: form.ProFinished, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-3", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0645\u0648\u0644\u0629" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", name: "Organize", value: form.Organize, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-outline-secondary", onClick: onClose, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: function () { return onSave(form); }, children: "\u062D\u0641\u0638" })] })] }) }) }));
}
exports.default = AddProgramsModal;
