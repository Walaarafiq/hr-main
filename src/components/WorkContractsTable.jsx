import React, { useState, useEffect } from "react";
import WorkContracts from "../pages/WorkContracts";

function WorkContractsTable() {
  const initialEmployees = [
    { id: 1, GovName: "عقد دائم ", EmpNum: "1 موظف" },
    { id: 2, GovName:"عقد غير معلوم", EmpNum: "10 موظفين" },
    { id: 3, GovName: "عقد متوقف", EmpNum: "3 موظفين" },
  ];

  const [employees, setEmployees] = useState(initialEmployees);
  const [currentPage, setCurrentPage] = useState(1);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [form, setForm] = useState({ GovName: "", EmpNum: "" });

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

  return (
    <>
      <div className="card mt-4">
        <div className="card-body">
          <table className="table table-bordered text-center align-middle" style={{ fontSize: "14px" }}>
            <thead className="table-light" style={{ fontSize: "14px" }}>
              <tr>
                <th>م</th>
                <th>القيمة</th>
                <th>عدد الموظفين</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{index + 1}</td>
                  <td>{emp.GovName}</td>
                  <td>{emp.EmpNum}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger me-2"
                      onClick={() => handleDelete(emp.id)}
                    >
                      🗑
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary mx-1"
                      onClick={() => {
                        setEditItem(emp);
                        setShowEditModal(true);
                      }}
                    >
                      ✏
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showEditModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 20,
              borderRadius: 8,
              width: 400,
            }}
          >
            <h5>تعديل القيمة</h5>

            <div className="mb-2">
              <label className="form-label">القيمة</label>
              <input
                className="form-control"
                value={form.GovName}
                onChange={(e) =>
                  setForm({ ...form, GovName: e.target.value })
                }
              />
            </div>

            <div className="mb-2">
              <label className="form-label">عدد الموظفين</label>
              <input
                className="form-control"
                value={form.EmpNum}
                onChange={(e) =>
                  setForm({ ...form, EmpNum: e.target.value })
                }
              />
            </div>

            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-secondary"
                onClick={() => setShowEditModal(false)}
              >
                إلغاء
              </button>
              <button className="btn btn-dark" onClick={handleSaveEdit}>
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default WorkContractsTable;