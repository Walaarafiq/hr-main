import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {
  FaSignOutAlt, FaBell, FaAngleDown, FaUser, FaFileAlt, FaHome, FaUserTie, FaCogs, FaFolderOpen, FaClock
  , FaChalkboardTeacher, FaArchive, FaFileInvoiceDollar, FaMoneyCheckAlt, FaTools
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { getEmployeeDashboard } from "../api/dashboard"; // Import API

type SideBarProps = {
  children: ReactNode;
};

function EmpGateSideBar({ children }: SideBarProps) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const [employeeName, setEmployeeName] = useState("جاري التحميل...");
  const [jobTitle, setJobTitle] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getEmployeeDashboard();
        if (response && response.data && response.data.personal_info) {
          setEmployeeName(response.data.personal_info.full_name);
          setJobTitle(response.data.personal_info.job_title);
          setDepartment(response.data.personal_info.department);
        }
      } catch (error) {
        console.error("Failed to fetch sidebar user data", error);
        setEmployeeName("الموظف");
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("employee_id");
    navigate("/gate2/emp-gate");
  };

  return (
    <div className="main-layout">

      {/* Sidebar */}
      <div className={`sidebarEmp ${open ? "open" : "closed"}`}>
        <Nav className="flex-column px-3 mt-4">

          <h5 className="text-center titleOfSide" style={{ fontSize: "16px", padding: "10px" }}>
            {employeeName}
            {jobTitle && <div style={{ fontSize: "12px", color: "#ccc", marginTop: "5px" }}>{jobTitle}</div>}
            {department && <div style={{ fontSize: "11px", color: "#aaa" }}>{department}</div>}
          </h5>
          <hr />

          {/* الرئيسية */}
          <label className="LabelSideEmp">الرئيسية</label>
          <ul className="ulMain">
            <li style={{ paddingRight: "0px" }}>
              <NavLink
                to="/emp-dashboard"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                الصفحة الرئيسية
              </NavLink>
            </li>
          </ul>
          <hr />

          {/* خدمات الموظف الذاتية  */}
          <label className="LabelSideEmp">
            الخدمات الذاتية

          </label>

          <ul>

            <li className="ulMain">
              <NavLink
                to="/profile"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                ملفي الشخصي
              </NavLink>
            </li>

          </ul>

          <ul>
            <li className="ulMain">
              <NavLink
                to="/salary"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                قسيمة الراتب
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="ulMain">
              <NavLink
                to="/martial-status"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                الحالة الإجتماعية للموظف
              </NavLink>
            </li>
          </ul>

          <ul><li className="ulMain">
            <NavLink
              to="/dashboard"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
              className={({ isActive }) =>
                isActive ? "active-link" : ""
              }>
              <FaHome style={{ marginLeft: "8px" }} />
              طلب إجازة
            </NavLink>
          </li></ul>
          <hr />

          {/* عائلة الموظف  */}
          <label className="LabelSideEmp">
            بيانات العائلة
          </label>

          <ul>
            <li className="ulMain">
              <NavLink
                to="/add-wife"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                الزوج/الزوجة
              </NavLink>
            </li>

          </ul>

          <ul>
            <li className="ulMain">
              <NavLink
                to="/add-children"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                الأبناء
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="ulMain">
              <NavLink
                to="/add-heart"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                المعالون
              </NavLink>
            </li>
          </ul>

          <hr />

          {/* النظام */}
          <label className="LabelSideEmp">الحساب</label>

          <ul>
            <li className="ulMain">
              <NavLink
                to="/dashboard"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }>
                <FaHome style={{ marginLeft: "8px" }} />
                تسجيل الخروج
              </NavLink>
            </li>

          </ul>

        </Nav>
      </div>

      {/* ===== Content ===== */}
      <div className={`content ${open ? "" : "full"}`}>
        <Navbar className=" navbar px-3 d-flex justify-content-between border-bottom" style={{ backgroundColor: "#f1f3f5" }}>

          <div className="d-flex align-items-center">
            <button className="toggleBtnEmp" onClick={() => setOpen(!open)}>
              ☰
            </button>

            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: 75, height: 75 }}
              className="ms-3"
            />
            {/* <NavLink to="/add-employee">
            <button
                className="btn addEmployee ms-3"
                style={{ fontSize: "13px", padding: "6px 10px" }}>
                  أضف موظف جديد
            </button>
            </NavLink> */}
          </div>

          <div className="d-flex align-items-center">
            <FaSignOutAlt className="iconsEmp me-3" style={{ cursor: "pointer" }} onClick={handleLogout} />
            <FaBell className="iconsEmp me-3" />
            <FaMessage className="iconsEmp me-3" />

            <img
              src="/images/employee-02.jpg"
              alt="user"
              className="userImg"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
              }} />

          </div>

        </Navbar>

        <div className="p-4">
          {children}
        </div>
        {/* ===== Footer ===== */}
        <footer className="emp-footer mt-5">
          <div className="footer-links">
            <span>الخصوصية</span>
            <span className="divider">|</span>
            <span>الشروط والأحكام</span>
            <span className="divider">|</span>
            <span>التعليمات</span>
          </div>

          <div className="footer-copy">
            وزارة الاقتصاد الوطني الفلسطيني
          </div>
        </footer>


      </div>
    </div>
  );
}

export default EmpGateSideBar;