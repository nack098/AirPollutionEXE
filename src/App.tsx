import "./App.css";
import Geolocation from "./components/Geolocation";
import DateInput from "./components/DateInput";
import LatitudeInput from "./components/LatitudeInput";
import LongitudeInput from "./components/LongitudeInput";
import { useSelector } from "react-redux";
import { RootState } from "./states/store";

function App() {
  const date = useSelector((state: RootState) => state.date.value);
  const lat = useSelector((state: RootState) => state.lat.value);
  const long = useSelector((state: RootState) => state.long.value);
  return (
    <div>
      <h1>PM 2.5 Predictor 2025</h1>
      <DateInput />
      <h3>Selected date: {date}</h3>
      <Geolocation />
      <LatitudeInput />
      <LongitudeInput />
      <h3>Selected latitude: {lat}</h3>
      <h3>Selected longitude: {long}</h3>
    </div>
  );
}

export default App;
