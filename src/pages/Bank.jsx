import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import BankTables from '../components/BankTables';
function Bank() {
  return (
    <div>
        <CategoriesHeader
            title="البنوك"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <BankTables />
    </div>
  )
}

export default Bank;