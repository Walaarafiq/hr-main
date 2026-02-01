import React from 'react'
import AdmenstrativeHeader from '../components/AdmenstrativeHeader'
import AcademicCertifactesFilters from '../components/AcademicCertifcatesFilters'
import AdministrativeAttachmentsTables from '../components/AdministrativeAttachmentsTables'
function AdministrativeAttachments() {
  return (
    <div>
        <AdmenstrativeHeader title="مرفقات إدارية" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
        <AcademicCertifactesFilters/>
        <AdministrativeAttachmentsTables/>
    </div>
  )
}

export default AdministrativeAttachments;