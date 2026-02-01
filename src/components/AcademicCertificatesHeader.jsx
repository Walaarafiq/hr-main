import { useState } from "react";
import FiltersModalEmp from "./FiltersModalEmp";
import { NavLink } from "react-router-dom";

function AcademicCertifactesHeader({ title = "عنوان افتراضي", desc = "وصف", onApplyFilters }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <div className="employees-header d-flex justify-content-between align-items-center">
        <div>
          <h4 style={{ textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
            {title}
          </h4>
          <p style={{ fontSize: "14px" }}>{desc}</p>
        </div>

        <div className="d-flex gap-2">
         <NavLink to="/add-certificate">
  <button
    className="btn btn-dark"
    style={{ fontSize: "13px", padding: "6px 10px" }}>
    إضافة شهادة جديدة
  </button>
</NavLink>
          </div>
          
      </div>
       
      {showFilters && (
        <FiltersModalEmp
          onClose={() => setShowFilters(false)}
          onApply={(filters) => {
            onApplyFilters(filters);
            setShowFilters(false);
          }}
        />
      )}
    </>
  );
}

export default AcademicCertifactesHeader;