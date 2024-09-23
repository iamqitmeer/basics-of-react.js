import React, { useEffect, useState } from 'react';

const App = () => {
  let [weatherData, setWeatherData] = useState(null)
  let [input, setInput] = useState("Karachi")


  useEffect(() => {
    getWeatherData()
  }, [])

  let getWeatherData = () => {
    try {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${"055b354669952ef35434839dff99e3f8"}`)
        .then(res => res.json()).then(data => setWeatherData(data))
    } catch (err) {
      console.log(err);
    }
  }

  console.log(weatherData);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-10 rounded-3xl shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-extrabold mb-8 text-center">Weather App</h1>
        <div className="flex mb-8">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-600 bg-gray-700 text-white rounded-l-3xl p-4 w-full text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            placeholder="Enter city name"
          />
          <button
            className="bg-blue-600 text-white rounded-r-3xl p-4 ml-2 text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 "
            onClick={getWeatherData}
          >
            Search
          </button>
        </div>
        {weatherData && weatherData.cod !== "404" ? <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-2">{weatherData.name}</h2>
          <p className="text-6xl font-extrabold mb-6">{Math.round(weatherData.main.temp - 273.15)}°C</p>
          <div className="flex justify-between bg-gray-700 p-6 rounded-2xl mb-6">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">Humidity</h3>
              <p className="text-3xl font-bold">{weatherData.main.humidity}%</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-2 text-gray-300">Wind</h3>
              <p className="text-3xl font-bold">{weatherData.wind.speed}%</p>
            </div>
          </div>
          <p className="mt-4 text-xl italic text-gray-400">{weatherData.weather[0].description}</p>
        </div> : <h1>Np Data Found!</h1>}
      </div>
    </div>
  );
}

export default App;
