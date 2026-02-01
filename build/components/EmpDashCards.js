"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var fa_1 = require("react-icons/fa");
var EmpDashCards = function () {
    var cardsData = [
        {
            title: "حالة الموظف",
            number: "على رأس عمله",
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaUserTie, { size: 25 }),
            color: "#0f766e"
        },
        {
            title: "صافي آخر راتب",
            number: "4070 شيكل",
            subtitle: "منذ 5/5/2025",
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaWallet, { size: 25 }),
            color: "#f59e0b"
        },
        {
            title: "الأيام المتبقية من الإجازة السنوية",
            number: "5 أيام",
            progress: 50,
            subtitle: "من أصل 18 يوم",
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaCalendarAlt, { size: 25 }),
            color: "#3b82f6"
        },
        {
            title: "الإجازات المستخدمة",
            number: 3,
            subtitle: "إجازات مستخدمة هذا العام",
            icon: (0, jsx_runtime_1.jsx)(fa_1.FaPlaneDeparture, { size: 25 }),
            color: "#ef4444"
        },
    ];
    return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Row, { className: "g-4", children: cardsData.map(function (card, index) { return ((0, jsx_runtime_1.jsx)(react_bootstrap_1.Col, { md: 3, children: (0, jsx_runtime_1.jsx)(react_bootstrap_1.Card, { style: {
                    borderRadius: "12px",
                    backgroundColor: "#f8f9fc",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.15)",
                    border: "1px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "transform 0.2s",
                }, className: "h-100", onMouseEnter: function (e) {
                    return (e.currentTarget.style.transform = "scale(1.03)");
                }, onMouseLeave: function (e) {
                    return (e.currentTarget.style.transform = "scale(1)");
                }, children: (0, jsx_runtime_1.jsxs)(react_bootstrap_1.Card.Body, { className: "d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)("div", { style: {
                                backgroundColor: card.color,
                                color: "white",
                                borderRadius: "50%",
                                width: "55px",
                                height: "55px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginRight: "15px",
                            }, children: card.icon }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { className: "mb-1 mx-2 mt-2 cardDashTitEmp", children: card.title }), (0, jsx_runtime_1.jsx)("h4", { className: "mx-3 mt-2 cardDashNumEmp", children: card.number }), card.progress !== undefined && ((0, jsx_runtime_1.jsx)("div", { className: "mt-2 mx-2", children: (0, jsx_runtime_1.jsx)("div", { className: "progress", style: { height: "6px", borderRadius: "4px" }, children: (0, jsx_runtime_1.jsx)("div", { className: "progress-bar", role: "progressbar", style: { width: "".concat(card.progress, "%"), backgroundColor: card.color }, "aria-valuenow": card.progress, "aria-valuemin": "0", "aria-valuemax": "100" }) }) })), card.subtitle && ((0, jsx_runtime_1.jsx)("small", { className: "text-muted mx-3 subtitle", children: card.subtitle }))] })] }) }) }, index)); }) }));
};
exports.default = EmpDashCards;
