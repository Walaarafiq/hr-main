import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function MonthYearRangePicker({ onSelectRange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleApply = () => {
    if (!startDate || !endDate) {
      alert("اختر كل من البداية والنهاية");
      return;
    }
    if (startDate > endDate) {
      alert("تأكد أن بداية الفترة قبل النهاية");
      return;
    }
    onSelectRange({
      start: { year: startDate.getFullYear(), month: startDate.getMonth() + 1 },
      end: { year: endDate.getFullYear(), month: endDate.getMonth() + 1 },
    });
  };

  return (
    <div className="text-center mb-4">
      <h6 className="mb-3 mt-2">اختر الفترة لعرض الموظفين المتقاعدين خلالها</h6>

      <div className="d-flex justify-content-center gap-3 flex-wrap mb-3">
        <div>
          <strong>من:</strong>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="اختر الشهر والسنة"
            className="form-control mt-1"
          />
        </div>

        <div>
          <strong>إلى:</strong>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            placeholderText="اختر الشهر والسنة"
            className="form-control mt-1"
          />
        </div>
      </div>
    </div>
  );
}

export default MonthYearRangePicker;
