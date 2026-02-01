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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var ProgramHeader_1 = require("../components/ProgramHeader");
var ProgramsTable_1 = require("../components/ProgramsTable");
var Training_1 = require("../components/Training");
var TrainingHeader_1 = require("../components/TrainingHeader");
function TrainingPage() {
    var _a = (0, react_1.useState)([]), projects = _a[0], setProjects = _a[1];
    var handleAddProject = function (newProject) {
        setProjects(function (prev) { return __spreadArray(__spreadArray([], prev, true), [
            __assign(__assign({}, newProject), { id: prev.length ? prev[prev.length - 1].id + 1 : 1 })
        ], false); });
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(TrainingHeader_1.default, { title: "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629", desc: "\u064A\u0645\u0643\u0646\u0643 \u0627\u0633\u062A\u0639\u0631\u0627\u0636 \u0648\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u062F\u0648\u0631\u0627\u062A \u0627\u0644\u062A\u062F\u0631\u064A\u0628\u064A\u0629 \u0648\u0648\u0631\u0634 \u0627\u0644\u0639\u0645\u0644 \u0648\u0627\u0644\u062A\u062F\u0631\u064A\u0628 \u0627\u0644\u0645\u064A\u062F\u0627\u0646\u064A.", onAddProject: handleAddProject }), (0, jsx_runtime_1.jsx)(Training_1.default, { projects: projects, setProjects: setProjects })] }));
}
exports.default = TrainingPage;
