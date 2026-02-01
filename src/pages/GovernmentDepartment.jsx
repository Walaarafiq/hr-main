import React from 'react'
import EmployeesFilters from '../components/EmployeesFilters'
import CategoriesHeader from "../components/CategoriesHeader";
import GovermentsDepartmentTable from '../components/GovermentsDepartmentTable';
function GovernmentDepartment() {
  return (
    <div>
        <CategoriesHeader
            title="الدائرة"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <GovermentsDepartmentTable />
    </div>
  )
}

export default GovernmentDepartment;