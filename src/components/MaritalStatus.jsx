import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Button, Table, Spinner, Alert } from "react-bootstrap";
import { FaPaperclip, FaChild, FaHeart, FaUserTie } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { getEmployeeDashboard } from '../api/dashboard';

function MaritalStatus() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEmployeeDashboard();
        if (response && response.data) {
          setData(response.data);
        } else {
             // Handle case with no data but successful response if needed
             setData({});
        }
      } catch (err) {
        console.error("Marital Status fetch error:", err);
        setError("فشل في تحميل البيانات");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="success" />
        <p className="mt-2 text-muted">جاري تحميل البيانات...</p>
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

  const { personal_info, spouses, children } = data || {};
  
  // Use the first spouse if available, otherwise empty object
  const spouse = (spouses && spouses.length > 0) ? spouses[0] : {};

  return (
    <div>
      <Row className="g-4 mt-3">
           <Col md={12}>
             <Card className="p-4 shadow-sm h-100">            
        <h5 className="mb-3 fw-bold text-center">
          <FaHeart style={{ marginLeft: "8px", color: "#016A74" }} />الحالة الإجتماعية للموظف 
        </h5>
     
               <Form>
                 <Form.Group className="mb-3">
                   <Form.Label>الاسم كامل</Form.Label>
                   <Form.Control type="text" value={personal_info?.full_name || ""} disabled />
                 </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>رقم الهوية</Form.Label>
                   <Form.Control type="text" value={personal_info?.national_id || ""} disabled />
                 </Form.Group>
                 <Form.Group className="mb-3">
                    <Form.Label>القسم</Form.Label>
                    <Form.Control type="text" value={personal_info?.department || ""} disabled />
                 </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>المسمى الوظيفي</Form.Label>
                    <Form.Control type="text" value={personal_info?.job_title || ""} disabled />
                  </Form.Group>
                 <Form.Group className="mb-3">
                   <Form.Label>مكان السكن</Form.Label>
                   <Form.Control type="text" value={personal_info?.address || ""} disabled />
                 </Form.Group>
                </Form>

               <br />
               <h5 className="mb-3 fw-bold text-center">
                <FaUserTie style={{ marginLeft: "8px", color: "#016A74" }} />
                بيانات الزوج/ة</h5>
               
               {spouses && spouses.length > 0 ? (
                   <Form>
                     <Form.Group className="mb-3">
                       <Form.Label>الاسم كامل</Form.Label>
                       <Form.Control type="text" value={spouse.full_name || ""} disabled />
                     </Form.Group>
                     <Form.Group className="mb-3">
                       <Form.Label>رقم الهوية</Form.Label>
                       <Form.Control type="text" value={spouse.national_id || ""} disabled />
                     </Form.Group>
                      {/* Add more spouse fields if available in API response */}
                   </Form>
               ) : (
                   <Alert variant="info" className="text-center">لا يوجد بيانات للزوج/ة</Alert>
               )}
               
               <div className="text-center mb-3">
                   <Button variant="outline-primary" onClick={() => navigate("/add-wife")}>
                       إضافة/تعديل بيانات الزوجة
                   </Button>
               </div>

                    <br />
                     <h5 className="mb-3 fw-bold text-center">
                    <FaChild style={{ marginLeft: "8px", color: "#016A74" }} />
                    الأبناء
                  </h5>

                     <Table striped bordered hover responsive className="text-center">
                        <thead>
                            <tr>
                            <th>اسم الابن</th>
                            <th>تاريخ الميلاد</th>
                            <th>العمر</th>
                            <th>الجنس</th>
                            </tr>
                        </thead>
                        <tbody>
                            {children && children.length > 0 ? (
                                children.map((child, index) => (
                                    <tr key={index}>
                                        <td>{child.full_name}</td>
                                        <td>{child.birth_date || "-"}</td>
                                        <td>{child.age || "-"}</td>
                                        <td>{child.gender || "-"}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">لا يوجد أبناء مسجلين</td>
                                </tr>
                            )}
                        </tbody>
                         
                        </Table>
                        <div className="d-flex justify-content-center">
                            <Button variant="success" className="sendData" onClick={() => navigate("/add-children")}>إضافة إبن/ة</Button>
                        </div>
<br />
<Row className="mb-4">
         <h5 className="mb-3 fw-bold text-center">المرفقات</h5>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>شهادة الميلاد</h6>
          <p className="text-muted small">غير متوفر للعرض</p>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>عقد الزواج</h6>
            <p className="text-muted small">غير متوفر للعرض</p>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="p-3 text-center shadow-sm">
          <FaPaperclip size={28} className="mb-2 text-secondary" />
          <h6>شهادة الوفاة</h6>
            <p className="text-muted small">غير متوفر للعرض</p>
        </Card>
      </Col>
    </Row>

             </Card>
           </Col>
         </Row>   
    </div>
  )
}

export default MaritalStatus;