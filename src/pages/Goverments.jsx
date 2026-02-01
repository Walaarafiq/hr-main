import { useState } from "react";
import GovermentsHeader from "../components/GovermentsHeader";
import GovermentsTable from "../components/GovermentsTable";

const initialEmployees = [
  { id: 1, GovName: "وزارة الإقتصاد", EmpNum: "974334252" },
  { id: 2, GovName: "وزارة الصحة", EmpNum: "974334252" },
  { id: 3, GovName: "وزارة العمل", EmpNum: "974334252" },
  { id: 4, GovName: "وزارة المالية", EmpNum: "974334252" },
  { id: 5, GovName: "وزارة الصحة", EmpNum: "974334252" },
];

function Goverments() {
  const [employees, setEmployees] = useState(initialEmployees);

  const handleAddItem = (item) => {
    setEmployees(prev => [
      ...prev,
      {
        id: Date.now(),
        GovName: item.name,
        EmpNum: item.secondValue || "-"
      }
    ]);
  };

  return (
    <>
      <GovermentsHeader
        title="الوزارت"
        desc="يمكنك إدارة البيانات المرجعية وإضافة أو تعديل أو حذف القيم."
        onAddItem={handleAddItem}
      />

      <GovermentsTable employees={employees} setEmployees={setEmployees} />
    </>
  );
}

export default Goverments;
