import React, { useState } from "react";

function Training({ projects, setProjects }) {
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [editProjectData, setEditProjectData] = useState(null);

  const handleDelete = (id) => {
    const project = projects.find(p => p.id === id);
    if (window.confirm(`هل أنت متأكد أنك تريد حذف  "${project.name}"؟`)) {
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
              <th>إسم الدورة</th>
              <th>النوع</th>
              <th>التصنيف</th>
              <th>الفئة المستهدفة</th>
              <th>الجهة الممولة</th>
              <th>المدة</th>
              <th>مكان الإنعقاد</th>
              <th>تاريخ البداية</th>
              <th>المشاركين</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((proj, index) => (
              <tr key={proj.id}>
                <td>{index + 1}</td>
                <td>{proj.name}</td>
                <td>{proj.interval}</td>
                <td>{proj.ProStart}</td>
                <td>{proj.ProFinished}</td>
                <td>{proj.Organize}</td>
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
    </div>
  );
}

export default Training;
