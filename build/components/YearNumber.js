"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function YearNumber(_a) {
    var selectedYear = _a.selectedYear, onYearChange = _a.onYearChange;
    var currentYear = new Date().getFullYear();
    var years = Array.from({ length: 11 }, function (_, i) { return currentYear + i; });
    return ((0, jsx_runtime_1.jsx)("div", { className: "d-flex flex-wrap gap-2 mb-4 text-center justify-content-center mt-3", style: { direction: "rtl" }, children: years.map(function (year) { return ((0, jsx_runtime_1.jsx)("button", { className: "btn ".concat(selectedYear === year ? "btn-dark" : "btn-outline-dark"), style: {
                fontSize: "13px",
                padding: "6px 14px",
                minWidth: "70px",
            }, onClick: function () { return onYearChange(year); }, children: year }, year)); }) }));
}
exports.default = YearNumber;
