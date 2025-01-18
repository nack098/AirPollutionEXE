import { useSelector, useDispatch } from "react-redux";
import { changePm } from "../states/pmSlice";
import { useState } from "react";
import { RootState } from "../states/store";

const PmPredictButton = () => {
    const date = useSelector((state: RootState) => state.date.value);
    const lat = useSelector((state: RootState) => state.lat.value);
    const long = useSelector((state: RootState) => state.long.value);
    const dispatch = useDispatch();

    const data = {
      date: {date},
      lat: {lat},
      long: {long}
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
  
    async function fetchRandomNumber() {
      const response = await fetch('http://127.0.0.1:5000/api/data', requestOptions);
      console.log(response);
    }
  
    return (
      <button onClick={() => fetchRandomNumber()}>
        Predict
      </button>
    );
  };
  
  export default PmPredictButton;