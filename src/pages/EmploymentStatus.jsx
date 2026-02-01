import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import EmploymentStatusTable from '../components/EmploymentStatusTable';
function EmploymentStatus() {
  return (
    <div>
        <CategoriesHeader
            title="الحالة الوظيفية"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <EmploymentStatusTable />
    </div>
  )
}

export default EmploymentStatus;