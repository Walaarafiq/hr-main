import React from 'react';
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import EmployeesTable from '../components/EmployeesTable';
import TypeOfEmpTable from '../components/TypeOfEmpTable';
import GovermentsHeader from '../components/GovermentsHeader';

function EmpType() {
  return (
    <div>
      <GovermentsHeader title="أنواع الموظفين" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <TypeOfEmpTable />
    </div>
  )
}

export default EmpType