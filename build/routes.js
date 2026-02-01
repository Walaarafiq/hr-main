"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var Layout_1 = require("./layouts/Layout");
var Login_1 = require("./components/Login");
var Employess_jsx_1 = require("./pages/Employess.jsx");
var OfficialEmployees_jsx_1 = require("./pages/OfficialEmployees.jsx");
var OfficialsOfAnotherGovernment_jsx_1 = require("./pages/OfficialsOfAnotherGovernment.jsx");
var OlderEmployees_1 = require("./pages/OlderEmployees");
var DismissedEmployees_1 = require("./pages/DismissedEmployees");
var PermanentEmploymentContracts_1 = require("./pages/PermanentEmploymentContracts");
var TemporaryEmploymentContracts_1 = require("./pages/TemporaryEmploymentContracts");
var SuspendedEmploymentContracts_1 = require("./pages/SuspendedEmploymentContracts");
var TemporaryContrastEmployees_1 = require("./pages/TemporaryContrastEmployees");
var Programs_1 = require("./pages/Programs");
var Goverments_1 = require("./pages/Goverments");
var EmpType_1 = require("./pages/EmpType");
var EmpClassifications_1 = require("./pages/EmpClassifications");
var Categories_1 = require("./pages/Categories");
var JobScale_1 = require("./pages/JobScale");
var Degree_1 = require("./pages/Degree");
var Programs2_1 = require("./pages/Programs2");
var Certificates_1 = require("./pages/Certificates");
var GovernmentDepartment_1 = require("./pages/GovernmentDepartment");
var JobTitle_1 = require("./pages/JobTitle");
var Division_1 = require("./pages/Division");
var Section_1 = require("./pages/Section");
var Dashboard_1 = require("./pages/Dashboard");
var Unit_1 = require("./pages/Unit");
var GeneralAdminstration_1 = require("./pages/GeneralAdminstration");
var BranchOffices_1 = require("./pages/BranchOffices");
var Crossing_1 = require("./pages/Crossing");
var EmploymentStatus_1 = require("./pages/EmploymentStatus");
var Bank_1 = require("./pages/Bank");
var WorkContracts_1 = require("./pages/WorkContracts");
var EmployeeDocuments_1 = require("./pages/EmployeeDocuments");
var CourseTypes_1 = require("./pages/CourseTypes");
var CourseClassifications_1 = require("./pages/CourseClassifications");
var AcademicCertifcates_1 = require("./pages/AcademicCertifcates");
var AdministrativeAttachments_1 = require("./pages/AdministrativeAttachments");
var AddCertificate_1 = require("./components/AddCertificate");
var AddAttachment_1 = require("./components/AddAttachment");
var AddEmployeesforms_1 = require("./components/AddEmployeesforms");
var TrainingPage_1 = require("./pages/TrainingPage");
var EmpGate_1 = require("./pages/EmpGate");
var EmpDashboard_1 = require("./pages/EmpDashboard");
var AddWifePage_1 = require("./pages/AddWifePage");
var AddChildrenPage_1 = require("./pages/AddChildrenPage");
var AddHeartPage_1 = require("./pages/AddHeartPage");
var AddEduCertificatePage_1 = require("./pages/AddEduCertificatePage");
var ProfilePage_1 = require("./pages/ProfilePage");
var MaritalStatusPage_1 = require("./pages/MaritalStatusPage");
var ResetPasswordEmpPages_1 = require("./pages/ResetPasswordEmpPages");
var router = (0, react_router_dom_1.createBrowserRouter)([
    {
        path: "auth",
        children: [
            { path: "login", element: (0, jsx_runtime_1.jsx)(Login_1.default, {}) },
        ],
    },
    {
        path: "gate2",
        children: [
            { path: "emp-gate", element: (0, jsx_runtime_1.jsx)(EmpGate_1.default, {}) },
        ],
    },
    ,
    {
        path: "/",
        element: (0, jsx_runtime_1.jsx)(Layout_1.default, {}),
        children: [
            { path: "temporary-contrast", element: (0, jsx_runtime_1.jsx)(TemporaryEmploymentContracts_1.default, {}) },
            { path: "employees", element: (0, jsx_runtime_1.jsx)(Employess_jsx_1.default, {}) },
            { path: "official-employees", element: (0, jsx_runtime_1.jsx)(OfficialEmployees_jsx_1.default, {}) },
            { path: "other-government", element: (0, jsx_runtime_1.jsx)(OfficialsOfAnotherGovernment_jsx_1.default, {}) },
            { path: "dismissd-employees", element: (0, jsx_runtime_1.jsx)(DismissedEmployees_1.default, {}) },
            { path: "older-employees", element: (0, jsx_runtime_1.jsx)(OlderEmployees_1.default, {}) },
            { path: "permenant-contrast", element: (0, jsx_runtime_1.jsx)(PermanentEmploymentContracts_1.default, {}) },
            { path: "suspended-contrast", element: (0, jsx_runtime_1.jsx)(SuspendedEmploymentContracts_1.default, {}) },
            { path: "programs", element: (0, jsx_runtime_1.jsx)(Programs_1.default, {}) },
            { path: "temporary-contrast-employees", element: (0, jsx_runtime_1.jsx)(TemporaryContrastEmployees_1.default, {}) },
            { path: "goverments", element: (0, jsx_runtime_1.jsx)(Goverments_1.default, {}) },
            { path: "emp-type", element: (0, jsx_runtime_1.jsx)(EmpType_1.default, {}) },
            { path: "emp-classifications", element: (0, jsx_runtime_1.jsx)(EmpClassifications_1.default, {}) },
            { path: "categories", element: (0, jsx_runtime_1.jsx)(Categories_1.default, {}) },
            { path: "job-scale", element: (0, jsx_runtime_1.jsx)(JobScale_1.default, {}) },
            { path: "degrees", element: (0, jsx_runtime_1.jsx)(Degree_1.default, {}) },
            { path: "programs2", element: (0, jsx_runtime_1.jsx)(Programs2_1.default, {}) },
            { path: "certificates", element: (0, jsx_runtime_1.jsx)(Certificates_1.default, {}) },
            { path: "departments", element: (0, jsx_runtime_1.jsx)(GovernmentDepartment_1.default, {}) },
            { path: "job-title", element: (0, jsx_runtime_1.jsx)(JobTitle_1.default, {}) },
            { path: "divisions", element: (0, jsx_runtime_1.jsx)(Division_1.default, {}) },
            { path: "section", element: (0, jsx_runtime_1.jsx)(Section_1.default, {}) },
            { path: "dashboard", element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) },
            { path: "unit", element: (0, jsx_runtime_1.jsx)(Unit_1.default, {}) },
            { path: "general-administration", element: (0, jsx_runtime_1.jsx)(GeneralAdminstration_1.default, {}) },
            { path: "branch-offices", element: (0, jsx_runtime_1.jsx)(BranchOffices_1.default, {}) },
            { path: "crossing", element: (0, jsx_runtime_1.jsx)(Crossing_1.default, {}) },
            { path: "employment-status", element: (0, jsx_runtime_1.jsx)(EmploymentStatus_1.default, {}) },
            { path: "bank", element: (0, jsx_runtime_1.jsx)(Bank_1.default, {}) },
            { path: "work-contracts", element: (0, jsx_runtime_1.jsx)(WorkContracts_1.default, {}) },
            { path: "employee-documents", element: (0, jsx_runtime_1.jsx)(EmployeeDocuments_1.default, {}) },
            { path: "course-types", element: (0, jsx_runtime_1.jsx)(CourseTypes_1.default, {}) },
            { path: "course-classifications", element: (0, jsx_runtime_1.jsx)(CourseClassifications_1.default, {}) },
            { path: "academic-certifcates", element: (0, jsx_runtime_1.jsx)(AcademicCertifcates_1.default, {}) },
            { path: "administrative-attachments", element: (0, jsx_runtime_1.jsx)(AdministrativeAttachments_1.default, {}) },
            { path: "add-certificate", element: (0, jsx_runtime_1.jsx)(AddCertificate_1.default, {}) },
            { path: "add-attach", element: (0, jsx_runtime_1.jsx)(AddAttachment_1.default, {}) },
            { path: "/add-employee", element: (0, jsx_runtime_1.jsx)(AddEmployeesforms_1.default, {}) },
            { path: "/training", element: (0, jsx_runtime_1.jsx)(TrainingPage_1.default, {}) },
            // {path: "/emp-gate", element:<EmpGate/>}
        ],
    },
    {
        path: "/emp-dashboard",
        element: (0, jsx_runtime_1.jsx)(EmpDashboard_1.default, {}),
    },
    {
        path: "/add-wife",
        element: (0, jsx_runtime_1.jsx)(AddWifePage_1.default, {}),
    },
    {
        path: "/add-children",
        element: (0, jsx_runtime_1.jsx)(AddChildrenPage_1.default, {}),
    },
    {
        path: "/add-heart",
        element: (0, jsx_runtime_1.jsx)(AddHeartPage_1.default, {}),
    },
    {
        path: "/add-edu-certificate",
        element: (0, jsx_runtime_1.jsx)(AddEduCertificatePage_1.default, {}),
    },
    {
        path: "/profile",
        element: (0, jsx_runtime_1.jsx)(ProfilePage_1.default, {}),
    },
    {
        path: "/martial-status",
        element: (0, jsx_runtime_1.jsx)(MaritalStatusPage_1.default, {}),
    },
    {
        path: "/reset-pass",
        element: (0, jsx_runtime_1.jsx)(ResetPasswordEmpPages_1.default, {}),
    }
]);
exports.default = router;
