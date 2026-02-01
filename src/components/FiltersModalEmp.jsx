import { useState } from "react";

function FiltersModalEmp({ onClose, onApply }) {
  const [type, setType] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2000
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "1000px",
          direction: "rtl"
        }}
      >
        <h5 className="" style={{ marginBottom: "15px", fontWeight: "bold" ,color:'#002F6C'}}>
          الفلاتر المتقدمة
        </h5>
        <hr></hr>
        <div className="row g-3 mt-3">
          <div className="col-md-3">
            <label className="form-label">الإسم الكامل</label>
             <input
            type="text"
            className="form-control"
            placeholder="اكتب هنا"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">رقم الهوية</label>
             <input
            type="text"
            className="form-control"
            placeholder="اكتب هنا"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">الرقم الوظيفي</label>
           <input
            type="text"
            className="form-control"
            placeholder="اكتب هنا"
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">الوزارة</label>
            <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
              <option value="">الكل</option>
              <option value="رسمي">رسمي</option>
              <option value="عقد">عقد</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">المكاتب الفرعية</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الإدارة العامة</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الدائرة</label>
            <input
              className="form-control"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder="اسم الدائرة"
            />
          </div>

          <div className="col-md-3">
            <label className="form-label">القسم</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الشعبة</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الوحدة</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">المعبر</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">المسمى الوظيفي</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الحالة الوظيفية</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">نوع الموظف</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">البرنامج</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">التصنيف</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الفئة</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">الدرجة</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

          <div className="col-md-3">
            <label className="form-label">المؤهل العلمي</label>
            <select className="form-select">
              <option value="">الكل</option>
            </select>
          </div>

        </div>

        <div className="d-flex justify-content-between mt-4">
          <button className="btn btn-outline-secondary" onClick={onClose} style={{color:'#002F6C'}}>
            إلغاء
          </button>

          <button
            className="btn btn-dark"
            onClick={() =>
              onApply({
                type,
                department
              })
            }
            style={{backgroundColor:'#002F6C',color:'white'}}
          >
            تطبيق الفلاتر
          </button>
        </div>
      </div>
    </div>
  );
}

export default FiltersModalEmp;
