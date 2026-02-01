"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ProfileHeader_1 = require("../components/ProfileHeader");
var EmpGateSideBar_1 = require("../components/EmpGateSideBar");
var Profile_1 = require("../components/Profile");
function ProfilePage() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(EmpGateSideBar_1.default, { children: [(0, jsx_runtime_1.jsx)(ProfileHeader_1.default, {}), (0, jsx_runtime_1.jsx)(Profile_1.default, {})] }) }));
}
exports.default = ProfilePage;
