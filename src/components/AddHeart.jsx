// import React from 'react'

// function AddChildren() {
//   return (
//     <div>AddChildren</div>
//   )
// }

// export default AddChildren;
import { useState } from "react";
import { Card, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { addDependent } from "../api/family";
import { useNavigate } from "react-router-dom";

const AddHeart = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [relationship, setRelationship] = useState("");
//   const [reason, setReason] = useState(""); 
  const [dependencyProof, setDependencyProof] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const formData = new FormData();
      formData.append("full_name", fullName);
      formData.append("national_id", nationalId);
      formData.append("birth_date", birthDate);
      formData.append("gender", gender);
      formData.append("relationship", relationship);
      // formData.append("dependency_reason", reason);

      if (dependencyProof) formData.append("dependency_proof", dependencyProof); // Check exact param name in API

      await addDependent(formData);
      setSuccess("تم إضافة بيانات المعال بنجاح");
      setTimeout(() => navigate("/emp-dashboard"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      className="p-4 shadow-sm"
      style={{ borderRadius: "15px", background: "#fff" }}>
      <h5 className="mb-4 text-center" style={{ fontWeight: 600, color: "#00695c" }}>
        إضافة بيانات المعالين
      </h5>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>إسم المعال رباعي</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل الاسم الكامل"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col>
            <Form.Label>الجنس </Form.Label>
            <Form.Select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            >
              <option value="">اختر الجنس</option>
              <option value="ذكر">ذكر</option>
              <option value="أنثى">أنثى</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>رقم هوية المعال</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل رقم الهوية"
              value={nationalId}
              onChange={(e) => setNationalId(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col>
            <Form.Label>تاريخ ميلاد المعال</Form.Label>
            <Form.Control
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
         <Col>
            <Form.Label>صلة القرابة</Form.Label>
            <Form.Control
              type="text"
              placeholder="أب/أم/أخ"
              value={relationship}
              onChange={(e) => setRelationship(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>صورة حجة الإعالة </Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setDependencyProof(e.target.files[0])}
          />
          {dependencyProof && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {dependencyProof.name}
            </small>
          )}
        </Form.Group>
        
         <div className="alertYellow">
            <p> البيانات المضافة ستكون في حالة "انتظار الموافقة" حتى يتم اعتمادها من قبل الإدارة.
            </p>
        </div>
        <div className="d-flex justify-content-between mt-4">
          <Button 
          className="sendData"
            variant="success" 
            type="submit"
            disabled={loading}
            style={{ borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }}>
             {loading ? "جاري الإرسال..." : "إرسال البيانات"}
          </Button>
          <Button 
            variant="outline-secondary" 
            onClick={() => navigate("/emp-dashboard")}
            style={{ borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }}>
            إلغاء
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddHeart;