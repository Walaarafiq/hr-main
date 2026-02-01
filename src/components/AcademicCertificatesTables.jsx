import React, { useState, useEffect } from "react";

function AcademicCertifcatesTables() {
  const initialEmployees = [
    { id: 1, GovName: "-", EmpNum: "", Certificate: "", state: "", info: "", date: "" },
];

  const [employees, setEmployees] = useState(initialEmployees);
  const [currentPage, setCurrentPage] = useState(1);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ GovName: "", EmpNum: "", Certificate: "", state: "", info: "", date: "" });

  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentData = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (editItem) {
      setForm({
        GovName: editItem.GovName,
        EmpNum: editItem.EmpNum,
        Certificate: editItem.Certificate,
        state: editItem.state,
        info: editItem.info,
        date: editItem.date,
      });
    }
  }, [editItem]);

  const handleDelete = (id) => {
    const emp = employees.find((e) => e.id === id);
    if (window.confirm(`هل أنت متأكد أنك تريد حذف "${emp.GovName}"؟`)) {
      setEmployees((prev) => prev.filter((e) => e.id !== id));
    }
  };

  const handleSaveEdit = () => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === editItem.id ? { ...emp, ...form } : emp
      )
    );
    setShowEditModal(false);
    setEditItem(null);
  };

  const handlePrev = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
  const handleNext = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <table className="table table-bordered text-center align-middle" style={{ fontSize: "14px" }}>
            <thead className="table-light">
              <tr>
                <th>م</th>
                <th>إسم الموظف</th>
                <th>الشهادة</th>
                <th>الحالة</th>
                <th>الملاحظات</th>
                <th>تاريخ الرفع</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{emp.GovName}</td>
                  <td>{emp.Certificate}</td>
                  <td>{emp.state}</td>
                  <td>{emp.info}</td>
                  <td>{emp.date}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger me-2 mx-1" onClick={() => handleDelete(emp.id)}>🗑</button>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => { setEditItem(emp); setShowEditModal(true); }}>✏</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <button className="btn btn-outline-dark me-1" onClick={handlePrev} disabled={currentPage === 1}>&lt; السابق</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} className={`btn me-1 ${page === currentPage ? 'btn-dark' : 'btn-outline-dark'}`} onClick={() => setCurrentPage(page)}>{page}</button>
            ))}
            <button className="btn btn-outline-dark me-1" onClick={handleNext} disabled={currentPage === totalPages}>التالي &gt;</button>
          </div>
        </div>
      </div>

      {showEditModal && (
        <div style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}>
          <div style={{ background: "#fff", padding: 20, borderRadius: 8, width: 400 }}>
            <h5>تعديل البيانات</h5>

            <div className="mb-2">
              <label className="form-label">إسم الموظف</label>
              <input className="form-control" value={form.GovName} onChange={(e) => setForm({ ...form, GovName: e.target.value })} />
            </div>

            <div className="mb-2">
              <label className="form-label">الشهادة</label>
              <input className="form-control" value={form.Certificate} onChange={(e) => setForm({ ...form, Certificate: e.target.value })} />
            </div>

            <div className="mb-2">
              <label className="form-label">الحالة</label>
              <input className="form-control" value={form.state} onChange={(e) => setForm({ ...form, state: e.target.value })} />
            </div>

            <div className="mb-2">
              <label className="form-label">الملاحظات</label>
              <input className="form-control" value={form.info} onChange={(e) => setForm({ ...form, info: e.target.value })} />
            </div>

            <div className="mb-2">
              <label className="form-label">تاريخ الرفع</label>
              <input className="form-control" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>إلغاء</button>
              <button className="btn btn-dark" onClick={handleSaveEdit}>حفظ</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AcademicCertifcatesTables;