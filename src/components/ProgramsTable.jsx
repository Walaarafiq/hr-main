import React, { useState } from "react";

function ProgramsTable({ projects, setProjects }) {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editProjectData, setEditProjectData] = useState(null);

  const handleDelete = (id) => {
    const project = projects.find(p => p.id === id);
    if (window.confirm(`هل أنت متأكد أنك تريد حذف المشروع "${project.name}"؟`)) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const openViewModal = (project) => {
    setSelectedProject(project);
    setShowViewModal(true);
  };

  const openEditModal = (project) => {
    setEditProjectData({ ...project });
    setShowEditModal(true);
  };

  const handleEditChange = (field, value) => {
    setEditProjectData(prev => ({ ...prev, [field]: value }));
  };

  const saveEdit = () => {
    setProjects(prev => prev.map(p => p.id === editProjectData.id ? editProjectData : p));
    setShowEditModal(false);
  };

  const ModalWrapper = ({ children, onClose }) => (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
      }}
    >
      <div onClick={e => e.stopPropagation()} style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", width: "500px", maxHeight: "90%", overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );

  return (
    <div className="card mt-4">
      <div className="card-body">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr style={{ fontSize: '14px' }}>
              <th>م</th>
              <th>إسم المشروع</th>
              <th>مدة المشروع</th>
              <th>بداية المشروع</th>
              <th>نهاية المشروع</th>
              <th>الجهة الممولة</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={proj.id}>
                <td>{index + 1}</td>
                <td>{proj.name}</td>
                <td>{proj.duration}</td>
                <td>{proj.start_date}</td>
                <td>{proj.end_date}</td>
                <td>{proj.funding_source}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger me-2" onClick={() => handleDelete(proj.id)}>🗑</button>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={() => openEditModal(proj)}>✏</button>
                  <button className="btn btn-sm btn-outline-warning me-2" onClick={() => openViewModal(proj)}>👁</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showViewModal && selectedProject && (
        <ModalWrapper onClose={() => setShowViewModal(false)}>
          <h5>بيانات المشروع</h5>
          <p><strong>اسم المشروع:</strong> {selectedProject.name}</p>
          <p><strong>مدة المشروع:</strong> {selectedProject.duration}</p>
          <p><strong>بداية المشروع:</strong> {selectedProject.start_date}</p>
          <p><strong>نهاية المشروع:</strong> {selectedProject.end_date}</p>
          <p><strong>الجهة الممولة:</strong> {selectedProject.funding_source}</p>
          <p><strong>الوصف:</strong> {selectedProject.description}</p>
          <button className="btn btn-dark" onClick={() => setShowViewModal(false)}>إغلاق</button>
        </ModalWrapper>
      )}

      {showEditModal && editProjectData && (
        <ModalWrapper onClose={() => setShowEditModal(false)}>
          <h5>تعديل بيانات المشروع</h5>
          <div className="mb-2">
            <label>اسم المشروع:</label>
            <input className="form-control" value={editProjectData.name} onChange={(e) => handleEditChange("name", e.target.value)} />
          </div>
          <div className="mb-2">
            <label>مدة المشروع:</label>
            <input className="form-control" value={editProjectData.duration} onChange={(e) => handleEditChange("duration", e.target.value)} />
          </div>
          <div className="mb-2">
            <label>بداية المشروع:</label>
            <input className="form-control" value={editProjectData.start_date} onChange={(e) => handleEditChange("start_date", e.target.value)} />
          </div>
          <div className="mb-2">
            <label>نهاية المشروع:</label>
            <input className="form-control" value={editProjectData.end_date} onChange={(e) => handleEditChange("end_date", e.target.value)} />
          </div>
          <div className="mb-2">
            <label>الجهة الممولة:</label>
            <input className="form-control" value={editProjectData.funding_source} onChange={(e) => handleEditChange("funding_source", e.target.value)} />
          </div>
          <div className="mb-2">
            <label>الوصف:</label>
            <textarea className="form-control" value={editProjectData.description} onChange={(e) => handleEditChange("description", e.target.value)} />
          </div>
          <div className="d-flex justify-content-end mt-3">
            <button className="btn btn-secondary me-2 mx-1" onClick={() => setShowEditModal(false)}>إلغاء</button>
            <button className="btn btn-primary" onClick={saveEdit}>حفظ</button>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
}

export default ProgramsTable;
