"use strict";
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
var GovermentsHeader_1 = require("../components/GovermentsHeader");
var GovermentsTable_1 = require("../components/GovermentsTable");
var initialEmployees = [
    { id: 1, GovName: "وزارة الإقتصاد", EmpNum: "974334252" },
    { id: 2, GovName: "وزارة الصحة", EmpNum: "974334252" },
    { id: 3, GovName: "وزارة العمل", EmpNum: "974334252" },
    { id: 4, GovName: "وزارة المالية", EmpNum: "974334252" },
    { id: 5, GovName: "وزارة الصحة", EmpNum: "974334252" },
];
function Goverments() {
    var _a = (0, react_1.useState)(initialEmployees), employees = _a[0], setEmployees = _a[1];
    var handleAddItem = function (item) {
        setEmployees(function (prev) { return __spreadArray(__spreadArray([], prev, true), [
            {
                id: Date.now(),
                GovName: item.name,
                EmpNum: item.secondValue || "-"
            }
        ], false); });
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(GovermentsHeader_1.default, { title: "\u0627\u0644\u0648\u0632\u0627\u0631\u062A", desc: "\u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u062D\u0630\u0641 \u0627\u0644\u0642\u064A\u0645.", onAddItem: handleAddItem }), (0, jsx_runtime_1.jsx)(GovermentsTable_1.default, { employees: employees, setEmployees: setEmployees })] }));
}
exports.default = Goverments;
