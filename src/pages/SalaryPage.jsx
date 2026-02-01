import React from 'react'
import Salary from '../components/Salary'
import EmpGateSideBar from '../components/EmpGateSideBar'

function SalaryPage() {
  return (
    <div>
        <EmpGateSideBar>
            <Salary/>
        </EmpGateSideBar>
    </div>
  )
}

export default SalaryPage;