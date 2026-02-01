import React from 'react';
import DegreeTable from "../components/DegreeTable";
import CategoriesHeader from "../components/CategoriesHeader";
function Degree() {
  return (
    <div>
        <CategoriesHeader
            title="الدرجات"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <DegreeTable />
    </div>
  )
}

export default Degree;