import React, { useEffect, useState } from "react";
import { Card, Row, Col, Form, Button, Spinner, Alert } from "react-bootstrap";
import { getEmployeeDashboard } from "../api/dashboard";
import { changePassword } from "../api/auth";

const Profile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Password Change State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passLoading, setPassLoading] = useState(false);
  const [passMsg, setPassMsg] = useState("");
  const [passError, setPassError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeDashboard();
        if (response && response.data) {
          setData(response.data);
        } else {
             setData({});
        }
      } catch (err) {
        console.error("Profile fetch error:", err);
        setError("فشل في تحميل البيانات الشخصية");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      setPassError("كلمة المرور الجديدة غير متطابقة");
      return;
    }
    if (!currentPassword || !newPassword) {
      setPassError("يرجى تعبئة جميع الحقول");
      return;
    }

    setPassLoading(true);
    setPassError("");
    setPassMsg("");

    try {
      await changePassword(currentPassword, newPassword, confirmPassword);
      setPassMsg("تم تغيير كلمة المرور بنجاح");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      setPassError(err.message || "فشل تغيير كلمة المرور");
    } finally {
      setPassLoading(false);
    }
  };


  if (loading) {
     return (
        <div className="text-center mt-5">
           <Spinner animation="border" variant="success" />
           <p className="mt-2 text-muted">جاري تحميل الملف الشخصي...</p>
        </div>
     );
  }

  if (error) {
      return (
          <div className="container mt-4">
              <Alert variant="danger">{error}</Alert>
          </div>
      );
  }

  const { personal_info } = data || {};

  return (
    <Row className="g-4 mt-3">
      <Col md={12}>
        <Card className="p-4 shadow-sm h-100">
          <h6 className="mb-3 fw-bold" style={{ color: "#016a74" }}>المعلومات الشخصية</h6>

          <Form>
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>الاسم الكامل</Form.Label>
                    <Form.Control type="text" value={personal_info?.full_name || ""} disabled />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>الرقم الوظيفي</Form.Label>
                     <Form.Control type="text" value={personal_info?.employee_number || ""} disabled />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>رقم الهوية</Form.Label>
                    <Form.Control type="text" value={personal_info?.national_id || ""} disabled />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>المسمى الوظيفي</Form.Label>
                    <Form.Control type="text" value={personal_info?.job_title || ""} disabled />
                    </Form.Group>
                </Col>
            </Row>

             <Row>
                 <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>القسم</Form.Label>
                    <Form.Control type="text" value={personal_info?.department || ""} disabled />
                    </Form.Group>
                 </Col>
                 <Col md={6}>
                    <Form.Group className="mb-3">
                    <Form.Label>مكان السكن</Form.Label>
                    <Form.Control type="text" value={personal_info?.address || ""} disabled />
                    </Form.Group>
                 </Col>
             </Row>
          </Form>
        </Card>
      </Col>

      <Col md={12}>
        <Card className="p-4 shadow-sm h-100">
          <h6 className="mb-3 fw-bold" style={{ color: "#016a74" }}>تغيير كلمة المرور</h6>

          {passError && <Alert variant="danger">{passError}</Alert>}
          {passMsg && <Alert variant="success">{passMsg}</Alert>}

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور الحالية</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="كلمة المرور الحالية" 
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>كلمة المرور الجديدة</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="كلمة المرور الجديدة" 
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>تأكيد كلمة المرور</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="تأكيد كلمة المرور" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button 
                variant="success" 
                className="sendData" 
                onClick={handlePasswordChange}
                disabled={passLoading}
            >
                {passLoading ? "جاري التغيير..." : "تغيير كلمة المرور"}
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Profile;