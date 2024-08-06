import React, { useEffect, useState } from "react";

function App() {
  let [city, setCity] = useState("");
let [weatherData,setWeatherData] = useState()

  function handleCityChange(e) {
    setCity(e.target.value);
  }

  async function fetchWeather() {
    try {
      let res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"055b354669952ef35434839dff99e3f8"}`
      );
      let convertInJson = await res.json();
      console.log(convertInJson);
      setWeatherData(convertInJson);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    fetchWeather();
  }

  return (
    <div className="flex items-center justify-center bg-[#8fe0ff] w-full h-screen">
      <div className="bg-[#2b235a] flex-col flex items-center justify-center  rounded-3xl w-[400px] h-[500px]">
        <div>
          <input
            value={city}
            onChange={handleCityChange}
            placeholder="Enter City Name"
            type="text"
            className="m-2 w-[250px] px-4 py-2 rounded-3xl outline-none border-none bg-[#54416d] text-white"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 rounded-3xl outline-none border-none bg-[#54416d] text-white"
          >
            Search
          </button>
        </div>
        {weatherData ? <div className="text-center">
          <h1 className="text-7xl text-white font-bold m-4">{Math.floor(weatherData.main.temp - 273.15)}°C</h1>
          <h1 className="text-3xl text-white font-medium m-4">{weatherData.name}</h1>
        </div> : <h1 className="text-2xl text-white">Nothing</h1>}
      </div>
    </div>
  );
}

export default App;
