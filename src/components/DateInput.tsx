import { useDispatch, useSelector } from "react-redux";
import { changeDate } from "../states/dateSlice";
import { RootState } from "../states/store";
import { useState } from "react";

const DateInput = () => {
  const date = useSelector((state: RootState) => state.date.value);
  const [newDate, setNewDate] = useState("2025-01-01");
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDate(e.target.value);
    dispatch(changeDate(e.target.value));
  };

  return (
    <div>
      <h2>Select date</h2>
      <input type="date" value={newDate} onChange={handleChange} />
      <h3>Selected date: {date}</h3>
    </div>
  );
};

export default DateInput;
