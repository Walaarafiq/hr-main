import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Alert, Spinner } from "react-bootstrap";
import { FaUserTie, FaWallet, FaDownload, FaPrint } from "react-icons/fa";
import { getEmployeeDashboard } from "../api/dashboard";

const Salary = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeDashboard();
        console.log("Salary Page Dashboard Response:", response);
        if (response && response.data) {
          setData(response.data);
        } else {
          console.warn("Unexpected response format:", response);
          // Still set data to empty object to show UI, just with missing values
           setData({});
           // Only set error if we really think it failed completely, or just rely on console.
           // If we want to be strict: setError("لم يتم العثور على بيانات");
           // But user wants UI. So let's allow it to render with empty data.
        }
      } catch (err) {
        console.error("Salary Fetch Error:", err);
        setError("تعذر تحميل البيانات. يرجى المحاولة لاحقاً.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    if (data?.last_payslip_link) {
        window.open(data.last_payslip_link, "_blank");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  // Extract variables safely
  const { personal_info, net_last_salary, last_payslip_link } = data || {};

  return (
    <div className="container mt-4">
      {error && (
        <Alert variant="danger" dismissible onClose={() => setError(null)}>
          {error}
        </Alert>
      )}

      {loading && (
          <div className="text-center mb-3">
             <Spinner animation="border" size="sm" variant="success" /> جاري التحديث...
          </div>
      )}

      <h3 className="text-center mb-4 fw-bold d-flex justify-content-center align-items-center gap-2">
        <FaWallet style={{color:"#016a74"}} />
        قسيمة الراتب
      </h3>
      
      {/* Search/Filter Section - Visual Only for now as API doesn't support history */}
      <Row className="mb-4 justify-content-center">
        <Col md={3}>
          <Form.Group>
            <Form.Label>&nbsp;</Form.Label>
            <div>
                <Button variant="primary" className="w-100 sendData" disabled>
                عرض (البيانات الحالية فقط)
                </Button>
            </div>
            </Form.Group>
        </Col>

        <Col md={3}>
          <Form.Group>
            <Form.Label>السنة / الشهر</Form.Label>
            <Form.Control type="month" disabled />
            <Form.Text className="text-muted">
                يتم عرض قسيمة الراتب الأخيرة المتاحة.
            </Form.Text>
          </Form.Group>
        </Col>
      </Row>

{/* كارد الموظف */}
     <Row className="justify-content-center">
  <Col md={8}>
    <Card
      style={{
        borderRadius: "18px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Card.Body style={{ padding: "30px" }}>

        <h5
          className="mb-4 fw-bold text-center d-flex justify-content-center align-items-center gap-2"
          style={{ color: "#016a74" }}
        >
          <FaUserTie size={20} />
          البيانات الشخصية للموظف
        </h5>

        <Row className="mb-3">
          <Col md={6}>
            <strong>الاسم الكامل:</strong> {personal_info?.full_name || "-"}
          </Col>
          <Col md={6}>
            <strong>الرقم الوظيفي:</strong> {personal_info?.employee_number || "-"}
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <strong>المسمى الوظيفي:</strong> {personal_info?.job_title || "-"}
          </Col>
          <Col md={6}>
            <strong>القسم:</strong> {personal_info?.department || "-"}
          </Col>
        </Row>
        
        <hr />
        <h6 className="mb-3 mt-4 fw-bold" style={{ color: "#016a74" }}>تفاصيل الراتب</h6>

        <Row className="mb-3">
          <Col md={6}>
            <strong>الراتب الأساسي:</strong> <span className="text-muted">غير متوفر</span>
          </Col>
          <Col md={6}>
            <strong>البدلات:</strong> <span className="text-muted">غير متوفر</span>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
            <strong>الخصومات:</strong> <span className="text-muted">غير متوفر</span>
          </Col>
          <Col md={6}>
            <strong>صافي الراتب:</strong> <span className="fw-bold text-success" style={{fontSize: '1.2em'}}>
                {net_last_salary ? `${net_last_salary} شيكل` : "غير متوفر"}
            </span>
          </Col>
        </Row>

        <div className="d-flex gap-3 justify-content-end mt-4">
         {last_payslip_link ? (
             <Button className="sendData d-flex align-items-center gap-2"
                onClick={handleDownload}
             >
                <FaDownload />
                تحميل قسيمة الراتب
            </Button>
         ) : (
             <Button variant="secondary" disabled>
                 <FaDownload className="me-2"/>
                 لا يوجد قسيمة متاحة
             </Button>
         )}


          <Button variant="outline-secondary" onClick={handlePrint} className="d-flex align-items-center gap-2">
            <FaPrint />
            طباعة
          </Button>
        </div>

      </Card.Body>
    </Card>
  </Col>
</Row>


    </div>
  );
};

export default Salary;