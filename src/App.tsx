import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Mapping from "./components/LocationMap";

function App() {
  const [date, setDate] = useState("");
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  return (
    <div>
      <h1>PM 2.5 Predictor 2025</h1>
      <div>
        <h2>Select a date</h2>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <h2>Today is {date}</h2>
      </div>
      <Button
        type="reset"
        text="Submit"
        onClick={() => console.log("Submitted")}
      />
      <h2>Current Coordinnates</h2>
      <Mapping />
    </div>
  );
}

export default App;
