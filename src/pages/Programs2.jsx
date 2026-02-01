import React from 'react'
import Programs2Table from '../components/Programs2Table';
import CategoriesHeader from "../components/CategoriesHeader";


function Programs2() {
  return (
    <div>
        <CategoriesHeader
            title="الدرجات"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <Programs2Table />
    </div>
  )
}

export default Programs2;