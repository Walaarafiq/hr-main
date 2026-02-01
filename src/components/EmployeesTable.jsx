// EmployeesTable.jsx
import React, { useState, useEffect, useMemo } from "react";
import EditEmpWizard from "../components/EditEmpWizard";
import EditEmployeesForm from "../components/EditEmployeesForm";

function EmployeesTable({ employees, setEmployees }) {
  const [loading, setLoading] = useState(true);
  const [showWizard, setShowWizard] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

   const employeesList = useMemo(() => {
    if (Array.isArray(employees)) return employees;
    if (employees?.data && Array.isArray(employees.data)) return employees.data;
    return [];
  }, [employees]);

  useEffect(() => {
    setCurrentPage(1);
    setLoading(false);
  }, [employeesList]);

  const totalPages = Math.ceil(employeesList.length / itemsPerPage);

  const currentData = employeesList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handleDelete = (emp) => {
    if (!window.confirm(`هل أنت متأكد من حذف الموظف ${emp.full_name}؟`)) return;
    setEmployees(prev =>
      Array.isArray(prev) ? prev.filter(e => e.id !== emp.id) : prev
    );
  };

  const handleShowWizard = async (emp) => {
    setShowWizard(true);
    setSelectedEmployee(null);
    setModalLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `https://darksalmon-anteater-608881.hostingersite.com/api/employees/${emp.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await res.json();
      setSelectedEmployee(data?.data || null);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء جلب بيانات الموظف");
      setShowWizard(false);
    } finally {
      setModalLoading(false);
    }
  };

  return (
    <div className="card mt-4">
      <div className="card-body">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>م</th>
              <th>الاسم الكامل</th>
              <th>التصنيف</th>
              <th>رقم الهوية</th>
              <th>رقم الموظف</th>
              <th>رقم الجوال</th>
              <th>تاريخ الميلاد</th>
              <th>الدائرة</th>
              <th>المسمى الوظيفي</th>
              <th>الإجراءات</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="10">جارٍ التحميل...</td>
              </tr>
            ) : currentData.length === 0 ? (
              <tr>
                <td colSpan="10">لا توجد بيانات</td>
              </tr>
            ) : (
              currentData.map((emp, index) => (
                <tr key={emp.id}>
                  <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                  <td>{emp.full_name}</td>
                  <td>{emp.employment_type_name}</td>
                  <td>{emp.national_id}</td>
                  <td>{emp.employee_number}</td>
                  <td>{emp.primary_phone}</td>
                  <td>{emp.birth_date?.split("T")[0]}</td>
                  <td>{emp.department_name}</td>
                  <td>{emp.work_detail?.job_title}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger me-1"
                      onClick={() => handleDelete(emp)}
                    >
                      🗑
                    </button>
                    <button
                      className="btn btn-sm btn-outline-primary me-1 mx-1"
                      onClick={() => {
                        setSelectedEmployee(emp);
                        setShowEditForm(true);
                      }}
                    >
                      ✏
                    </button>
                    <button
                      className="btn btn-sm btn-outline-warning"
                      onClick={() => handleShowWizard(emp)}
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
          <div className="d-flex justify-content-center mt-3">
            <button
              className="btn btn-outline-dark me-1"
              onClick={handlePrev}
              disabled={currentPage === 1}
            >
              السابق
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                className={`btn me-1 ${
                  page === currentPage ? "btn-dark" : "btn-outline-dark"
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="btn btn-outline-dark"
              onClick={handleNext}
              disabled={currentPage === totalPages}
            >
              التالي
            </button>
          </div>
        )}
      </div>

      {/* مودال العرض */}
      {showWizard && (
        <div className="modal-backdrop d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
          onClick={() => setShowWizard(false)}
        >
          <div className="modal-dialog modal-xl" onClick={e => e.stopPropagation()}>
            <div className="modal-content p-3">
              {modalLoading ? (
                <p>جارٍ التحميل...</p>
              ) : selectedEmployee ? (
                <EditEmpWizard employee={selectedEmployee} />
              ) : (
                <p>لا توجد بيانات</p>
              )}
              <div className="text-end mt-3">
                <button className="btn btn-secondary" onClick={() => setShowWizard(false)}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* مودال التعديل */}
      {showEditForm && selectedEmployee && (
        <div className="modal-backdrop d-flex justify-content-center align-items-center"
          style={{ background: "white" }}
          onClick={() => setShowEditForm(false)}
        >
          <div className="modal-dialog modal-xl" onClick={e => e.stopPropagation()}>
            <div className="modal-content p-3">
              <EditEmployeesForm
                employee={selectedEmployee}
                onSave={(updatedEmp) => {
                  setEmployees(prev =>
                    Array.isArray(prev)
                      ? prev.map(emp =>
                          emp.id === updatedEmp.id ? updatedEmp : emp
                        )
                      : prev
                  );
                  setShowEditForm(false);
                }}
              />
              <div className="text-end mt-3">
                <button className="btn btn-secondary" onClick={() => setShowEditForm(false)}>
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeesTable;
