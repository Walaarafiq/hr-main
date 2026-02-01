import React, { useState } from "react";

function AddCategoryModal({ onClose, onSave }) {
  const [form, setForm] = useState({ name: "", empNum: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div style={{
      position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000
    }}>
      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", width: "400px" }}>
        <h5>إضافة قيمة جديدة</h5>

        <div className="mb-2">
          <label className="form-label">اسم الفئة</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-2">
          <label className="form-label">المعرف الثابت (اختياري)</label>
          <input
            className="form-control"
            name="empNum"
            value={form.empNum}
            onChange={handleChange}
          />
        </div>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-secondary" onClick={onClose}>إلغاء</button>
          <button className="btn btn-dark" onClick={() => onSave(form)}>حفظ</button>
        </div>
      </div>
    </div>
  );
}

export default AddCategoryModal;
