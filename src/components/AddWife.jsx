import { useState } from "react";
import { Card, Form, Button, Row, Col, Alert } from "react-bootstrap";
import { addSpouse } from "../api/family";
import { useNavigate } from "react-router-dom";

const AddWife = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [marriageDate, setMarriageDate] = useState("");
  const [marriageStatus, setMarriageStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [works, setWorks] = useState(false);
  const [marriageContract, setMarriageContract] = useState(null);
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
      formData.append("birth_date", birthDate); // Required by StoreDependentRequest
      formData.append("gender", "أنثى"); // Wife is female
      
      // Additional fields (might not be processed by backend but sending just in case or for notes)
      // formData.append("marriage_date", marriageDate);
      // formData.append("mobile", phone);
      // formData.append("is_working", works ? "1" : "0");
      
      if (marriageContract) {
         formData.append("dependency_proof", marriageContract); // Map to dependency_proof
      }

      await addSpouse(formData);
      setSuccess("تم إضافة بيانات الزوجة بنجاح");
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
        إضافة بيانات الزوجة
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
            <Form.Label>تاريخ الزواج (اختياري)</Form.Label>
            <Form.Control
              type="date"
              value={marriageDate}
              onChange={(e) => setMarriageDate(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col>
            <Form.Label>حالة الزواج (اختياري)</Form.Label>
            <Form.Select
              value={marriageStatus}
              onChange={(e) => setMarriageStatus(e.target.value)}
              style={{ borderRadius: "10px" }}
            >
              <option value="">اختر الحالة</option>
              <option value="متزوجة">متزوجة</option>
              <option value="مطلقة">مطلقة</option>
              <option value="أرملة">أرملة</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>رقم الجوال (اختياري)</Form.Label>
            <Form.Control
              type="text"
              placeholder="أدخل رقم الجوال"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{ borderRadius: "10px" }}
            />
          </Col>
          <Col className="d-flex align-items-center mt-4">
            <Form.Check
              type="checkbox"
              label="يعمل/لا يعمل (اختياري)"
              checked={works}
              onChange={(e) => setWorks(e.target.checked)}
            />
          </Col>
        </Row>

        <Form.Group className="mb-4">
          <Form.Label>مرفق عقد الزواج</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.jpg,.png"
            onChange={(e) => setMarriageContract(e.target.files[0])}
          />
          {marriageContract && (
            <small className="text-muted mt-1 d-block">
              الملف المختار: {marriageContract.name}
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
            style={{ borderRadius: "10px", fontWeight: "500", padding: "8px 25px" }}
          >
            إلغاء
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default AddWife;