<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
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
>>>>>>> 911ce17d5a9ebb82c4ea8b3120ed2f9674d6f1ac
