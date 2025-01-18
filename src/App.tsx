import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Geolocation from "./components/Geolocation";
import DateInput from "./components/DateInput";
import CoordInput from "./components/CoordInput";

function App() {
  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });
  // }, []);

  return (
    <div>
      <h1>PM 2.5 Predictor 2025</h1>
      <DateInput />
      <h2>Current Coordinnates</h2>
      <Geolocation />
      {/* <Button
        type="reset"
        text="Use coordinates"
        onClick={() => {
          setLat(0);
          setLong(0);
        }}
      /> */}
      {/* <CoordInput
        coord="Latitude"
        pos={lat}
        onChange={(e) => setLat(Number(e.target.value))}
      /> */}
    </div>
  );
}

export default App;
