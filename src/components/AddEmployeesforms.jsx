import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const steps = [
  { title: "بيانات الموظف الأساسية", contentKey: "basic" },
  { title: "البيانات التنظيمية", contentKey: "org" },
  { title: "البيانات الوظيفية", contentKey: "job" },
  { title: "البيانات المهنية", contentKey: "prof" },
  { title: "البيانات المالية", contentKey: "finance" },
  { title: "مراجعة وإنهاء", contentKey: "review" },
];

const fields = {
  basic: [
    { label: "الإسم الأول", type: "text", key: "first_name" },
    { label: "إسم الأب", type: "text", key: "second_name" },
    { label: "إسم الجد", type: "text", key: "third_name" },
    { label: "إسم العائلة", type: "text", key: "family_name" },
    { label: "الرقم الوظيفي", type: "number", key: "employee_number" },
    { label: "تاريخ الميلاد", type: "date", key: "birth_date" },
    { label: "الجنس", type: "select", options: ["ذكر", "أنثى"], key: "gender" },
    { label: "الحالة الإجتماعية", type: "select", options: ["متزوج", "منفصل"], key: "marital_status" },
    { label: "رقم الجوال", type: "number", key: "primary_phone" },
    { label: "رقم الجوال البديل", type: "number", key: "secondary_phone" },
    { label: "رقم الهوية", type: "number", key: "national_id" },
    { label: "تاريخ التعيين", type: "date", key: "date_of_appointment" },
    { label: "المحافظة", type: "select", options: ["غزة", "خانيونس", "رفح"], key: "governorate_id" },
    { label: "المدينة", type: "select", options: ["غزة", "الوسطى", "خان يونس"], key: "city_id" },
    { label: "عنوان السكن بالتفصيل", type: "text", key: "address" },
  ],
  org: [
    { label: "الوزارة", type: "select", options: ["وزارة الداخلية", "وزارة التعليم"], key: "ministry" },
    { label: "الإدارة العامة", type: "select", options: ["إدارة الموارد البشرية", "إدارة المالية"], key: "directorate" },
    { label: "الوحدة", type: "select", options: ["الوحدة أ", "الوحدة ب"], key: "unit" },
    { label: "المعبر", type: "select", options: ["معبر رفح", "معبر كرم أبو سالم"], key: "transporter" },
    { label: "الدائرة", type: "select", options: ["دائرة 1", "دائرة 2"], key: "circle" },
    { label: "القسم", type: "select", options: ["القسم أ", "القسم ب"], key: "department" },
    { label: "الشعبة", type: "select", options: ["الشعبة أ", "الشعبة ب"], key: "division" },
    { label: "مكان العمل", type: "select", options: ["مكتب غزة", "مكتب خان يونس"], key: "workplace" },
  ],
  job: [
    { label: "المسمى الوظيفي", type: "select", options: ["رسمي", "عقد"], key: "job_title" },
    { label: "الحالة الوظيفية", type: "select", options: ["نشط", "مستقيل"], key: "job_status" },
    { label: "البرنامج", type: "select", options: ["برنامج أ", "برنامج ب"], key: "program" },
    { label: "سلم الرواتب", type: "select", options: ["الدرجة 1", "الدرجة 2"], key: "salary_scale" },
  ],
  prof: [
    { label: "التصنيف", type: "select", options: ["رسمي", "عقد"], key: "classification" },
    { label: "الفئة", type: "select", options: ["أ", "ب"], key: "category" },
    { label: "الدرجة الوظيفية", type: "select", options: ["1", "2"], key: "job_grade" },
    { label: "الأقدمية", type: "select", options: ["5 سنوات", "10 سنوات"], key: "seniority" },
    { label: "المؤهل العلمي", type: "select", options: ["بكالوريوس", "ماجستير"], key: "qualification" },
    { label: "خدمة فعلية", type: "select", options: ["2 سنوات", "5 سنوات"], key: "actual_service" },
    { label: "ترقية", type: "select", options: ["أولية", "ثانوية"], key: "promotion" },
    { label: "لأغراض الراتب", type: "select", options: ["أساسي", "مكمل"], key: "salary_purpose" },
    { label: "التجزئة", type: "select", options: ["جزئي", "كامل"], key: "segment" },
  ],
  finance: [
    { label: "إسم البنك", type: "select", options: ["بنك فلسطين", "بنك العربي"], key: "bank_name" },
    { label: "رقم الحساب", type: "number", key: "account_number" },
    { label: "الأيبان", type: "text", key: "iban" },
  ],
};

function AddEmployeesforms() {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
  try {
    const payload = { ...formData };
    Object.keys(payload).forEach(key => {
      if (payload[key] instanceof Date) payload[key] = payload[key].toISOString().split("T")[0];
    });

    const token = localStorage.getItem("token");
    const res = await fetch("https://darksalmon-anteater-608881.hostingersite.com/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(payload),
    });

    const text = await res.text(); // بدل res.json()، نطبع النص الخام
    console.log("Response status:", res.status);
    console.log("Response text:", text);

    if (res.ok) {
      setMessage("تم إضافة الموظف بنجاح!");
      setFormData({});
      setActiveStep(0);
    } else {
      setMessage("حدث خطأ: " + text);
    }
  } catch (err) {
    console.error(err);
    setMessage("حدث خطأ أثناء الإرسال");
  }
};


  const renderFields = (stepKey) => (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
      {fields[stepKey]?.map((field, i) => (
        <div key={i} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{field.label}</div>
            <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
              {field.type === "select" ? (
                <select
                  className="inputEmpInfo"
                  value={formData[field.key] || ""}
                  onChange={e => handleChange(field.key, e.target.value)}
                >
                  <option value="">اختر</option>
                  {field.options.map((opt, idx) => <option key={idx} value={opt}>{opt}</option>)}
                </select>
              ) : field.type === "date" ? (
                <DatePicker
                  selected={formData[field.key] || null}
                  onChange={date => handleChange(field.key, date)}
                  dateFormat="yyyy/MM/dd"
                  className="inputEmpInfo"
                  placeholderText="yyyy / mm / dd"
                  wrapperClassName="w-100"
                  popperPlacement="bottom-end"
                  calendarStartDay={6}
                />
              ) : (
                <input
                  type={field.type}
                  className="inputEmpInfo"
                  value={formData[field.key] || ""}
                  onChange={e => handleChange(field.key, e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-5" style={{ height: "650px", width: "100%" }}>
      <h4 className="employeeName" style={{ marginBottom: "20px" }}>تسجيل موظف جديد</h4>

      <div className="d-flex flex-wrap overflow-auto mb-4">
        {steps.map((step, i) => (
          <div
            key={i}
            onClick={() => setActiveStep(i)}
            className={`px-3 py-1 me-3 mb-2 border-bottom ${
              activeStep === i ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"
            }`}
            style={{ cursor: "pointer", minWidth: "100px", textAlign: "center" }}
          >
            {step.title}
          </div>
        ))}
      </div>

      <div className="p-4 border rounded shadow-sm">
        {steps[activeStep].contentKey === "review" ? (
          <div>
            <p>يرجى مراجعة جميع البيانات قبل الإرسال.</p>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        ) : (
          renderFields(steps[activeStep].contentKey)
        )}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button
          onClick={() => setActiveStep(prev => Math.max(prev - 1, 0))}
          disabled={activeStep === 0}
          className="btn btn-outline-secondary"
        >
          العودة
        </button>

        {activeStep === steps.length - 1 ? (
          <button className="btn btn-success" onClick={handleSubmit}>
            حفظ
          </button>
        ) : (
          <button
            onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length - 1))}
            className="btn btn-primary"
          >
            التالي
          </button>
        )}
      </div>

      {message && <p style={{ marginTop: "10px" }}>{message}</p>}
    </div>
  );
}

export default AddEmployeesforms;
