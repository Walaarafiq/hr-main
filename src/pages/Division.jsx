import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import DivisionTable from '../components/DivisionTable';
function Division() {
  return (
    <div>
        <CategoriesHeader
            title="الشعبة"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <DivisionTable />
    </div>
  )
}

export default Division