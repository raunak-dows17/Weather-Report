import React, { useState } from "react";
import "./weather.css";
import DisplayWeather from "./DisplayWeather";
import logo from "../Assets/icons8-rain-cloud.gif";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "New Delhi",
  });

  const APIKEY = "2479ee2f5a4611b54a6b2598bf697f0c";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city === "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
  };

  return (
    <div className="weather">
      <span>
        <img src={logo} alt="" className="image" />
        {" "}
      </span>
      <span className="title">Weather</span>
      <br />
      <form>
        <input
          type="text"
          placeholder={form.city}
          name="city"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data !== undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
