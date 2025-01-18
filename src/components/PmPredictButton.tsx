import { useSelector, useDispatch } from "react-redux";
import { changePm } from "../states/pmSlice";
import { useState } from "react";
import { RootState } from "../states/store";

const PmPredictButton = () => {
    const date = useSelector((state: RootState) => state.date.value);
    const lat = useSelector((state: RootState) => state.lat.value);
    const long = useSelector((state: RootState) => state.long.value);
    const pm = useSelector((state: RootState) => state.pm.value);
    const [newPm, setNewPm] = useState(0);
    const dispatch = useDispatch();
  
    function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
      setNewPm(Math.floor(Math.random() * 100));
    };
  
    return (
      <button onClick={clickHandler}>
        Predict
      </button>
    );
  };
  
  export default PmPredictButton;