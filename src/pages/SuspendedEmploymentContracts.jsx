import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeesHeader from '../components/EmployeesHeader';
import EmployeesFilters from '../components/EmployeesFilters';
import ContrastsTable from '../components/ContrastsTable';
function SuspendedEmploymentContracts() {
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
      <EmployeesHeader title="عقود تشغيل متوقفة" desc="يمكنك استعراض بيانات الموظفين والبحث المتقدم عبر الفلاتر التخصصية"/>
      <EmployeesFilters/>       
      <ContrastsTable employees={employees} setEmployees={setEmployees} />
    </div>
  )
}

export default SuspendedEmploymentContracts