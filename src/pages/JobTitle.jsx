import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
function JobTitle() {
  return (
    <div>
        <CategoriesHeader
            title="المسمى الوظيفي"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <JobTitleTable />
    </div>
  )
}

export default JobTitle