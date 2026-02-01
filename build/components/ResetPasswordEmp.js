"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react'
// function ResetPasswordEmp() {
//   return (
//     <div>ResetPasswordEmp</div>
//   )
// }
// export default ResetPasswordEmp;
var react_1 = require("react");
var Button_1 = require("react-bootstrap/Button");
var Form_1 = require("react-bootstrap/Form");
var fa_1 = require("react-icons/fa");
var react_router_dom_1 = require("react-router-dom");
function ResetPasswordEmp() {
    var _this = this;
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)(""), nationalId = _a[0], setNationalId = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var _d = (0, react_1.useState)(""), error = _d[0], setError = _d[1];
    var handleLogin = function (e) { return __awaiter(_this, void 0, void 0, function () {
        var response, data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError("");
                    if (!nationalId || !password) {
                        setError("يرجى إدخال رقم الهوية وكلمة المرور");
                        return [2 /*return*/];
                    }
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, fetch("https://darksalmon-anteater-608881.hostingersite.com/api/login", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ national_id: nationalId, password: password }),
                        })];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    if (response.status === 200 || response.status === 202) {
                        localStorage.setItem("token", data.data.token);
                        navigate("/emp-dashboard");
                        return [2 /*return*/];
                    }
                    setError(data.message || "رقم الهوية أو كلمة المرور غير صحيحة");
                    return [3 /*break*/, 6];
                case 4:
                    err_1 = _a.sent();
                    setError("حدث خطأ في الاتصال بالخادم");
                    return [3 /*break*/, 6];
                case 5:
                    setLoading(false);
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "login-page", style: {
            minHeight: "100vh",
            fontFamily: "Tajawal, sans-serif",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: "url('/images/backg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }, children: [(0, jsx_runtime_1.jsx)("div", { className: "login-overlay", style: {
                    position: "absolute",
                    inset: 0,
                    background: "rgba(200, 200, 200, 0.4)",
                } }), (0, jsx_runtime_1.jsx)("img", { src: "/images/logo222.png", alt: "Logo", style: {
                    position: "fixed",
                    top: "20px",
                    right: "20px",
                    width: "220px",
                    height: "220px",
                    objectFit: "contain",
                    zIndex: 10,
                } }), (0, jsx_runtime_1.jsxs)("div", { className: "login-box", style: {
                    position: "relative",
                    background: "rgba(255, 255, 255, 0.85)",
                    padding: "35px 30px",
                    width: "100%",
                    maxWidth: "480px",
                    borderRadius: "18px",
                    boxShadow: "0 15px 40px rgba(0, 0, 0, 0.25)",
                    textAlign: "center",
                    zIndex: 1,
                    backdropFilter: "blur(8px)",
                }, children: [(0, jsx_runtime_1.jsx)("h6", { className: "login-title", children: "\u0623\u0647\u0644\u0627 \u0628\u0643   " }), (0, jsx_runtime_1.jsx)("h5", { className: "login-subtitle mt-2", children: "\u0646\u0633\u064A\u062A \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631" }), error && ((0, jsx_runtime_1.jsx)("div", { className: "alert alert-danger", style: { fontSize: "14px", textAlign: "center" }, children: error })), (0, jsx_runtime_1.jsx)("p", { children: "\u0642\u0645 \u0628\u0627\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 \u0644\u0627\u0631\u0633\u0627\u0644 \u0643\u0648\u062F \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0645\u0631\u0648\u0631 \u062C\u062F\u064A\u062F\u0629" }), (0, jsx_runtime_1.jsxs)(Form_1.default, { onSubmit: handleLogin, children: [(0, jsx_runtime_1.jsxs)(Form_1.default.Group, { className: "mb-3", children: [(0, jsx_runtime_1.jsxs)(Form_1.default.Label, { children: [(0, jsx_runtime_1.jsx)(fa_1.FaIdCard, { style: { marginLeft: "8px" } }), "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"] }), (0, jsx_runtime_1.jsx)(Form_1.default.Control, { type: "text", placeholder: "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", maxLength: 9, value: nationalId, onChange: function (e) { return setNationalId(e.target.value); } })] }), (0, jsx_runtime_1.jsx)(Button_1.default, { type: "submit", className: "btn-login w-100", style: {
                                    background: "linear-gradient(to top, #014f56, #016A74, #1b8a95)",
                                    color: "#dadbdd",
                                    borderRadius: "12px",
                                    fontWeight: 600,
                                }, disabled: loading, children: "\u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0643\u0648\u062F" })] }), (0, jsx_runtime_1.jsxs)("p", { className: "text-center mt-4", style: { fontSize: "14px", color: "grey" }, children: ["\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 ", (0, jsx_runtime_1.jsx)("br", {}), "\u0644\u062F\u0649 \u0648\u0632\u0627\u0631\u0629 \u0627\u0644\u0625\u0642\u062A\u0635\u0627\u062F \u0627\u0644\u0648\u0637\u0646\u064A \u0627\u0644\u0641\u0644\u0633\u0637\u064A\u0646\u064A"] })] })] }));
}
exports.default = ResetPasswordEmp;
