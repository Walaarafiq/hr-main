// import React from 'react'

// function AddChildren() {
//   return (
//     <div>AddChildren</div>
//   )
// }

// export default AddChildren;
import { useState } from "react";
import { Card, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { addChild } from "../api/family";
import { useNavigate } from "react-router-dom";

const AddChildren = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherId, setMotherId] = useState("");
  const [notes, setNotes] = useState("");
  const [isWorking, setIsWorking] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [idCardImage, setIdCardImage] = useState(null);
  const [birthCertificateImage, setBirthCertificateImage] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const storedEmployeeId = localStorage.getItem("employee_id");
      if (!storedEmployeeId) {
        throw new Error("لم يتم العثور على رقم الموظف. يرجى تسجيل الدخول مرة أخرى.");
      }

      const formData = new FormData();
      formData.append("employee_id", storedEmployeeId);
      formData.append("full_name", fullName);
      formData.append("national_id", nationalId);
      formData.append("birth_date", birthDate);
      formData.append("gender", gender);
      formData.append("marital_status", maritalStatus);
      formData.append("mother_full_name", motherName);
      formData.append("mother_id_number", motherId);
      if (notes) formData.append("notes", notes);
      
      // Convert booleans to 1/0 strings strictly
      formData.append("is_working", isWorking ? "1" : "0");
      formData.append("is_university_student", isStudent ? "1" : "0");

      if (idCardImage) formData.append("id_card_image", idCardImage);
      if (birthCertificateImage) formData.append("birth_certificate_image", birthCertificateImage);

      console.log("Submitting Child Data with Employee ID:", storedEmployeeId);

      await addChild(formData);
      setSuccess("تم إضافة بيانات الإبن/الإبنة بنجاح");
      setTimeout(() => navigate(-1), 2000); // Go back to previous page (Marital Status)
    } catch (err) {
      console.error("Add Child Error:", err);
      setError(err.message || "فشل في إضافة البيانات");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card 
      className="p-4 shadow-sm"
      style={{ borderRadius: "15px", background: "#fff" }}
    >
      <h5 className="mb-4 text-center" style={{ fontWeight: 600, color: "#00695c" }}>
        إضافة بيانات الأبناء
      </h5>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>الاسم الكامل</Form.Label>
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
            <Form.Label>رقم الهوية</Form.Label>
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
            <Form.Label>تاريخ الميلاد</Form.Label>
            <Form.Control
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col>
            <Form.Label>الحالة الإجتماعية</Form.Label>
            <Form.Select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            >
              <option value="">اختر الحالة</option>
              <option value="أعزب">أعزب/عزباء</option>
              <option value="متزوج">متزوج/متزوجة</option>
              <option value="مطلق">مطلق/مطلقة</option>
              <option value="أرمل">أرمل/أرملة</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col  md={3}>
            <Form.Label>إسم الأم الكامل</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل إسم الأم"
              value={motherName}
              onChange={(e) => setMotherName(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={3}>
            <Form.Label>رقم هوية الأم</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل رقم هوية الأم"
              value={motherId}
              onChange={(e) => setMotherId(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={6}>
            <Form.Label>الملاحظات</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل ملاحظاتك "
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={6} className="d-flex align-items-center mt-4">
            <Form.Check
              type="checkbox"
              label="يعمل"
              checked={isWorking}
              onChange={(e) => setIsWorking(e.target.checked)}/>
            <Form.Check className="mx-2"
              type="checkbox"
              label="طالب جامعي"
              checked={isStudent}
              onChange={(e) => setIsStudent(e.target.checked)} />
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>صورة بطاقة الهوية</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setIdCardImage(e.target.files[0])}
          />
          {idCardImage && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {idCardImage.name}
            </small>
          )}
        </Form.Group>
         <Form.Group className="mb-4">
          <Form.Label>صورة شهادة الميلاد</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setBirthCertificateImage(e.target.files[0])}
          />
          {birthCertificateImage && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {birthCertificateImage.name}
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

export default AddChildren;