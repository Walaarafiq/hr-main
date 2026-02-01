import { useState } from "react";
import { Card, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { addCertificate } from "../api/family";
import { useNavigate } from "react-router-dom";

const AddEduCertificate = () => {
  const navigate = useNavigate();
  const [certName, setCertName] = useState("");
  const [major, setMajor] = useState("");
  const [certType, setCertType] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [country, setCountry] = useState("");
  const [notes, setNotes] = useState("");
  const [certFile, setCertFile] = useState(null);

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
      // formData.append("qualification_id", ...); // Need ID? Using university_name or major_name for now
      formData.append("university_name", certName); // Assuming certName maps to University or similar
      formData.append("major_name", major);
      formData.append("graduation_year", gradYear);
      // formData.append("country_id", country); // API likely expects ID, but if string allowed?
      if (notes) formData.append("notes", notes);
      
      if (certFile) formData.append("certificate_attachment", certFile); // Adjust field name: document_path?

      await addCertificate(formData);
      setSuccess("تم إضافة الشهادة بنجاح");
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
      style={{ borderRadius: "15px", background: "#fff" }}
    >
      <h5 className="mb-4 text-center" style={{ fontWeight: 600, color: "#00695c" }}>
        إضافة شهادة تعليمية 
      </h5>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col>
            <Form.Label>إسم الشهادة/الجامعة</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل اسم الجامعة أو الشهادة"
              value={certName}
              onChange={(e) => setCertName(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
         
          <Col>
            <Form.Label>التخصص</Form.Label>
            <Form.Control
              type="text"
              placeholder="مثال: هندسة برمجيات"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
              required
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col>
            <Form.Label>نوع الشهادة</Form.Label>
            <Form.Select
              value={certType}
              onChange={(e) => setCertType(e.target.value)}
              required
              style={{ borderRadius: "10px" }}>
              <option value="">اختر</option>
              <option value="دبلوم">دبلوم</option>
              <option value="بكالوريس">بكالوريس</option>
              <option value="ماجستير">ماجستير</option>
              <option value="دكتوراة">دكتوراة</option>
            </Form.Select>
          </Col>

          <Col  md={3}>
            <Form.Label>سنة التخرج</Form.Label>
            <Form.Control
              type="text"
              placeholder="202X"
              value={gradYear}
              onChange={(e) => setGradYear(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col md={3}>
            <Form.Label>الدولة</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={country}
              onChange={(e) => setCountry(e.target.value)}
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
         
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>مرفق لصورة الشهادة</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setCertFile(e.target.files[0])}
          />
          {certFile && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {certFile.name}
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

export default AddEduCertificate;