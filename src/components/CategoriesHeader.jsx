import React, { useState } from "react";
import AddCategoryModal from "./AddCategoryModal"; // مودال إضافة قيمة جديدة

function CategoriesHeader({ title, desc, onAddCategory }) {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <>
      <div className="employees-header d-flex justify-content-between align-items-center">
        <div>
          <h4 style={{ textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
            {title}
          </h4>
          <p style={{ fontSize: "14px" }}>{desc}</p>
        </div>
        <div>
          
          <button
            className="btn btn-dark"
            style={{ fontSize: "13px", padding: "6px 10px" }}
            onClick={() => setShowAddModal(true)}>
            إضافة قيمة جديدة
          </button>
        </div>
      </div>
 <p className="" style={{backgroundColor:'#Add8e6',color:'grey',paddingRight:'10px',paddingLeft:'10px',
            paddingTop:'10px',paddingBottom:'10px'}}>يمكن للإداري ادخال قيم للموظفين الذين لا يمتلكون التصنيف من خلال تعديل بيانات الموظفين</p>
        
      {showAddModal && (
        <AddCategoryModal
          onClose={() => setShowAddModal(false)}
          onSave={(category) => {
            onAddCategory(category);
            setShowAddModal(false);
          }}
        />
      )}
    </>
  );
}

export default CategoriesHeader;
