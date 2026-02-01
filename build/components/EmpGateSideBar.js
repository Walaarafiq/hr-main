"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Navbar_1 = require("react-bootstrap/Navbar");
var Nav_1 = require("react-bootstrap/Nav");
var fa_1 = require("react-icons/fa");
var fa6_1 = require("react-icons/fa6");
var react_router_dom_1 = require("react-router-dom");
function EmpGateSideBar(_a) {
    var children = _a.children;
    var _b = (0, react_1.useState)(true), open = _b[0], setOpen = _b[1];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "main-layout", children: [(0, jsx_runtime_1.jsx)("div", { className: "sidebarEmp ".concat(open ? "open" : "closed"), children: (0, jsx_runtime_1.jsxs)(Nav_1.default, { className: "flex-column px-3 mt-4", children: [(0, jsx_runtime_1.jsx)("h5", { className: "text-center titleOfSide", children: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0625\u0642\u062A\u0635\u0627\u062F \u0627\u0644\u0648\u0637\u0646\u064A" }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("label", { className: "LabelSideEmp", children: "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629" }), (0, jsx_runtime_1.jsx)("ul", { className: "ulMain", children: (0, jsx_runtime_1.jsx)("li", { style: { paddingRight: "0px" }, children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/emp-dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0627\u0644\u0635\u0641\u062D\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"] }) }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("label", { className: "LabelSideEmp", children: "\u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0630\u0627\u062A\u064A\u0629" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/profile", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0645\u0644\u0641\u064A \u0627\u0644\u0634\u062E\u0635\u064A"] }) }) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0642\u0633\u064A\u0645\u0629 \u0627\u0644\u0631\u0627\u062A\u0628"] }) }) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/martial-status", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0627\u0644\u062D\u0627\u0644\u0629 \u0627\u0644\u0625\u062C\u062A\u0645\u0627\u0639\u064A\u0629 \u0644\u0644\u0645\u0648\u0638\u0641"] }) }) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0637\u0644\u0628 \u0625\u062C\u0627\u0632\u0629"] }) }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("label", { className: "LabelSideEmp", children: "\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0639\u0627\u0626\u0644\u0629" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0627\u0644\u0632\u0648\u062C/\u0627\u0644\u0632\u0648\u062C\u0629"] }) }) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0627\u0644\u0623\u0628\u0646\u0627\u0621"] }) }) }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u0627\u0644\u0645\u0639\u0627\u0644\u0648\u0646"] }) }) }), (0, jsx_runtime_1.jsx)("hr", {}), (0, jsx_runtime_1.jsx)("label", { className: "LabelSideEmp", children: "\u0627\u0644\u062D\u0633\u0627\u0628" }), (0, jsx_runtime_1.jsx)("ul", { children: (0, jsx_runtime_1.jsx)("li", { className: "ulMain", children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.NavLink, { to: "/dashboard", style: {
                                        textDecoration: "none",
                                        color: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "5px",
                                    }, className: function (_a) {
                                        var isActive = _a.isActive;
                                        return isActive ? "active-link" : "";
                                    }, children: [(0, jsx_runtime_1.jsx)(fa_1.FaHome, { style: { marginLeft: "8px" } }), "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C"] }) }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "content ".concat(open ? "" : "full"), children: [(0, jsx_runtime_1.jsxs)(Navbar_1.default, { className: " navbar px-3 d-flex justify-content-between border-bottom", style: { backgroundColor: "#f1f3f5" }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)("button", { className: "toggleBtnEmp", onClick: function () { return setOpen(!open); }, children: "\u2630" }), (0, jsx_runtime_1.jsx)("img", { src: "/images/logo.png", alt: "logo", style: { width: 75, height: 75 }, className: "ms-3" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "d-flex align-items-center", children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: "/auth/login", children: (0, jsx_runtime_1.jsx)(fa_1.FaSignOutAlt, { className: "iconsEmp me-3" }) }), (0, jsx_runtime_1.jsx)(fa_1.FaBell, { className: "iconsEmp me-3" }), (0, jsx_runtime_1.jsx)(fa6_1.FaMessage, { className: "iconsEmp me-3" }), (0, jsx_runtime_1.jsx)("img", { src: "/images/employee-02.jpg", alt: "user", className: "userImg", style: {
                                            width: 50,
                                            height: 50,
                                            borderRadius: "50%",
                                        } })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "p-4", children: children }), (0, jsx_runtime_1.jsxs)("footer", { className: "emp-footer mt-5", children: [(0, jsx_runtime_1.jsxs)("div", { className: "footer-links", children: [(0, jsx_runtime_1.jsx)("span", { children: "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629" }), (0, jsx_runtime_1.jsx)("span", { className: "divider", children: "|" }), (0, jsx_runtime_1.jsx)("span", { children: "\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645" }), (0, jsx_runtime_1.jsx)("span", { className: "divider", children: "|" }), (0, jsx_runtime_1.jsx)("span", { children: "\u0627\u0644\u062A\u0639\u0644\u064A\u0645\u0627\u062A" })] }), (0, jsx_runtime_1.jsx)("div", { className: "footer-copy", children: "\u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F \u0627\u0644\u0648\u0637\u0646\u064A \u0627\u0644\u0641\u0644\u0633\u0637\u064A\u0646\u064A" })] })] })] }));
}
exports.default = EmpGateSideBar;
