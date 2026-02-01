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
function AddCategoryModal(_a) {
    var onClose = _a.onClose, onSave = _a.onSave;
    var _b = (0, react_1.useState)({ name: "", empNum: "" }), form = _b[0], setForm = _b[1];
    var handleChange = function (e) {
        var _a;
        setForm(__assign(__assign({}, form), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
        }, children: (0, jsx_runtime_1.jsxs)("div", { style: { backgroundColor: "#fff", padding: "20px", borderRadius: "8px", width: "400px" }, children: [(0, jsx_runtime_1.jsx)("h5", { children: "\u0625\u0636\u0627\u0641\u0629 \u0642\u064A\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0633\u0645 \u0627\u0644\u0641\u0626\u0629" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", name: "name", value: form.name, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0645\u0639\u0631\u0641 \u0627\u0644\u062B\u0627\u0628\u062A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)" }), (0, jsx_runtime_1.jsx)("input", { className: "form-control", name: "empNum", value: form.empNum, onChange: handleChange })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary", onClick: onClose, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: function () { return onSave(form); }, children: "\u062D\u0641\u0638" })] })] }) }));
}
exports.default = AddCategoryModal;
