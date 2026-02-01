import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function TrainingHeader({ title, desc, onAddProject }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    type: "",
    category: "",
    courseName: "",
    targetAudience: "",
    funder: "",
    duration: "",
    startDate: "",
    endDate: "",
    mode: "",
    location: "",
    content: "",
    otherDetails: "",
  });

  const handleSave = () => {
    if (!newCourse.courseName) {
      alert("يرجى إدخال اسم الدورة/الورشة *");
      return;
    }
    onAddProject(newCourse);
    setShowAddModal(false);
    setNewCourse({
      type: "",
      category: "",
      courseName: "",
      targetAudience: "",
      funder: "",
      duration: "",
      startDate: "",
      endDate: "",
      mode: "",
      location: "",
      content: "",
      otherDetails: "",
    });
  };

  return (
    <>
      <div className="employees-header d-flex justify-content-between align-items-center">
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</h4>
          <p style={{ fontSize: "14px" }}>{desc}</p>
        </div>

        <div className="d-flex gap-2">
          <Link
            to="/temporary-contrast-employees"
            className="btn btn-outline-warning"
            style={{ fontSize: "13px" }}>
           الفلاتر المتقدمة
          </Link>

          <button
            className="btn btn-dark"
            style={{ fontSize: "13px" }}
            onClick={() => setShowAddModal(true)}>
            إضافة دورة جديدة
          </button>
        </div>
      </div>

      <div className="d-flex">
        <Card className="shadow-sm h-100 cardEmp col-2 mx-2 mt-2">
          <Card.Header className="cardHeader">إجمالي الدورات</Card.Header>
          <Card.Body className="d-flex align-items-center" style={{ minHeight: "60px", textAlign:'right', color:'grey' }}>
            4
          </Card.Body>
        </Card>
        <Card className="shadow-sm h-100 cardEmp col-2 mx-1 mt-2">
          <Card.Header className="cardHeader">إجمالي المشرفين</Card.Header>
          <Card.Body className="d-flex align-items-center" style={{ minHeight: "60px", textAlign:'right', color:'grey' }}>
            0
          </Card.Body>
        </Card>
        <Card className="shadow-sm h-100 cardEmp col-2 mx-2 mt-2">
          <Card.Header className="cardHeader">أجمالي المشاركين</Card.Header>
          <Card.Body className="d-flex align-items-center" style={{ minHeight: "60px", textAlign:'right', color:'grey' }}>
            3
          </Card.Body>
        </Card>
      </div>

      {showAddModal && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "#fff", padding: "20px", borderRadius: "8px",
            width: "95%", maxWidth: "1000px", maxHeight: "90%", overflowY: "auto"
          }}>
            <h5 className="mb-3 bold" style={{fontWeight:"bold",paddingTop:'20px'}}>إضافة دورة/ورشة جديدة</h5>
          <hr></hr>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px"
            }}>
              {/* Dropdown نوع الدورة */}
              <div>
                <label className="form-label">نوع الدورة/الورشة</label>
                <select
                  className="form-select"
                  value={newCourse.type}
                  onChange={(e) => setNewCourse({ ...newCourse, type: e.target.value })}>
                  <option value="">اختر النوع</option>
                  <option value="دورة">دورة</option>
                  <option value="ورشة">ورشة</option>
                </select>
              </div>

              <div>
                <label className="form-label">تصنيف الدورة/الورشة</label>
                <select
                  className="form-select"
                  value={newCourse.category}
                  onChange={(e) => setNewCourse({ ...newCourse, category: e.target.value })}>
                  <option value="">اختر التصنيف</option>
                  <option value="إداري">إداري</option>
                  <option value="فني">فني</option>
                  <option value="تطوير مهارات">تطوير مهارات</option>
                </select>
              </div>

              <div>
                <label className="form-label">اسم الدورة/الورشة *</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.courseName}
                  onChange={(e) => setNewCourse({ ...newCourse, courseName: e.target.value })}
                  required
                />
              </div>

              {/* الفئة المستهدفة */}
              <div>
                <label className="form-label">الفئة المستهدفة</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.targetAudience}
                  onChange={(e) => setNewCourse({ ...newCourse, targetAudience: e.target.value })}
                />
              </div>

              {/* الجهة الممولة */}
              <div>
                <label className="form-label">الجهة الممولة</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.funder}
                  onChange={(e) => setNewCourse({ ...newCourse, funder: e.target.value })}
                />
              </div>

              {/* مدة الدورة */}
              <div>
                <label className="form-label">مدة الدورة</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.duration}
                  onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                />
              </div>

              {/* تاريخ البداية */}
              <div>
                <label className="form-label">تاريخ البداية</label>
                <input
                  type="date"
                  className="form-control"
                  value={newCourse.startDate}
                  onChange={(e) => setNewCourse({ ...newCourse, startDate: e.target.value })}
                />
              </div>

              {/* تاريخ النهاية */}
              <div>
                <label className="form-label">تاريخ النهاية</label>
                <input
                  type="date"
                  className="form-control"
                  value={newCourse.endDate}
                  onChange={(e) => setNewCourse({ ...newCourse, endDate: e.target.value })}
                />
              </div>

              {/* آلية الانعقاد */}
              <div>
                <label className="form-label">آلية الانعقاد</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.mode}
                  onChange={(e) => setNewCourse({ ...newCourse, mode: e.target.value })}
                />
              </div>

              {/* مكان الانعقاد */}
              <div>
                <label className="form-label">مكان الانعقاد</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCourse.location}
                  onChange={(e) => setNewCourse({ ...newCourse, location: e.target.value })}
                />
              </div>

              {/* محتوى الدورة */}
              <div style={{ gridColumn: "span 3" }}>
                <label className="form-label">محتوى الدورة</label>
                <textarea
                  className="form-control"
                  rows="3"
                  value={newCourse.content}
                  onChange={(e) => setNewCourse({ ...newCourse, content: e.target.value })}
                />
              </div>

              {/* تفاصيل أخرى */}
              <div style={{ gridColumn: "span 3" }}>
                <label className="form-label">تفاصيل أخرى</label>
                <textarea
                  className="form-control"
                  rows="2"
                  value={newCourse.otherDetails}
                  onChange={(e) => setNewCourse({ ...newCourse, otherDetails: e.target.value })}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
              <button className="btn btn-secondary me-2 mx-1" onClick={() => setShowAddModal(false)}>إغلاق</button>
              <button className="btn btn-dark" onClick={handleSave}>حفظ</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TrainingHeader;
