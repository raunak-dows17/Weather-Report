import React, { useState } from "react";
import "./displayweather.css";

const DisplayWeather = (props) => {
  const { data } = props;
  const [loading, setLoading] = useState(false);
  const iconurl =
    "http://openweathermap.org/img/wn/" +
    `${data.cod !== 404 ? data.weather[0].icon : null}` +
        ".png";

  return (
    <div className="displayweather">
      {data.cod !== 404 ? (
        <React.Fragment>
          <div className="maincard">
            <span className="cardtitle">
              {data.name}, {data.sys.country}.{" "}
            </span>
            <span className="cardsubtitle">
              {new Date().toLocaleTimeString()}
            </span>

            <h1>
              {" "}
              {Math.floor(data.main.temp - 273.15)}
              <sup> o</sup>C
            </h1>
            <div className="weather-details">
              <span className="weather-main">{data.weather[0].main}</span>
              <img src={iconurl} className="weather-icon" alt="" />
              <span className="weather-description">
                {" "}
                {data.weather[0].description}
              </span>
            </div>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>High/Low</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(data.main.temp_max - 273.15)}/
                      {Math.floor(data.main.temp_min - 273.15)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Humidity</h4>
                  </td>
                  <td>
                    <span>{data.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Visibility</h4>
                  </td>
                  <td>
                    <span>{data.visibility / 1000} Kms</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Wind</h4>
                  </td>
                  <td>
                    <span>{Math.floor((data.wind.speed * 18) / 5)} kms/hr</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunrise</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sunset</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <div className="maincard">
          <h2>{data.message}</h2>
        </div>
      )}
    </div>
  );
};

export default DisplayWeather;
