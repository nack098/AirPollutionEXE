import { useDispatch } from "react-redux";
import { changeLat } from "../states/latitudeSlice";
import { useState } from "react";

const LatitudeInput = () => {
  const [newLat, setNewLat] = useState(0);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLat(Number(e.target.value));
    dispatch(changeLat(Number(e.target.value)));
  };

  return (
    <div>
      <h2>Select Latitude</h2>
      <input type="number" value={newLat} onChange={handleChange} />
    </div>
  );
};

export default LatitudeInput;
