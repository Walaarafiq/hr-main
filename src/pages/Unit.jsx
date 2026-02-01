import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import UnitTable from '../components/UnitTable';
function Unit() {
  return (
    <div>
        <CategoriesHeader
            title="الوحدة"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <UnitTable />
    </div>
  )
}

export default Unit;