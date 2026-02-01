import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function EditEmpWizard({ employee }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!employee) return <p>لا توجد بيانات للعرض</p>;

  const steps = [
    {
      title: <div className="headerOfCard"><p>بيانات الموظف الأساسية</p></div>,
      content: (
        <div className="row g-3 cardValue" style={{ textAlign: "right" }}>
          {[
            { label: "الإسم الكامل", value: employee.full_name || "-" },
            { label: "رقم الهوية", value: employee.national_id || "-" },
            { label: "الرقم الوظيفي", value: employee.employee_number || "-" },
            { label: "رقم الجوال الأساسي", value: employee.primary_phone || "-" },
            { label: "رقم الجوال البديل", value: employee.secondary_phone || "-" },
            { label: "تاريخ الميلاد", value: employee.birth_date?.split("T")[0] || "-" },
            { label: "الجنس", value: employee.gender || "-" },
            { label: "الحالة الاجتماعية", value: employee.marital_status || "-" },
            { label: "المحافظة", value: employee.governorate?.name || "-" },
            { label: "المدينة", value: employee.city?.name || "-" },
            { label: "عنوان السكن", value: employee.address || "-" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <Card className="shadow-sm h-100 cardEmp">
                <Card.Header className="cardHeader">{item.label}</Card.Header>
                <Card.Body
                  className="d-flex align-items-center"
                  style={{ minHeight: "60px", textAlign: "right", color: "grey" }}
                >
                  {item.value}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: <div className="headerOfCard">البيانات التنظيمية</div>,
      content: (
        <div className="row g-3 cardValue" style={{ textAlign: "right" }}>
          {[
            { label: "الوزارة", value: employee.department_name || "-" },
            { label: "الإدارة العامة", value: employee.work_detail?.division || "-" },
            { label: "الدائرة", value: employee.department_name || "-" },
            { label: "القسم", value: employee.department_name || "-" },
            { label: "الشعبة", value: employee.work_detail?.section || "-" },
            { label: "الوحدة", value: employee.work_detail?.unit || "-" },
            { label: "المكتب الفرعي", value: employee.work_detail?.sub_office || "-" },
            { label: "المعبر", value: employee.work_detail?.crossing || "-" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <Card className="shadow-sm h-100 cardEmp">
                <Card.Header className="cardHeader">{item.label}</Card.Header>
                <Card.Body
                  className="d-flex align-items-center"
                  style={{ minHeight: "60px", textAlign: "right", color: "grey" }}
                >
                  {item.value}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: <div className="headerOfCard">البيانات الوظيفية</div>,
      content: (
        <div className="row g-3 cardValue" style={{ textAlign: "right" }}>
          {[
            { label: "المسمى الوظيفي", value: employee.work_detail?.job_title || "-" },
            { label: "الحالة الوظيفية", value: employee.work_detail?.job_status || "-" },
            { label: "نوع التوظيف", value: employee.employment_type_name || "-" },
            { label: "البرنامج", value: employee.work_detail?.program || "-" },
            { label: "العقد", value: employee.contract?.name || "-" },
            { label: "تاريخ التعيين", value: employee.date_of_appointment?.split("T")[0] || "-" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-3">
              <Card className="shadow-sm h-100 cardEmp">
                <Card.Header className="cardHeader">{item.label}</Card.Header>
                <Card.Body
                  className="d-flex align-items-center"
                  style={{ minHeight: "60px", textAlign: "right", color: "grey" }}
                >
                  {item.value}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: <div className="headerOfCard">البيانات المالية</div>,
      content: (
        <div className="row g-3 cardValue" style={{ textAlign: "right" }}>
          {[
            { label: "البنك", value: employee.bank?.name || "-" },
            { label: "رقم الحساب البنكي", value: employee.bank_account_number || "-" },
            { label: "الأيبان", value: employee.bank_iban || "-" },
          ].map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4">
              <Card className="shadow-sm h-100 cardEmp">
                <Card.Header className="cardHeader">{item.label}</Card.Header>
                <Card.Body
                  className="d-flex align-items-center"
                  style={{ minHeight: "60px", textAlign: "right", color: "grey" }}
                >
                  {item.value}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container my-3" style={{ height: "600px", paddingTop:"50px" }}>
      <h4 className="employeeName">{employee.full_name}</h4>
      <p className="employeeRole" style={{marginTop:"-40px"}}>{employee.work_detail?.job_title || "-"}</p>
      <div className="d-flex flex-wrap justify-content-center mb-4 overflow-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-4 py-2 me-3 mb-2 border-bottom ${
              activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"
            }`}
            style={{
              cursor: "pointer",
              minWidth: "150px",
              textAlign: "center",
              borderRadius: "5px",
            }}
          >
            {step.title}
          </div>
        ))}
      </div>

      <div className="p-4 border rounded shadow-sm">{steps[activeStep].content}</div>
    </div>
  );
}

export default EditEmpWizard;
