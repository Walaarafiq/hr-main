import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import EmployeesHeader from "../components/EmployeesHeader";
import EmployeesFilters from "../components/EmployeesFilters";
import ContrastsTable from "../components/ContrastsTable";

function PermanentEmploymentContracts() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(
          "https://darksalmon-anteater-608881.hostingersite.com/api/employees",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch employees");
        }

        const data = await res.json();

        // ✅ ضمان أن employees دايمًا Array
        if (Array.isArray(data)) {
          setEmployees(data);
        } else if (Array.isArray(data.data)) {
          setEmployees(data.data);
        } else {
          setEmployees([]);
        }

      } catch (err) {
        console.error(err);
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    loadEmployees();
  }, [navigate]);

  return (
    <div>
      <EmployeesHeader
        title="عقود تشغيل دائمة"
        desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"
      />

      <EmployeesFilters />

      <ContrastsTable
        employees={employees}
        setEmployees={setEmployees}
      />
    </div>
  );
}

export default PermanentEmploymentContracts;
