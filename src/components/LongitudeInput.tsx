import { useDispatch } from "react-redux";
import { changeLong } from "../states/longitudeSlice";
import { useState } from "react";

const LongitudeInput = () => {
  const [newLong, setNewLong] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLong(Number(e.target.value));
    dispatch(changeLong(Number(e.target.value)));
  };

  return (
    <div>
      <h2>Select Longitude</h2>
      <input type="number" value={newLong} onChange={handleChange} />
    </div>
  );
};

export default LongitudeInput;
