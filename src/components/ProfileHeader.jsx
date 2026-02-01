import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { getEmployeeDashboard } from "../api/dashboard";

const ProfileHeader = () => {
    const [employeeName, setEmployeeName] = useState("جاري التحميل...");
    const [jobTitle, setJobTitle] = useState("");
    const [department, setDepartment] = useState("");

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await getEmployeeDashboard();
            if (response && response.data && response.data.personal_info) {
               setEmployeeName(response.data.personal_info.full_name);
               setJobTitle(response.data.personal_info.job_title);
               setDepartment(response.data.personal_info.department);
            }
        } catch (error) {
            console.error("Failed to fetch profile header data", error);
            setEmployeeName("الموظف");
        }
        };
        fetchUserData();
    }, []);

  return (
    <Card className="p-3 d-flex flex-row align-items-center shadow-sm">
      <img
        src="/images/employee-02.jpg"
        alt="الصورة الشخصية "
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          objectFit: "cover",
          marginLeft: "15px",}}/>
      <div>
        <h6 style={{ margin: 10, fontWeight: "bold" }}>
          {employeeName}
        </h6>
        <small className="" style={{ color: "#6c757d"}}>
           {jobTitle || department ? `${jobTitle} - ${department}` : "وزارة الإقتصاد الوطني الفلسطيني"}
        </small>
      </div>
    </Card>
  );
};

export default ProfileHeader;