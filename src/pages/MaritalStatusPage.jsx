import React from 'react'
import EmpGateSideBar from '../components/EmpGateSideBar';
import MaritalStatus from '../components/MaritalStatus';
function MaritalStatusPage() {
  return (
    <div>
        <EmpGateSideBar>
            <MaritalStatus/>
        </EmpGateSideBar>
    </div>
  )
}

export default MaritalStatusPage;