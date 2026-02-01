import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import EmployeeDocumentsTable from '../components/EmployeeDocumentsTable';
function EmployeeDocuments() {
  return (
    <div>
        <CategoriesHeader
            title="وثائق الموظفين"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <EmployeeDocumentsTable />
    </div>
  )
}

export default EmployeeDocuments;