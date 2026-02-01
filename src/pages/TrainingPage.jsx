import React, { useState } from 'react';
import ProgramHeader from '../components/ProgramHeader';
import ProgramsTable from '../components/ProgramsTable';
import Training from '../components/Training';
import TrainingHeader from '../components/TrainingHeader';

function TrainingPage() {
  const [projects, setProjects] = useState([]);

  const handleAddProject = (newProject) => {
    setProjects(prev => [
      ...prev,
      { ...newProject, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }
    ]);
  };

  return (
    <div>
      <TrainingHeader
        title="إدارة الدورات التدريبية"
        desc="يمكنك استعراض وإدارة الدورات التدريبية وورش العمل والتدريب الميداني."
        onAddProject={handleAddProject}
      />
      <Training projects={projects} setProjects={setProjects} />
    </div>
  );
}

export default TrainingPage;
