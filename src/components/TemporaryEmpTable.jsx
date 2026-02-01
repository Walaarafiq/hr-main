import React, { useState, useEffect } from "react";
import EditEmpWizard from "../components/EditEmpWizard";
import EditEmployeesForm from "../components/EditEmployeesForm";

function TemporaryEmpTable() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showWizard, setShowWizard] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("token"); // إذا في توكن
        const res = await fetch(
          "https://darksalmon-anteater-608881.hostingersite.com/api/temp-contract-employees",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setEmployees(data.data || []);
      } catch (err) {
        console.error(err);
        alert("حدث خطأ أثناء جلب البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchEmployees();
  }, []);

  const totalPages = Math.ceil(employees.length / itemsPerPage);
  const currentData = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  const handleNext = () => currentPage < totalPages && setCurrentPage(currentPage + 1);

  const handleDelete = (empId) => {
    const emp = employees.find((e) => e.row_number === empId);
    if (window.confirm(`هل أنت متأكد أنك تريد حذف "${emp.full_name}"؟`)) {
      setEmployees((prev) => prev.filter((e) => e.row_number !== empId));
    }
  };

  return (
    <>
      <div className="card mt-4" style={{ overflow: "visible" }}>
        <div className="card-body">
          <table className="table table-bordered text-center align-middle">
            <thead className="table-light" style={{ fontSize: "14px" }}>
              <tr>
                <th>م</th>
                <th>الاسم الكامل</th>
                <th>رقم الهوية</th>
                <th>رقم الجوال</th>
                <th>تاريخ الميلاد</th>
                <th>المشروع</th>
                <th>طبيعة العمل</th>
                <th>بداية العقد</th>
                <th>الإجراءات</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "13px" }}>
              {loading ? (
                <tr>
                  <td colSpan="9">جارٍ التحميل...</td>
                </tr>
              ) : currentData.length === 0 ? (
                <tr>
                  <td colSpan="9">لا توجد بيانات</td>
                </tr>
              ) : (
                currentData.map((emp, index) => (
                  <tr key={emp.row_number}>
                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td>{emp.full_name}</td>
                    <td>{emp.national_id}</td>
                    <td>{emp.primary_phone}</td>
                    <td>{emp.birth_date}</td>
                    <td>{emp.project_name}</td>
                    <td>{emp.position_type}</td>
                    <td>{emp.start_contract_date}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-danger me-2"
                        onClick={() => handleDelete(emp.row_number)}
                      >
                        🗑
                      </button>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => { setSelectedEmployee(emp); setShowEditForm(true); }}
                      >
                        ✏
                      </button>
                      <button
                        className="btn btn-sm btn-outline-warning me-2"
                        onClick={() => { setSelectedEmployee(emp); setShowWizard(true); }}
                      >
                        👁
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {!loading && totalPages > 1 && (
            <div className="d-flex justify-content-center align-items-center mt-3">
              <button className="btn btn-outline-dark me-1" onClick={handlePrev} disabled={currentPage === 1}>
                &lt; السابق
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`btn me-1 ${page === currentPage ? "btn-dark" : "btn-outline-dark"}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="btn btn-outline-dark me-1" onClick={handleNext} disabled={currentPage === totalPages}>
                التالي &gt;
              </button>
            </div>
          )}
        </div>
      </div>

      {/* مودال العين */}
      {showWizard && (
        <div
          className="modal-backdrop"
          onClick={() => setShowWizard(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "90%",
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            <EditEmpWizard employee={selectedEmployee} />
            <button className="btn btn-danger mt-2" onClick={() => setShowWizard(false)}>
              إغلاق
            </button>
          </div>
        </div>
      )}

      {showEditForm && selectedEmployee && (
        <div
          className="modal-backdrop"
          onClick={() => setShowEditForm(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "90%",
              maxHeight: "100%",
              overflowY: "auto",
            }}
          >
            <EditEmployeesForm employee={selectedEmployee} />
            <button className="btn btn-danger mt-2" onClick={() => setShowEditForm(false)}>
              إغلاق
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TemporaryEmpTable;
