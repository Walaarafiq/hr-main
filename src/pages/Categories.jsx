import React, { useState } from "react";
import CategoriesTable from "../components/CategoriesTable";
import CategoriesHeader from "../components/CategoriesHeader";

function Categories() {
  // const [employees, setEmployees] = useState([
  //   { id: 1, GovName: "الاولى", EmpNum: "1 موظف" },
  //   { id: 2, GovName: "الثالثة", EmpNum: "10 موظفين" },
  //   { id: 3, GovName: "الثانية", EmpNum: "3 موظفين" },
  //   { id: 4, GovName: "الخامسة", EmpNum: "11 موظف" },
  //   { id: 5, GovName: "الاولى", EmpNum: "50 موظف" },
  // ]);

  return (
    <div>
      <CategoriesHeader
        title="الفئات"
        desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."
        // onAddCategory={(newCategory) => 
        //   setEmployees(prev => [
        //     ...prev,
        //     { id: prev.length + 1, GovName: newCategory.name, EmpNum: newCategory.empNum }
        //   ])
        // }
      />

      <CategoriesTable  />
    </div>
  );
}

export default Categories;
