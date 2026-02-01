import React, { useState } from "react";
import EditEmpWizard from "../components/EditEmpWizard";

function GovermentsTable({ employees, setEmployees }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editEmployeeData, setEditEmployeeData] = useState(null);

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
    setShowViewModal(true);
  };

  const openEditModal = (emp) => {
    setEditEmployeeData({ ...emp }); // عمل نسخة للتعديل
    setShowEditModal(true);
  };

  const saveEdit = () => {
    if (!editEmployeeData) return;
    setEmployees(prev =>
      prev.map(e => e.id === editEmployeeData.id ? editEmployeeData : e)
    );
    setShowEditModal(false);
  };

  const handleEditChange = (field, value) => {
    setEditEmployeeData(prev => ({ ...prev, [field]: value }));
  };

  const ModalWrapper = ({ children, onClose }) => (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, backgroundColor: "rgba(200,200,200,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        backgroundColor: "#fff", padding: "30px", borderRadius: "10px",
        maxWidth: "700px", width: "90%", maxHeight: "90%", overflowY: "auto",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)"
      }}>
        {children}
      </div>
    </div>
  );

  return (
    <>
      <div className="card mt-4" style={{ overflow: 'visible' }}>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light" style={{ fontSize: "14px" }}>
              <tr>
                <th>م</th>
                <th>القيمة</th>
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

      {showViewModal && selectedEmployee && (
        <ModalWrapper onClose={() => setShowViewModal(false)}>
          <h5 className="mb-3">عرض بيانات الموظف</h5>
          <hr></hr>
          <p><strong>القيمة:</strong> {selectedEmployee.GovName}</p>
          <br></br>
          <p><strong>عدد الموظفين:</strong> {selectedEmployee.EmpNum}</p>
          <div className="text-end">
            <button className="btn btn-secondary mt-3" onClick={() => setShowViewModal(false)}>إغلاق</button>
          </div>
        </ModalWrapper>
      )}

      {/* مودال التعديل */}
      {showEditModal && editEmployeeData && (
        <ModalWrapper onClose={() => setShowEditModal(false)}>
          <h5 className="mb-3">تعديل بيانات الموظف</h5>
          <div className="mb-3">
            <label className="form-label">القيمة:</label>
            <input
              className="form-control"
              value={editEmployeeData.GovName}
              onChange={(e) => handleEditChange("GovName", e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">عدد الموظفين:</label>
            <input
              className="form-control"
              type="number"
              value={editEmployeeData.EmpNum}
              onChange={(e) => handleEditChange("EmpNum", e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-secondary me-2 mx-1" onClick={() => setShowEditModal(false)}>إلغاء</button>
            <button className="btn btn-primary" onClick={saveEdit}>حفظ</button>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}

export default GovermentsTable;
