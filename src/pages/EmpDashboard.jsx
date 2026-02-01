import React, { useEffect, useState } from 'react';
import EmpGateSideBar from '../components/EmpGateSideBar';
import { Outlet } from "react-router-dom";
import DashHeader from '../components/DashHeader';
import EmpDashCards from '../components/EmpDashCards';
import ServicesHeader from '../components/ServicesHeader';
import EmpDetailsCards from '../components/EmpDetailsCards';
import { getEmployeeDashboard } from '../api/dashboard';

function EmpDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeDashboard();
        setDashboardData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
        setError("فشل في جلب بيانات لوحة التحكم");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <EmpGateSideBar>
        <div className="text-center mt-5">جاري التحميل...</div>
      </EmpGateSideBar>
    );
  }

  if (error) {
    return (
      <EmpGateSideBar>
         <div className="alert alert-warning text-center mt-5 mx-4" role="alert">
            <h4 className="alert-heading">تنبيه!</h4>
            <p>{error}</p>
            <hr />
            <p className="mb-0">يرجى التواصل مع دائرة الموارد البشرية للتحقق من بياناتك.</p>
        </div>
      </EmpGateSideBar>
    );
  }

  return (
    <div>
      <EmpGateSideBar>
        <DashHeader name={dashboardData?.personal_info?.full_name || "موظف"} />
        <EmpDashCards data={dashboardData} />
        <ServicesHeader />
        <EmpDetailsCards data={dashboardData} />
        <Outlet />
      </EmpGateSideBar>
    </div>
  );
}

export default EmpDashboard;
