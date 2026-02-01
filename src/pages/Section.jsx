import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import DivisionTable from '../components/DivisionTable';
import SectionTable from '../components/SectionTable';
function Section() {
  return (
    <div>
        <CategoriesHeader
            title="القسم"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <SectionTable />
    </div>
  )
}

export default Section