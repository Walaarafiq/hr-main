import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import GeneralAdministrationTable from '../components/GeneralAdministrationTable';
function GeneralAdminstration() {
  return (
    <div>
        <CategoriesHeader
            title="الإدارة العامة"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <GeneralAdministrationTable />
    </div>
  )
}

export default GeneralAdminstration
;