import React, { useState } from "react";
import Loading from "./Loader/Loading";
import RenderData from "./RenderData";

function Home() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState('');
  const [isHidden, setIshidden] = useState(false);
  const API_KEY = "835320078ae17852f8a55553abf29639";
  console.log(userData);
  
  async function fetchUserWeatherInfo(coordinates) {
    const { lat, lon } = coordinates;
    try {
      setIshidden(true);
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setLoading(false);
    }
  }

  function grantAccessHandler() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

  function showPosition(position) {
    const userCoordinates = {
      lat: position.coords.latitude,
      lon: position.coords.longitude,
    };
    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.");
        break;
      default:
        console.log("An unspecified error occurred.");
    }
  }

  return (
    <div className="h-full w-full flex justify-center items-center">
      {!isHidden && (
        <div className="flex justify-center  items-center flex-col">
          <div className="w-24">
            <img src="src\assets\location.png" alt="" />
          </div>
          <h1 className="text-[30px] font-bold">Grant Location Access</h1>
          <p>Allow Access to get weather Information</p>
          <button
            onClick={grantAccessHandler}
            className="text-white border mt-5 border-black rounded-md px-4 py-1 bg-[#1AA91A]"
          >
            Grant Access
          </button>
        </div>
      )}
      {loading ? <Loading /> : null}

      { userData && (<RenderData userData={userData} />)
      
      }
    </div>
  );
}

export default Home;
