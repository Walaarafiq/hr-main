import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import CrossingTable from '../components/CrossingTable';
function Crossing() {
  return (
    <div>
        <CategoriesHeader
            title="المعابر"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <CrossingTable />
    </div>
  )
}

export default Crossing;