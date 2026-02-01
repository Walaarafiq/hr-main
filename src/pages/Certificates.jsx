import React from 'react';
import DegreeTable from "../components/DegreeTable";
import CategoriesHeader from "../components/CategoriesHeader";
import CertificatesTable from '../components/CertificatesTable';

function Certificates() {
  return (
    <div>
        <CategoriesHeader
            title="الشهادات"
            desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."/>
        <CertificatesTable />
    </div>
  )
}

export default Certificates