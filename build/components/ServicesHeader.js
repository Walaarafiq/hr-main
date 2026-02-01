"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var ServicesHeader = function () {
    var _a = (0, react_1.useState)(false), showEditModal = _a[0], setShowEditModal = _a[1];
    var cardsData = [
        {
            title: "تعديل البيانات",
            number: "تحديث البيانات الشخصية والعائلية",
            icon: (0, jsx_runtime_1.jsx)("img", { src: "/images/edits.png", style: { width: "50px", height: "50px" } }),
            color: "#3b82f6",
            action: "edit"
        },
        {
            title: "تحميل قسيمة الراتب",
            number: "الحصول على قسيمة راتب شهرية",
            icon: (0, jsx_runtime_1.jsx)("img", { src: "/images/salaryicon.png", style: { width: "50px", height: "50px" } }),
            color: "#f59e0b"
        },
        {
            title: "طلب إجازة",
            number: "تقديم طلب إجازة ومتابعة الطلب",
            icon: (0, jsx_runtime_1.jsx)("img", { src: "/images/vacation.png", style: { width: "50px", height: "50px" } }),
            bgColor: "linear-gradient(to top, #014f56, #016A74, #1b8a95)",
            textColor: "#DADBDD",
            color: "#0f766e"
        },
    ];
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Row, { className: "g-4", style: { marginTop: "15px" }, children: [(0, jsx_runtime_1.jsx)("div", { className: "section-divider" }), (0, jsx_runtime_1.jsx)("p", { style: { fontSize: "18px", fontWeight: "bold", color: "#016A74", marginBottom: "-10px", marginTop: "-10px" }, children: "\u062E\u062F\u0645\u0627\u062A \u0633\u0631\u064A\u0639\u0629" }), cardsData.map(function (card, index) { return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { md: 4, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card, { className: "h-100", style: {
                                borderRadius: "12px",
                                background: card.bgColor || "#f8f9fc",
                                color: card.textColor || "#000",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                                border: "1px solid #e5e7eb",
                                cursor: "pointer",
                                transition: "transform 0.2s",
                            }, onClick: function () {
                                if (card.action === "edit") {
                                    setShowEditModal(true);
                                }
                            }, onMouseEnter: function (e) {
                                return (e.currentTarget.style.transform = "scale(1.03)");
                            }, onMouseLeave: function (e) {
                                return (e.currentTarget.style.transform = "scale(1)");
                            }, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { className: "d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                            backgroundColor: card.color,
                                            borderRadius: "50%",
                                            width: "55px",
                                            height: "55px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginRight: "15px",
                                        }, children: card.icon }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { className: "mb-1 mx-2 mt-2 cardDashTitEmp", style: { color: card.textColor || "#111827" }, children: card.title }), (0, jsx_runtime_1.jsx)("small", { children: card.number })] })] }) }) }, index)); })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Modal, { show: showEditModal, onHide: function () { return setShowEditModal(false); }, centered: true, children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal.Header, { closeButton: true, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal.Title, { children: "\u062A\u0639\u062F\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0648\u0638\u0641" }) }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Modal.Body, { children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form, { children: [(0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0648\u0638\u0641" })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629" }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Select, { required: true, style: { borderRadius: "10px" }, children: [(0, jsx_runtime_1.jsx)("option", { value: "", children: "\u0627\u062E\u062A\u0631 \u0627\u0644\u062D\u0627\u0644\u0629" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0645\u062A\u0632\u0648\u062C\u0629", children: "\u0645\u062A\u0632\u0648\u062C\u0629" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0645\u0637\u0644\u0642\u0629", children: "\u0645\u0637\u0644\u0642\u0629" }), (0, jsx_runtime_1.jsx)("option", { value: "\u0623\u0631\u0645\u0644\u0629", children: "\u0623\u0631\u0645\u0644\u0629" })] })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0639\u062F\u062F \u0627\u0644\u0632\u0648\u062C\u0627\u062A" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0623\u062F\u062E\u0644 \u0631\u0642\u0645 " })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0639\u062F\u062F \u0623\u0641\u0631\u0627\u062F \u0627\u0644\u0639\u0627\u0626\u0644\u0629" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "number", placeholder: "\u0639\u062F\u062F \u0627\u0644\u0623\u0641\u0631\u0627\u062F / \u0623\u062F\u062E\u0644 \u0631\u0642\u0645" })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0645\u0643\u0627\u0646 \u0627\u0644\u0633\u0643\u0646" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0627\u0644\u0645\u062F\u064A\u0646\u0629 / \u0627\u0644\u0645\u0646\u0637\u0642\u0629" })] }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Form.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Label, { children: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Form.Control, { type: "text", placeholder: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644" })] })] }) }), (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Modal.Footer, { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "secondary", onClick: function () { return setShowEditModal(false); }, children: "\u0625\u0644\u063A\u0627\u0621" }), (0, jsx_runtime_1.jsx)(react_bootstrap_1.Button, { variant: "success", className: "saveEdits", children: "\u062D\u0641\u0638 \u0627\u0644\u062A\u0639\u062F\u064A\u0644\u0627\u062A" })] })] })] }));
};
exports.default = ServicesHeader;
