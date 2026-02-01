import { useState } from "react";
import FiltersModalEmp from "./FiltersModalEmp";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function EmployeesHeader({ title = "عنوان افتراضي", desc = "وصف", onApplyFilters }) {
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
          <button
            className="btn btn-outline-warning"
            style={{ fontSize: "13px", padding: "6px 10px" }}
            onClick={() => setShowFilters(true)}>
            الفلاتر المتقدمة
          </button>

          <NavLink to="/add-employee">
            <button
                className="btn btn-dark"
                style={{ fontSize: "13px", padding: "6px 10px" }}>
                إضافة موظف جديد
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

export default EmployeesHeader;
