import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

const TempDetails = ({ weather: {description, icon, temp, temp_min, temp_max, sunrise, sunset, speed, humidity, feels_like, timezone} }) => {
  return (
    <div>
      <div className="flex items-center justify-center py-5 text-xl text-cyan-300">
        <p>{description}</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3 ">
        <img src={iconUrlFromCode(icon)} alt={description} className=" w-20 rounded-lg " />
        <p className="text-3xl">{temp.toFixed()-273}°C</p>
        <div className="flex flex-col space-y-2 ">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperature size={18} className="" />
            Feels Like:
            <span className="ml-1 font-medium">{feels_like.toFixed()-273}°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="" />
            Humidity:
            <span className="ml-1 font-medium">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="" />
            Wind:
            <span className="ml-1 font-medium">{speed.toFixed()}km/h</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
        <UilSun />
        <p className="font-light text-xs">
          Rise: <span className="font-medium  ml-1">{formatToLocalTime(sunrise, timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light text-xs">|</p>
        <UilSunset />
        <p className="font-light text-xs">
          Set: <span className="font-medium  ml-1">{formatToLocalTime(sunset, timezone,'hh:mm a')}</span>
        </p>
        <p className="font-light text-xs">|</p>
        <UilArrowUp />
        <p className="font-light text-xs">
          High: <span className="font-medium ml-1">{temp_max.toFixed()-273}°C</span>
        </p>
        <p className="font-light text-xs">|</p>
        <UilArrowDown />
        <p className="font-light text-xs">
          Low: <span className="font-medium ml-1">{temp_min.toFixed()-273}°C</span>
        </p>
      </div>
    </div>
  );
};

export default TempDetails;
