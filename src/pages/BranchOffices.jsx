import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import BranchOfficesTable from '../components/BranchOfficesTable';
function BranchOffices() {
  return (
    <div>
        <CategoriesHeader
            title="المكاتب الفرعية"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <BranchOfficesTable />
    </div>
  )
}

export default BranchOffices;