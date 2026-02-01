import React from 'react'
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
import ClassificationHeader from '../components/ClassificationHeader';
import EmpClassificationsTable from '../components/EmpClassificationsTable';
function EmpClassifications() {
  return (
    <div>
      <ClassificationHeader title="تصنيفات الموظفين العامة" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <EmpClassificationsTable />
    </div>
  )
}

export default EmpClassifications;
