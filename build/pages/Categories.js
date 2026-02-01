"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var CategoriesTable_1 = require("../components/CategoriesTable");
var CategoriesHeader_1 = require("../components/CategoriesHeader");
function Categories() {
    // const [employees, setEmployees] = useState([
    //   { id: 1, GovName: "الاولى", EmpNum: "1 موظف" },
    //   { id: 2, GovName: "الثالثة", EmpNum: "10 موظفين" },
    //   { id: 3, GovName: "الثانية", EmpNum: "3 موظفين" },
    //   { id: 4, GovName: "الخامسة", EmpNum: "11 موظف" },
    //   { id: 5, GovName: "الاولى", EmpNum: "50 موظف" },
    // ]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(CategoriesHeader_1.default, { title: "\u0627\u0644\u0641\u0626\u0627\u062A", desc: "\u064A\u0645\u0643\u0646\u0643 \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629 \u0648\u0625\u0636\u0627\u0641\u0629 \u0623\u0648 \u062A\u0639\u062F\u064A\u0644 \u0623\u0648 \u062D\u0630\u0641 \u0627\u0644\u0642\u064A\u0645." }), (0, jsx_runtime_1.jsx)(CategoriesTable_1.default, {})] }));
}
exports.default = Categories;
