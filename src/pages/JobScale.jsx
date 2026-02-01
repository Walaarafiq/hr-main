import { useState, useEffect } from "react";
import CategoriesHeader from "../components/CategoriesHeader"

import JobScaleTable from "../components/JobScaleTable"
function JobScale() {
  return (
    <div>
      <CategoriesHeader
        title="السلم الوظيفي"
        desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."
      />
      <JobScaleTable />
    </div>
  )
}

export default JobScale;
