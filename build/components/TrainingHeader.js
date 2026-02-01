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
var react_router_dom_1 = require("react-router-dom");
var Card_1 = require("react-bootstrap/Card");
function TrainingHeader(_a) {
    var title = _a.title, desc = _a.desc, onAddProject = _a.onAddProject;
    var _b = (0, react_1.useState)(false), showAddModal = _b[0], setShowAddModal = _b[1];
    var _c = (0, react_1.useState)({
        type: "",
        category: "",
        courseName: "",
        targetAudience: "",
        funder: "",
        duration: "",
        startDate: "",
        endDate: "",
        mode: "",
        location: "",
        content: "",
        otherDetails: "",
    }), newCourse = _c[0], setNewCourse = _c[1];
    var handleSave = function () {
        if (!newCourse.courseName) {
            alert("يرجى إدخال اسم الدورة/الورشة *");
            return;
        }
        onAddProject(newCourse);
        setShowAddModal(false);
        setNewCourse({
            type: "",
            category: "",
            courseName: "",
            targetAudience: "",
            funder: "",
            duration: "",
            startDate: "",
            endDate: "",
            mode: "",
            location: "",
            content: "",
            otherDetails: "",
        });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "employees-header d-flex justify-content-between align-items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h4", { style: { fontSize: "18px", fontWeight: "bold" }, children: title }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: desc })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex gap-2", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "/temporary-contrast-employees", className: "btn btn-outline-warning", style: { fontSize: "13px" }, children: "\u0627\u0644\u0641\u0644\u0627\u062A\u0631 \u0627\u0644\u0645\u062A\u0642\u062F\u0645\u0629" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", style: { fontSize: "13px" }, onClick: function () { return setShowAddModal(true); }, children: "\u0625\u0636\u0627\u0641\u0629 \u062F\u0648\u0631\u0629 \u062C\u062F\u064A\u062F\u0629" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex", children: [(0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp col-2 mx-2 mt-2", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u062F\u0648\u0631\u0627\u062A" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "4" })] }), (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp col-2 mx-1 mt-2", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0625\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0634\u0631\u0641\u064A\u0646" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "0" })] }), (0, jsx_runtime_1.jsxs)(Card_1.default, { className: "shadow-sm h-100 cardEmp col-2 mx-2 mt-2", children: [(0, jsx_runtime_1.jsx)(Card_1.default.Header, { className: "cardHeader", children: "\u0623\u062C\u0645\u0627\u0644\u064A \u0627\u0644\u0645\u0634\u0627\u0631\u0643\u064A\u0646" }), (0, jsx_runtime_1.jsx)(Card_1.default.Body, { className: "d-flex align-items-center", style: { minHeight: "60px", textAlign: 'right', color: 'grey' }, children: "3" })] })] }), showAddModal && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
                    backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
                    justifyContent: "center", alignItems: "center", zIndex: 1000
                }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                        backgroundColor: "#fff", padding: "20px", borderRadius: "8px",
                        width: "95%", maxWidth: "1000px", maxHeight: "90%", overflowY: "auto"
                    }, children: [(0, jsx_runtime_1.jsx)("h5", { className: "mb-3 bold", style: { fontWeight: "bold", paddingTop: '20px' }, children: "\u0625\u0636\u0627\u0641\u0629 \u062F\u0648\u0631\u0629/\u0648\u0631\u0634\u0629 \u062C\u062F\u064A\u062F\u0629" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsxs)("div", { style: {
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: "15px"
                            }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0646\u0648\u0639 \u0627\u0644\u062F\u0648\u0631\u0629/\u0627\u0644\u0648\u0631\u0634\u0629" }), (0, jsx_runtime_1.jsxs)("select", { className: "form-select", value: newCourse.type, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { type: e.target.value })); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0646\u0648\u0639" }), (0, jsx_runtime_1.jsx)("option", { value: "\u062F\u0648\u0631\u0629", children: "\u062F\u0648\u0631\u0629" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0648\u0631\u0634\u0629", children: "\u0648\u0631\u0634\u0629" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u062A\u0635\u0646\u064A\u0641 \u0627\u0644\u062F\u0648\u0631\u0629/\u0627\u0644\u0648\u0631\u0634\u0629" }), (0, jsx_runtime_1.jsxs)("select", { className: "form-select", value: newCourse.category, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { category: e.target.value })); }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u062A\u0635\u0646\u064A\u0641" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0625\u062F\u0627\u0631\u064A", children: "\u0625\u062F\u0627\u0631\u064A" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0641\u0646\u064A", children: "\u0641\u0646\u064A" }), (0, jsx_runtime_1.jsx)("option", { value: "\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A", children: "\u062A\u0637\u0648\u064A\u0631 \u0645\u0647\u0627\u0631\u0627\u062A" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0633\u0645 \u0627\u0644\u062F\u0648\u0631\u0629/\u0627\u0644\u0648\u0631\u0634\u0629 *" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.courseName, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { courseName: e.target.value })); }, required: true })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u0641\u0626\u0629 \u0627\u0644\u0645\u0633\u062A\u0647\u062F\u0641\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.targetAudience, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { targetAudience: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0627\u0644\u062C\u0647\u0629 \u0627\u0644\u0645\u0645\u0648\u0644\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.funder, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { funder: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0645\u062F\u0629 \u0627\u0644\u062F\u0648\u0631\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.duration, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { duration: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0628\u062F\u0627\u064A\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "date", className: "form-control", value: newCourse.startDate, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { startDate: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0646\u0647\u0627\u064A\u0629" }), (0, jsx_runtime_1.jsx)("input", { type: "date", className: "form-control", value: newCourse.endDate, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { endDate: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0622\u0644\u064A\u0629 \u0627\u0644\u0627\u0646\u0639\u0642\u0627\u062F" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.mode, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { mode: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0645\u0643\u0627\u0646 \u0627\u0644\u0627\u0646\u0639\u0642\u0627\u062F" }), (0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", value: newCourse.location, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { location: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { style: { gridColumn: "span 3" }, children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u0645\u062D\u062A\u0648\u0649 \u0627\u0644\u062F\u0648\u0631\u0629" }), (0, jsx_runtime_1.jsx)("textarea", { className: "form-control", rows: "3", value: newCourse.content, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { content: e.target.value })); } })] }), (0, jsx_runtime_1.jsxs)("div", { style: { gridColumn: "span 3" }, children: [(0, jsx_runtime_1.jsx)("label", { className: "form-label", children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0623\u062E\u0631\u0649" }), (0, jsx_runtime_1.jsx)("textarea", { className: "form-control", rows: "2", value: newCourse.otherDetails, onChange: function (e) { return setNewCourse(__assign(__assign({}, newCourse), { otherDetails: e.target.value })); } })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex justify-content-end mt-3", children: [(0, jsx_runtime_1.jsx)("button", { className: "btn btn-secondary me-2 mx-1", onClick: function () { return setShowAddModal(false); }, children: "\u0625\u063A\u0644\u0627\u0642" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-dark", onClick: handleSave, children: "\u062D\u0641\u0638" })] })] }) }))] }));
}
exports.default = TrainingHeader;
