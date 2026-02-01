// import React from 'react'
// import EmployeesHeader from '../components/EmployeesHeader';
// import EmployeesFilters from '../components/EmployeesFilters';
// import EmployeesTable from '../components/EmployeesTable';
// function OfficialEmployees() {
//   return (
//     <div>
//       <EmployeesHeader title="قاعدة بيانات الموظفين" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
//       <EmployeesFilters/>       
//       <EmployeesTable />
//     </div>
//   )
// }

// export default OfficialEmployees

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import EmployeesHeader from "../components/EmployeesHeader";
import EmployeesFilters from "../components/EmployeesFilters";
import EmployeesTable from "../components/EmployeesTable";

function OfficialEmployees() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("https://darksalmon-anteater-608881.hostingersite.com/api/employees", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setEmployees(data?.data || data || []);
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
        title="قاعدة بيانات الموظفين"
        desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters />
      <EmployeesTable employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default OfficialEmployees;
