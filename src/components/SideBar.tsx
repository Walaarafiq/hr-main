import { useState } from "react";
import type { ReactNode } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FaSignOutAlt, FaBell, FaAngleDown,FaUser ,FaFileAlt ,FaHome,FaUserTie,FaCogs ,FaFolderOpen,FaClock 
  ,FaChalkboardTeacher,FaArchive,FaFileInvoiceDollar  ,FaMoneyCheckAlt, FaTools } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

type SideBarProps = {
  children: ReactNode;
};

function SideBar({ children }: SideBarProps) {
  const [open, setOpen] = useState(true);

  const [openMain2, setOpenMain2] = useState(true);
  const [openMain3, setOpenMain3] = useState(true);
  const [openMain4, setOpenMain4] = useState(false);
  const [openMain5, setOpenMain5] = useState(false);
  const [openMain6, setOpenMain6] = useState(true);
  const [openMain7, setOpenMain7] = useState(true);
  const [openMain8, setOpenMain8] = useState(true);
  const [openMain9, setOpenMain9] = useState(false);
  const [openMain10, setOpenMain10] = useState(false);
  const [openMain11, setOpenMain11] = useState(false);
  const [openMain12, setOpenMain12] = useState(false);

  return (
    <div className="main-layout">

      {/* Sidebar */}
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <Nav className="flex-column px-3 mt-4">

          <h5 className="text-center titleOfSide">
            وزارة الإقتصاد الوطني
          </h5>
          <hr />
    <ul className="ulMain">
            <li style={{ paddingRight: "0px" }}>
              <NavLink
                to="/gate2/emp-gate"
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
                <FaHome style={{marginLeft:"8px"}} />
                الدخول كموظف 
              </NavLink>
            </li>
            
          </ul>
          <hr/>
          {/* الرئيسية */}
         <label className="LabelSide">الرئيسية</label>
          <ul className="ulMain">
            <li style={{ paddingRight: "0px" }}>
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
                <FaHome style={{marginLeft:"8px"}} />
                لوحة التحكم
              </NavLink>
            </li>
          </ul>
          <hr />

          {/* شؤون الموظفين */}
          <label className="LabelSide">
            {/* <FaUser style={{marginLeft:"5px"}}/> */}
            إدارة شؤون الموظفين

          </label>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain2(!openMain2)}>
              <FaUserTie />
              شؤون الموظفين
              <FaAngleDown />
            </li>

            {!openMain2 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/employees">جميع الموظفين</NavLink>
                </li>
                <li>
                  <NavLink to="/official-employees">الرسميين</NavLink>
                </li>
                <li>
                  <NavLink to="/other-government">
                    رسميين في حكومة أخرى
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dismissd-employees">المفصولين</NavLink>
                </li>
                <li>
                  <NavLink to="/older-employees">المتقاعدين</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain3(!openMain3)}>
              <FaFileAlt style={{marginLeft:'-12px'}} />
              عقود التشغيل
              <FaAngleDown />
            </li>

            {!openMain3 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/permenant-contrast">عقود تشغيل دائمة</NavLink>
                </li>
                <li>
                  <NavLink to="/temporary-contrast">عقود تشغيل مؤقتة</NavLink>
                </li>
                <li>
                  <NavLink to="/suspended-contrast">عقود تشغيل متوقفة</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain4(!openMain4)}>
              <FaFileAlt style={{marginLeft:'12px'}} />
              برامج التشغيل المؤقتة
              <FaAngleDown />
            </li>

            {!openMain4 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/programs">كافة البرامج</NavLink>
                </li>
               <li>
                  <NavLink to="/temporary-contrast-employees">موظفي العقود المؤقتة</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain5(!openMain5)}>
              <FaCogs style={{marginLeft:'-10px'}} />
              الثوابت والقوائم
              <FaAngleDown />
            </li>

            {!openMain5 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/goverments">الوزارات</NavLink>
                </li>
                 <li>
                  <NavLink to="/emp-type">أنواع الموظفين</NavLink>
                </li>
                 <li>
                  <NavLink to="/emp-classifications">تصنيفات الموظفين العامة</NavLink>
                </li>
                 <li>
                  <NavLink to="/categories">الفئات</NavLink>
                </li>
                 <li>
                  <NavLink to="/job-scale">السلم الوظيفي</NavLink>
                </li>
                 <li>
                  <NavLink to="/degrees">الدرجات</NavLink>
                </li>
                 <li>
                  <NavLink to="/programs2">البرامج</NavLink>
                </li>
                 <li>
                  <NavLink to="/certificates">الشهادات</NavLink>
                </li>
                 <li>
                  <NavLink to="/departments">الدائرة</NavLink>
                </li>
                <li>
                  <NavLink to="/job-title">المسمى الوظيفي</NavLink>
                </li>
                <li>
                  <NavLink to="/divisions">الشعبة</NavLink>
                </li>
                <li>
                  <NavLink to="/section">القسم</NavLink>
                </li>
                <li>
                  <NavLink to="/unit">الوحدة</NavLink>
                </li>
                <li>
                  <NavLink to="/general-administration">الإدارة العامة</NavLink>
                </li>
                <li>
                  <NavLink to="/branch-offices">المكاتب الفرعية</NavLink>
                </li>
                <li>
                  <NavLink to="/crossing">المعبر</NavLink>
                </li>
                <li>
                  <NavLink to="/employment-status">الحالة الوظيفية</NavLink>
                </li>
                <li>
                  <NavLink to="/bank">البنوك</NavLink>
                </li>
                <li>
                  <NavLink to="/work-contracts">عقود التشغيل</NavLink>
                </li>
                <li>
                  <NavLink to="/employee-documents">وثائق الموظفين</NavLink>
                </li>
                <li>
                  <NavLink to="/course-types">أنواع الدورات</NavLink>
                </li>
                <li>
                  <NavLink to="/course-classifications">تصنيفات الدورات</NavLink>
                </li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain6(!openMain6)}>
              <FaFolderOpen style={{marginLeft:"-10px"}} />
              وثائق الموظفين
              <FaAngleDown />
            </li>

            {!openMain6 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/academic-certifcates">الشهادات الأكاديمية</NavLink>
                </li>
                <li>
                  <NavLink to="/administrative-attachments">مرفقات إدارية</NavLink>
                </li>
              </ul>
            )}
          </ul>

          {/* <ul className="ulMain mt-1">
            <li>
              <FaClock style={{marginLeft:"10px"}} />
              الحضور والانصراف

            </li>
          </ul> */}
        <ul>
            <li className="ulMain" onClick={() => setOpenMain11(!openMain11)}>
            <FaClock style={{marginLeft:"10px"}} />
              الحضور والإنصراف 
              <FaAngleDown />
            </li>

            {!openMain11 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/academic-certifcates">كشف الدورات التدريبية</NavLink>
                </li>
                
              </ul>
            )}
          </ul>

          {/* <ul className="ulMain mt-3">
            <li>
              <FaChalkboardTeacher style={{marginLeft:"10px"}} />
              التدريب والتطوير

            </li>
          </ul> */}
           <ul>
            <li className="ulMain" onClick={() => setOpenMain12(!openMain12)}>
            <FaChalkboardTeacher style={{marginLeft:"10px"}} />
              التدريب والتطوير  
              <FaAngleDown />
            </li>

            {!openMain12 && (
              <ul className="ulAuth">
                <li>
                  <NavLink to="/training">الدورات التدريبية</NavLink>
                </li>
                
              </ul>
            )}
          </ul>

          <ul className="ulMain mt-3">
            <li>
              <FaArchive style={{marginLeft:"10px"}} />
              أرشيف الموظفين
              </li>
          </ul>

          <hr />

          {/* الشؤون المالية */}
          <label className="LabelSide">إدارة الشؤون المالية</label>
            <ul>  
            <li className="ulMain mt-3" onClick={() => setOpenMain10(!openMain10)}>
              <FaFileInvoiceDollar style={{marginLeft:'-8px'}} />
              المعلومات البنكية
              <FaAngleDown />
            </li>

            {!openMain10 && (
              <ul className="ulAuth">
                <li>العلاوات</li>
                <li>الخصومات</li>
              </ul>
            )}
          </ul>

          <ul>  
            <li className="ulMain" onClick={() => setOpenMain7(!openMain7)}>
              <FaFileInvoiceDollar style={{marginLeft:'13px'}} />
              العلاوات والخصومات
              <FaAngleDown />
            </li>

            {!openMain7 && (
              <ul className="ulAuth">
                <li>العلاوات</li>
                <li>الخصومات</li>
              </ul>
            )}
          </ul>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain8(!openMain8)}>
              <FaMoneyCheckAlt style={{marginLeft:'-18px'}} />
              قسائم الرواتب
              <FaAngleDown />
            </li>

            {!openMain8 && (
              <ul className="ulAuth">
                <li>جميع القسائم</li>
                <li>المعتمدة</li>
              </ul>
            )}
          </ul>

          <hr />

          {/* النظام */}
          <label className="LabelSide">إدارة النظام</label>

          <ul>
            <li className="ulMain" onClick={() => setOpenMain9(!openMain9)}>
              <FaTools style={{marginLeft:"-18px"}}/>
              عمليات النظام
              <FaAngleDown />
            </li>

            {!openMain9 && (
              <ul className="ulAuth">
                <li>السجلات</li>
                <li>الصلاحيات</li>
              </ul>
            )}
          </ul>

        </Nav>
      </div>

      {/* ===== Content ===== */}
      <div className={`content ${open ? "" : "full"}`}>
        <Navbar className=" navbar px-3 d-flex justify-content-between border-bottom" style={{backgroundColor:"#f1f3f5"}}>

          <div className="d-flex align-items-center">
            <button className="toggleBtn" onClick={() => setOpen(!open)}>
              ☰
            </button>

            <img
              src="/images/logo.png"
              alt="logo"
              style={{ width: 75, height: 75 }}
              className="ms-3"
            />

            {/* <button className="addEmployee ms-3">
              أضف موظف جديد
            </button> */}
              <NavLink to="/add-employee">
            <button
                className="btn addEmployee ms-3"
                style={{ fontSize: "13px", padding: "6px 10px" }}>
                  أضف موظف جديد
            </button>
            </NavLink>
          </div>

          <div className="d-flex align-items-center">
           <NavLink to="/auth/login"><FaSignOutAlt className="icons me-3" /></NavLink>
            <FaBell className="icons me-3" />
            <FaMessage className="icons me-3" />

            <img
              src="/images/employee-02.jpg"
              alt="user"
              className="userImg"
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",}}/>
            
          </div>
          
        </Navbar>

        <div className="p-4">
          {children}
        </div>
        
      </div>
    </div>
  );
}

export default SideBar;
