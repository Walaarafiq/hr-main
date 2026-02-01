import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import CourseTypesTables from '../components/CourseTypesTables';
function CourseTypes() {
  return (
    <div>
        <CategoriesHeader
            title="البيانات المرجعية"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <CourseTypesTables />
    </div>
  )
}

export default CourseTypes;