import React, { useState } from "react";

function TypeOfEmpTable() {
  const initialEmployees = [
    { id: 1, GovName: "رسمي", EmpNum: "974334252" },
    { id: 2, GovName: "رسمي في حكومة أخرى", EmpNum: "974334252" },
    { id: 3, GovName: "عقد تشغيل", EmpNum: "974334252" },
    { id: 4, GovName: "عقد تشغيل في حكومة أخرى", EmpNum: "974334252" },
    { id: 5, GovName: "لا يمتلك قيمة", EmpNum: "974334252" },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEdit, setIsEdit] = useState(false); // هل المودال للتعديل؟
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentData = employees.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePrev = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
  const handleNext = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };

  const handleDelete = (empId) => {
    const emp = employees.find(e => e.id === empId);
    if (window.confirm(`هل أنت متأكد أنك تريد حذف الموظف "${emp.GovName}"؟`)) {
      setEmployees(prev => prev.filter(e => e.id !== empId));
    }
  };

  const openViewModal = (emp) => {
    setSelectedEmployee(emp);
    setIsEdit(false);
    setShowModal(true);
  };

  const openEditModal = (emp) => {
    setSelectedEmployee(emp);
    setIsEdit(true);
    setShowModal(true);
  };

  const handleSave = () => {
    setEmployees(prev =>
      prev.map(emp => emp.id === selectedEmployee.id ? selectedEmployee : emp)
    );
    setShowModal(false);
  };

  return (
    <>
      <div className="card mt-4" style={{ overflow: 'visible' }}>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light" style={{ fontSize: "14px" }}>
              <tr>
                <th>م</th>
                <th>الوزارة</th>
                <th>عدد الموظفين</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "13px" }}>
              {currentData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{emp.GovName}</td>
                  <td>{emp.EmpNum}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(emp.id)}>🗑</button>
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openEditModal(emp)}>✏</button>
                    <button className="btn btn-sm btn-outline-warning me-2" onClick={() => openViewModal(emp)}>👁</button>
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

      {/* المودال */}
      {showModal && selectedEmployee && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(128,128,128,0.5)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "10px",
            width: "600px",
            maxHeight: "90%",
            overflowY: "auto"
          }}>
            <h5>{isEdit ? "تعديل بيانات الموظف" : "عرض بيانات الموظف"}</h5>
            <div className="mb-3">
              <label className="form-label">الوزارة</label>
              <input
                type="text"
                className="form-control"
                value={selectedEmployee.GovName}
                onChange={(e) => isEdit && setSelectedEmployee({ ...selectedEmployee, GovName: e.target.value })}
                disabled={!isEdit}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">عدد الموظفين</label>
              <input
                type="text"
                className="form-control"
                value={selectedEmployee.EmpNum}
                onChange={(e) => isEdit && setSelectedEmployee({ ...selectedEmployee, EmpNum: e.target.value })}
                disabled={!isEdit}
              />
            </div>
            <div className="d-flex justify-content-end">
              <button className="btn btn-secondary me-2 mx-1" onClick={() => setShowModal(false)}>إغلاق</button>
              {isEdit && <button className="btn btn-primary" onClick={handleSave}>حفظ</button>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TypeOfEmpTable;
