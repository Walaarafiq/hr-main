"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react'
// function AddChildren() {
//   return (
//     <div>AddChildren</div>
//   )
// }
// export default AddChildren;
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var AddHeart = function (_a) {
    var onSubmit = _a.onSubmit, onCancel = _a.onCancel;
    var _b = (0, react_1.useState)(""), fullName = _b[0], setFullName = _b[1];
    var _c = (0, react_1.useState)(""), nationalId = _c[0], setNationalId = _c[1];
    var _d = (0, react_1.useState)(""), marriageDate = _d[0], setMarriageDate = _d[1];
    var _e = (0, react_1.useState)(""), marriageStatus = _e[0], setMarriageStatus = _e[1];
    var _f = (0, react_1.useState)(""), phone = _f[0], setPhone = _f[1];
    var _g = (0, react_1.useState)(false), works = _g[0], setWorks = _g[1];
    var _h = (0, react_1.useState)(null), marriageContract = _h[0], setMarriageContract = _h[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        var spouseData = {
            fullName: fullName,
            nationalId: nationalId,
            marriageDate: marriageDate,
            marriageStatus: marriageStatus,
            phone: phone,
            works: works,
            marriageContract: marriageContract,
        };
        if (onSubmit)
            onSubmit(spouseData);
    };
    return ((0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card, { className: "p-4 shadow-sm", style: { borderRadius: "15px", background: "#fff" }, children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-4 text-center", style: { fontWeight: 600, color: "#00695c" }, children: "\u0625\u0636\u0627\u0641\u0629 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0639\u0627\u0644\u064A\u0646" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0625\u0633\u0645 \u0627\u0644\u0645\u0639\u0627\u0644 \u0631\u0628\u0627\u0639\u064A" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0623\u062F\u062E\u0644 \u0627\u0644\u0627\u0633\u0645 \u0627\u0644\u0643\u0627\u0645\u0644", value: fullName, onChange: function (e) { return setFullName(e.target.value); }, required: true, style: { borderRadius: "10px" } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0627\u0644\u062C\u0646\u0633 " }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Select, { value: marriageStatus, onChange: function (e) { return setMarriageStatus(e.target.value); }, required: true, style: { borderRadius: "10px" }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0645\u062A\u0632\u0648\u062C\u0629", children: "\u0630\u0643\u0631" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0645\u0637\u0644\u0642\u0629", children: "\u0623\u0646\u062B\u0649" })] })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0631\u0642\u0645 \u0647\u0648\u064A\u0629 \u0627\u0644\u0645\u0639\u0627\u0644" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 \u0627\u0644\u0647\u0648\u064A\u0629", value: nationalId, onChange: function (e) { return setNationalId(e.target.value); }, required: true, style: { borderRadius: "10px" } })] })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u062A\u0627\u0631\u064A\u062E \u0645\u064A\u0644\u0627\u062F \u0627\u0644\u0645\u0639\u0627\u0644" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "date", value: marriageDate, onChange: function (e) { return setMarriageDate(e.target.value); }, required: true, style: { borderRadius: "10px" } })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Col, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0635\u0644\u0629 \u0627\u0644\u0642\u0631\u0627\u0628\u0629" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0623\u0628/\u0623\u0645/\u0623\u062E", value: nationalId, onChange: function (e) { return setNationalId(e.target.value); }, required: true, style: { borderRadius: "10px" } })] })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-4", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0635\u0648\u0631\u0629 \u062D\u062C\u0629 \u0627\u0644\u0625\u0639\u0627\u0644\u0629 " }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "file", accept: ".pdf,.jpg,.png", onChange: function (e) { return setMarriageContract(e.target.files[0]); } }), marriageContract && ((0, jsx_runtime_1.jsxs)("small", { className: "text-muted mt-1 d-block", children: ["\u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0645\u062E\u062A\u0627\u0631: ", marriageContract.name] }))] }), (0, jsx_runtime_1.jsx)("div", { className: "alertYellow", children: (0, jsx_runtime_1.jsx)("p", { children: " \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0636\u0627\u0641\u0629 \u0633\u062A\u0643\u0648\u0646 \u0641\u064A \u062D\u0627\u0644\u0629 \"\u0627\u0646\u062A\u0638\u0627\u0631 \u0627\u0644\u0645\u0648\u0627\u0641\u0642\u0629\" \u062D\u062A\u0649 \u064A\u062A\u0645 \u0627\u0639\u062A\u0645\u0627\u062F\u0647\u0627 \u0645\u0646 \u0642\u0628\u0644 \u0627\u0644\u0625\u062F\u0627\u0631\u0629." }) }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-between mt-4", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { className: "sendData", variant: "success", type: "submit", style: { borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }, children: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "outline-secondary", onClick: onCancel, style: { borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }, children: "\u0625\u0644\u063A\u0627\u0621" })] })] })] }));
};
exports.default = AddHeart;
