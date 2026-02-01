import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import WorkContractsTable from '../components/WorkContractsTable';
function WorkContracts() {
  return (
    <div>
        <CategoriesHeader
            title="عقود التشغيل"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <WorkContractsTable />
    </div>
  )
}

export default WorkContracts;