"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_bootstrap_1 = require("react-bootstrap");
var fa_1 = require("react-icons/fa");
var DashboardCards = function () {
    var cardsData = [
        { title: "عدد الموظفين الكلي", number: 256, icon: (0, jsx_runtime_1.jsx)(fa_1.FaUsers, { size: 25 }), color: "#1e3a8a" },
        { title: "الموظفين الرسميين", number: 12, icon: (0, jsx_runtime_1.jsx)(fa_1.FaUserTie, { size: 25 }), color: "#0f766e" },
        { title: "العقود المؤقتة", number: 5, icon: (0, jsx_runtime_1.jsx)(fa_1.FaBalanceScale, { size: 25 }), color: "#b45309" },
        { title: "المتقاعدين", number: 85, icon: (0, jsx_runtime_1.jsx)(fa_1.FaChartLine, { size: 25 }), color: "#334155" },
        { title: "عقود التشغيل", number: 18, icon: (0, jsx_runtime_1.jsx)(fa_1.FaBuilding, { size: 25 }), color: "#1d4ed8" },
        { title: "البرامج المعتمدة", number: 7, icon: (0, jsx_runtime_1.jsx)(fa_1.FaClipboardList, { size: 25 }), color: "#047857" },
        { title: "الوزارات", number: 41, icon: (0, jsx_runtime_1.jsx)(fa_1.FaFileAlt, { size: 25 }), color: "#475569" },
        { title: "نسبة الحضور الكلية", number: 83, icon: (0, jsx_runtime_1.jsx)(fa_1.FaBell, { size: 25 }), color: "#9a3412" },
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
                            }, children: card.icon }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_bootstrap_1.Card.Title, { className: "mb-1 mx-2 mt-2 cardDashTit", children: card.title }), (0, jsx_runtime_1.jsx)("h4", { className: "mx-3 mt-2 cardDashNum", children: card.number })] })] }) }) }, index)); }) }));
};
exports.default = DashboardCards;
