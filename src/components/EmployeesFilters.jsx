function EmployeesFilters() {
  return (
    <div className="employees-filters d-flex justify-content-between align-items-center mt-3" style={{fontSize:'12px'}}>
      <input
        type="text"
        className="form-control w-50"
        placeholder="ابحث عن موظف بالاسم، الهوية، أو أي معلومة متاحة"
      />

      <div className="d-flex align-items-center gap-2" style={{fontSize:'12px'}}>
        <span>عرض</span>
        <select className="form-select" style={{width:'70px',fontSize:'12px'}}>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <span>سجل</span>
      </div>
    </div>
  );
}

export default EmployeesFilters;