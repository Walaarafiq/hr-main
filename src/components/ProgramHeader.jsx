import { useState } from "react";
import { Link } from "react-router-dom";
import AddProgramsModal from "./AddProgramsModal";
import Card from "react-bootstrap/Card";

function ProgramHeader({ title, desc, onAddProject }) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="employees-header d-flex justify-content-between align-items-center">
        <div>
          <h4 style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</h4>
          <p style={{ fontSize: "14px" }}>{desc}</p>
        </div>

        <div className="d-flex gap-2">
          <Link
            to="/temporary-contrast-employees"
            className="btn btn-outline-warning"
            style={{ fontSize: "13px" }}>
            الإنتقال إلى موظفي العقود المؤقتة
          </Link>

          <button
            className="btn btn-dark"
            style={{ fontSize: "13px" }}
            onClick={() => setShowAddModal(true)}>
            إضافة مشروع جديد
          </button>
        </div>
      </div>
     <div className="d-flex">
      <Card className="shadow-sm h-100 cardEmp col-2 mx-2 mt-2">
              <Card.Header className="cardHeader">عدد البرامج</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
               4
              </Card.Body>
      </Card>
      <Card className="shadow-sm h-100 cardEmp col-2 mx-1 mt-2">
              <Card.Header className="cardHeader">آخر المشاريع</Card.Header>
              <Card.Body className="d-flex align-items-center " style={{ minHeight: "60px",textAlign:'right',color:'grey' }}>
               المشروع البلجيكي
              </Card.Body>
      </Card>
     </div>
      {showAddModal && (
        <AddProgramsModal
          onClose={() => setShowAddModal(false)}
          onSave={(project) => {
            onAddProject(project);
            setShowAddModal(false);
          }}
        />
      )}
    </>
  );
}

export default ProgramHeader;
