import React from 'react';
import JobTitleTable from '../components/JobTitleTable';
import EmployeesFilters from '../components/EmployeesFilters';
import CategoriesHeader from "../components/CategoriesHeader";
import CourseClassificationsTables from '../components/CourseClassificationsTables';
function CourseClassifications() {
  return (
    <div>
        <CategoriesHeader
            title=" تصنيفات الدورات"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <EmployeesFilters/>
        <CourseClassificationsTables />
    </div>
  )
}

export default CourseClassifications;