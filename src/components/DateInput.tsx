import { useDispatch } from "react-redux";
import { changeDate } from "../states/dateSlice";
import { useState } from "react";

const DateInput = () => {
  const [newDate, setNewDate] = useState("2025-01-01");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
    dispatch(changeDate(e.target.value));
  };

  return (
    <div>
      <h2>Select Date</h2>
      <input type="date" value={newDate} onChange={handleChange} />
    </div>
  );
};

export default DateInput;
