import React from 'react'
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import TemporaryEmpTable from '../components/TemporaryEmpTable';
function TemporaryContrastEmployees() {
  return (
    <div>
      <EmployeesHeader title="موظفي العقود المؤقتة" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <TemporaryEmpTable />
    </div>
  )
}

export default TemporaryContrastEmployees