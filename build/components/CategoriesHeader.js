"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var AddCategoryModal_1 = require("./AddCategoryModal"); // مودال إضافة قيمة جديدة
function CategoriesHeader(_a) {
    var title = _a.title, desc = _a.desc, onAddCategory = _a.onAddCategory;
    var _b = (0, react_1.useState)(false), showAddModal = _b[0], setShowAddModal = _b[1];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "employees-header d-flex justify-content-between align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { style: { textAlign: "right", fontSize: "18px", fontWeight: "bold" }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: desc })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", style: { fontSize: "13px", padding: "6px 10px" }, onClick: function () { return setShowAddModal(true); }, children: "\u0625\u0636\u0627\u0641\u0629 \u0642\u064A\u0645\u0629 \u062C\u062F\u064A\u062F\u0629" }) })] }), (0, jsx_runtime_1.jsx)("p", { className: "", style: { backgroundColor: '#Add8e6', color: 'grey', paddingRight: '10px', paddingLeft: '10px',
                    paddingTop: '10px', paddingBottom: '10px' }, children: "\u064A\u0645\u0643\u0646 \u0644\u0644\u0625\u062F\u0627\u0631\u064A \u0627\u062F\u062E\u0627\u0644 \u0642\u064A\u0645 \u0644\u0644\u0645\u0648\u0638\u0641\u064A\u0646 \u0627\u0644\u0630\u064A\u0646 \u0644\u0627 \u064A\u0645\u062A\u0644\u0643\u0648\u0646 \u0627\u0644\u062A\u0635\u0646\u064A\u0641 \u0645\u0646 \u062E\u0644\u0627\u0644 \u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641\u064A\u0646" }), showAddModal && ((0, jsx_runtime_1.jsx)(AddCategoryModal_1.default, { onClose: function () { return setShowAddModal(false); }, onSave: function (category) {
                    onAddCategory(category);
                    setShowAddModal(false);
                } }))] }));
}
exports.default = CategoriesHeader;
