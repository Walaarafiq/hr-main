"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddGovermentModal_1 = require("./AddGovermentModal");
function GovermentsHeader(_a) {
    var _b = _a.title, title = _b === void 0 ? "عنوان افتراضي" : _b, _c = _a.desc, desc = _c === void 0 ? "وصف" : _c, onAddItem = _a.onAddItem;
    var _d = (0, react_1.useState)(false), showAddModal = _d[0], setShowAddModal = _d[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "employees-header d-flex justify-content-between align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { style: { textAlign: "right", fontSize: "18px", fontWeight: "bold" }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: desc })] }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", style: { fontSize: "13px", padding: "6px 10px" }, onClick: function () { return setShowAddModal(true); }, children: "\u0625\u0636\u0627\u0641\u0629 \u0642\u064A\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" })] }), showAddModal && ((0, jsx_runtime_1.jsx)(AddGovermentModal_1.default, { onClose: function () { return setShowAddModal(false); }, onSave: function (item) {
                    onAddItem(item);
                    setShowAddModal(false);
                } }))] }));
}
exports.default = GovermentsHeader;
