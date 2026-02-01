import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const steps = [
  {
    title: <div className="headerOfCard1"><p>بيانات الموظف الأساسية</p></div>,
    content: (
      <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد موقع الموظف داخل المستوى الإداري</p>
        {[
          { label: "الإسم الأول", type: "text" },
          { label: "إسم الأب", type: "text" },
          { label: "رقم الهوية", type: "number" },
          { label: "الرقم الوظيفي", type: "number" },
          { label: "تاريخ التعيين", type: "date" },
          { label: "الجنس", type: "select", options: ["رسمي", "عقد"] },
          { label: "الحالة الإجتماعية", type: "select", options: ["متزوج", "منفصل"] },
          { label: "رقم الجوال", type: "number" },
          { label: "رقم الجوال البديل", type: "number" },
          { label: "تاريخ الميلاد", type: "date" },
          { label: "المحافظة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "المدينة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "عنوان السكن بالتفصيل", type: "text" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="h-100 cardEmp1">
              <div className="cardHeader1">{item.label}</div>
              <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
                {item.type === "select" ? (
                  <select className="inputEmpInfo">
                    <option value="">اختر</option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : item.type === "date" ? (
                  <DatePicker
                    dateFormat="yyyy/MM/dd"
                    placeholderText="yyyy / mm / dd"
                    className="inputEmpInfo"
                    wrapperClassName="w-100"
                    popperPlacement="bottom-end"
                    calendarStartDay={6}
                  />
                ) : (
                  <input type={item.type} className="inputEmpInfo" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard1"><p>البيانات التنظيمية</p></div>,
    content: (
      <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد موقع الموظف داخل المستوى الإداري</p>
        {[
          { label: "الوزارة", type: "select", options: ["رسمي", "عقد"] },
          { label: "الإدارة العامة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "الوحدة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "المعبر", type: "select", options: ["متزوج", "منفصل"] },
          { label: "الدائرة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "القسم", type: "select", options: ["متزوج", "منفصل"] },
          { label: "الشعبة", type: "select", options: ["متزوج", "منفصل"] },
          { label: "مكان العمل", type: "select", options: ["متزوج", "منفصل"] },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="h-100 cardEmp1">
              <div className="cardHeader1">{item.label}</div>
              <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
                {item.type === "select" ? (
                  <select className="inputEmpInfo">
                    <option value="">اختر</option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input type={item.type} className="inputEmpInfo" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard1"><p>البيانات الوظيفية</p></div>,
    content: (
      <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>تحديد طبيعة الوظيفة ومسماها ومستواها الإداري</p>
        {[
          { label: "المسمى الوظيفي", type: "select", options: ["رسمي", "عقد"] },
          { label: "الحالة الوظيفية", type: "select", options: ["متزوج", "منفصل"] },
          { label: "البرنامج", type: "select", options: ["متزوج", "منفصل"] },
          { label: "سلم الرواتب", type: "select", options: ["متزوج", "منفصل"] },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="h-100 cardEmp1">
              <div className="cardHeader1">{item.label}</div>
              <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
                {item.type === "select" ? (
                  <select className="inputEmpInfo">
                    <option value="">اختر</option>
                    {item.options.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input type={item.type} className="inputEmpInfo" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard1"><p>البيانات المهنية</p></div>,
    content: (
      <div>
        {/* كل البيانات المهنية كما هي بدون حذف */}
      </div>
    ),
  },
  {
    title: <div className="headerOfCard1"><p>البيانات المالية</p></div>,
    content: (
      <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
        <p>إدخال بيانات الموظف البنكية</p>
        {[
          { label: "إسم البنك", type: "select", options: ["رسمي", "عقد"] },
          { label: "رقم الحساب", type: "number" },
          { label: "الأيبان", type: "text" },
        ].map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-3">
            <div className="h-100 cardEmp1">
              <div className="cardHeader1">{item.label}</div>
              <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
                {item.type === "select" ? (
                  <select className="inputEmpInfo">
                    <option value="">اختر</option>
                    {item.options?.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input type={item.type} className="inputEmpInfo" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    ),
  },
];
function EditEmployeesForm({ employee, onSave }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({ ...employee }); // نحفظ البيانات هنا

  // تحديث البيانات عند تغيير أي input
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // زر الحفظ النهائي
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const res = await fetch(
        `https://darksalmon-anteater-608881.hostingersite.com/api/temp-contract-employees/1`,
        {
          method: "PUT", // أو POST حسب الـ API
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      alert("تم حفظ البيانات بنجاح");
      if (onSave) onSave(data);
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الحفظ");
    }
  };

  // نتحكم في عرض الحقول لتحديث formData
  const renderField = (item, key) => {
    const value = formData[item.label] || "";
    if (item.type === "select") {
      return (
        <select
          className="inputEmpInfo"
          value={value}
          onChange={(e) => handleChange(item.label, e.target.value)}
        >
          <option value="">اختر</option>
          {item.options?.map((opt, i) => (
            <option key={i} value={opt}>{opt}</option>
          ))}
        </select>
      );
    } else if (item.type === "date") {
      return (
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={value ? new Date(value) : null}
          onChange={(date) => handleChange(item.label, date)}
          placeholderText="yyyy / mm / dd"
          className="inputEmpInfo"
        />
      );
    } else {
      return (
        <input
          type={item.type}
          className="inputEmpInfo"
          value={value}
          onChange={(e) => handleChange(item.label, e.target.value)}
        />
      );
    }
  };

  // تحديث محتوى الخطوة ليستخدم renderField
  const renderStepContent = (step) => (
    <div className="row g-3 cardValue1" style={{ textAlign: "right" }}>
      {step.content.props.children?.map((item, index) => (
        <div key={index} className="col-12 col-sm-6 col-md-3">
          <div className="h-100 cardEmp1">
            <div className="cardHeader1">{item.label}</div>
            <div className="d-flex align-items-center" style={{ minHeight: "50px" }}>
              {renderField(item, index)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container my-5" style={{ height: "580px", marginTop: "50px", width: "100%" }}>
      <h4 className="employeeName" style={{ marginBottom: "20px" }}>تعديل بيانات الموظف</h4>

      <div className="d-flex flex-wrap justify-content-center mb-4 overflow-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-4 py-2 me-3 mb-2 border-bottom ${activeStep === index ? "border-primary fw-bold text-primary" : "border-transparent text-secondary"}`}
            style={{ cursor: "pointer", minWidth: "120px", textAlign: "center", borderRadius: "5px" }}
          >
            {step.title}
          </div>
        ))}
      </div>

      <div className="p-4 border rounded shadow-sm">
        {renderStepContent(steps[activeStep])}
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
          <button className="btn btn-success" onClick={handleSave}>
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
    </div>
  );
}

export default EditEmployeesForm;