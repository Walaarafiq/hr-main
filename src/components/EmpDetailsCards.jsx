import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  FaUser,
  FaUsers,
  FaHeart,
  FaGraduationCap
} from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmpDetailsCards = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;

  const { personal_info, spouses, children, dependents, qualifications } = data;

  return (
    <Row className="g-4" style={{ paddingBottom: "50px", marginTop: "15px" }}>
      <div className="section-divider"></div>

      {/* بيانات الموظف */}
      {personal_info && (
        <Col md={3}>
          <h6 className="section-title">
            <FaUser className="section-icon" /> بيانات الموظف
          </h6>
          <h6 className="section-title1 text-center mt-4">بيانات شخصية</h6>

          <Card className="profile-card text-center">
            <Card.Body>
              <p><strong>الاسم : <br /></strong>{personal_info.full_name}</p>
              <p><strong>الرقم الوظيفي : <br /></strong>{personal_info.employee_number}</p>
              <p><strong>رقم الهوية : <br /></strong>{personal_info.national_id}</p>
              <p><strong>القسم : <br /></strong>{personal_info.department || "-"}</p>
              <p><strong>المسمى الوظيفي : <br /></strong>{personal_info.job_title || "-"}</p>
            </Card.Body>
          </Card>
        </Col>
      )}

      {/* بيانات العائلة */}
      <Col md={5}>
        <h6 className="section-title d-flex justify-content-center">
          <FaUsers className="section-icon" /> بيانات العائلة
        </h6>

        <Row>
          {/* الزوجة */}
          <Col md={6}>
            <h6 className="section-title1 text-center mt-4">الزوجة</h6>

            <Card className="profile-card">
              <Card.Body className="d-flex flex-column">
                {spouses && spouses.length > 0 ? (
                  spouses.map((spouse, index) => (
                    <div key={index}>
                      <p><strong>الإسم : <br /></strong>{spouse.full_name}</p>
                      <p><strong>الحالة : <br /></strong>{spouse.status || "-"}</p>
                      <p><strong>رقم الهوية : <br /></strong>{spouse.national_id || "-"}</p>
                      {index < spouses.length - 1 && <hr />}
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted">لا يوجد بيانات</div>
                )}

                <button
                  className="btn-gradient-teal mt-auto"
                  onClick={() => navigate("/add-wife")}
                >
                  <FaEdit style={{ marginLeft: "6px" }} />
                  إضافة زوج/ة
                </button>
              </Card.Body>
            </Card>
          </Col>

          {/* الأبناء */}
          <Col md={6}>
            <h6 className="section-title1 text-center mt-4">الأبناء</h6>

            <Card className="profile-card">
              <Card.Body className="d-flex flex-column">
                {children && children.length > 0 ? (
                  children.map((child, index) => (
                    <div key={index}>
                      <p><strong>الإسم : </strong>{child.full_name}</p>
                      <p><strong>العمر : </strong>{child.age ? `${child.age} سنوات` : "-"}</p>
                      <p><strong>الحالة الدراسية : </strong>{child.study_status || "-"}</p>
                      {index < children.length - 1 && <div className="section-divider"></div>}
                    </div>
                  ))
                ) : (
                  <div className="text-center text-muted">لا يوجد بيانات</div>
                )}

                <button
                  className="btn-gradient-teal mt-auto"
                  onClick={() => navigate("/add-children")}
                >
                  <FaEdit style={{ marginLeft: "6px" }} />
                  إضافة إبن/ة
                </button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* المعالون */}
      <Col md={2}>
        <h6 className="section-title">
          <FaHeart className="section-icon" /> المعالون
        </h6>
        <h6 className="section-title1 text-center mt-4">المعالون</h6>

        <Card className="profile-card">
          <Card.Body className="d-flex flex-column">
            {dependents && dependents.length > 0 ? (
                dependents.map((dependent, index) => (
                    <div key={index}>
                        <p><strong>الإسم : <br /></strong>{dependent.full_name}</p>
                        <p><strong>صلة القرابة : <br /></strong>{dependent.relationship || "-"}</p>
                        <p><strong>سبب الإعالة : <br /></strong>{dependent.dependency_reason || "-"}</p>
                         {index < dependents.length - 1 && <hr />}
                    </div>
                ))
            ) : (
                 <div className="text-center text-muted">لا يوجد بيانات</div>
            )}

            <button
              className="btn-gradient-teal mt-auto"
              onClick={() => navigate("/add-heart")}>
              <FaEdit style={{ marginLeft: "6px" }} />
              إضافة معال
            </button>
          </Card.Body>
        </Card>
      </Col>

      {/* الشهادات */}
      <Col md={2}>
        <h6 className="section-title">
          <FaGraduationCap className="section-icon" /> الشهادات
        </h6>
        <h6 className="section-title1 text-center mt-4">المؤهلات العلمية</h6>

        <Card className="profile-card">
          <Card.Body className="d-flex flex-column">
            {qualifications && qualifications.length > 0 ? (
                qualifications.map((qual, index) => (
                    <div key={index}>
                        <p><strong>الدرجة : <br /></strong>{qual.degree || "-"}</p>
                        <p><strong>الجهة : <br /></strong>{qual.institution || "-"}</p>
                        <p><strong>سنة التخرج : <br /></strong>{qual.graduation_year || "-"}</p>
                         {index < qualifications.length - 1 && <hr />}
                    </div>
                ))
            ) : (
                <div className="text-center text-muted">لا يوجد بيانات</div>
            )}

           <button
              className="btn-gradient-teal mt-auto"
              onClick={() => navigate("/add-edu-certificate")}>
              <FaEdit style={{ marginLeft: "6px" }} />
              إضافة شهادة
            </button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default EmpDetailsCards;