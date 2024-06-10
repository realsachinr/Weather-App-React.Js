import React, { useState } from "react";
import RenderData from "./RenderData";
import Loading from "./Loader/Loading";

function Search() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [userData, setUserData] = useState(null);
  const API_KEY = "835320078ae17852f8a55553abf29639";

  const submitHandler = async (event) => {
    event.preventDefault();
    if (city.trim() !== "") {
      await fetchSearchData(city);
    } else {
      alert("Please Enter City Name");
    }
  };

  const changeHandler = (event) => {
    setCity(event.target.value);
  };

  const fetchSearchData = async (city) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setUserData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false); // Make sure to set loading to false even if there's an error
    }
  };

  return (
    <div className="flex items-center flex-col justify-center">
      <div className="flex gap-5 pt-8 pb-9">
        <input
          type="text"
          className="outline-none rounded-md py-1 px-3 w-[20rem]"
          value={city}
          onChange={changeHandler}
        />
        <button
          onClick={submitHandler}
          className="active:text-white border border-gray-800 py-1 bg-slate-400 rounded-md px-4"
        >
          Search
        </button>
      </div>
      <br />
      {loading && <Loading />}

      {userData && <RenderData userData={userData} />}
    </div>
  );
}

export default Search;
