"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// AddGovermentModal.jsx
var react_1 = require("react");
function AddGovermentModal(_a) {
    var onClose = _a.onClose, onSave = _a.onSave;
    var _b = (0, react_1.useState)(""), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(""), secondValue = _c[0], setSecondValue = _c[1];
    var handleSave = function () {
        if (!name.trim())
            return;
        onSave({ name: name, secondValue: secondValue });
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "modal fade show d-block", style: { background: "rgba(0,0,0,0.5)" }, children: (0, jsx_runtime_1.jsx)("div", { className: "modal-dialog modal-dialog-centered", children: (0, jsx_runtime_1.jsxs)("div", { className: "modal-content", children: [(0, jsx_runtime_1.jsxs)("div", { className: "modal-header", children: [(0, jsx_runtime_1.jsx)("h5", { className: "modal-title", children: "\u0625\u0636\u0627\u0641\u0629 \u0642\u064A\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" }), (0, jsx_runtime_1.jsx)("button", { className: "btn-close mx-2", onClick: onClose })] }), (0, jsx_runtime_1.jsxs)("div", { className: "modal-body", children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0633\u0645 \u0627\u0644\u0642\u064A\u0645\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: name, onChange: function (e) { return setName(e.target.value); } }), (0, jsx_runtime_1.jsx)("label", { className: "form-label mt-2", children: "\u0639\u062F\u062F \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: secondValue, onChange: function (e) { return setSecondValue(e.target.value); } })] }), (0, jsx_runtime_1.jsxs)("div", { className: "modal-footer", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary", onClick: onClose, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: handleSave, children: "\u062D\u0641\u0638" })] })] }) }) }));
}
exports.default = AddGovermentModal;
