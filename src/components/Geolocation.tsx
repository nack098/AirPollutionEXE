import { useGeolocated } from "react-geolocated";
import { changeLat } from "../states/latitudeSlice";
import { changeLong } from "../states/longitudeSlice";
import { useDispatch } from "react-redux";

const Geolocation = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      userDecisionTimeout: 5000,
    });

  const dispatch = useDispatch();

  return !isGeolocationAvailable ? (
    <div>Your browser does not support Geolocation</div>
  ) : !isGeolocationEnabled ? (
    <div>Geolocation is not enabled</div>
  ) : coords ? (
    <div>
      <h2>Current Coordinnates</h2>
      <p>Latitude: {coords.latitude}</p>
      <p>Longitude: {coords.longitude}</p>
      <button
        onClick={() => {
          dispatch(changeLat(coords.latitude));
          dispatch(changeLong(coords.longitude));
        }}
      >
        Use current coordinates
      </button>
    </div>
  ) : (
    <div>Getting the location data&hellip; </div>
  );
};

export default Geolocation;
