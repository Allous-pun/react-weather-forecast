import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchOnClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  

  const handleSearchOnLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4 ">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city..."
          className="text-md text-slate-600  p-2 w-full shadow-xl placeholder:font-thin placeholder:text-sm focus:outline-none rounded-lg capitalize"
        />
        <UilSearch
          size={25}
          onClick={handleSearchOnClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
        <UilLocationPoint
          size={25}
          onClick={handleSearchOnLocationClick}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
        />
      </div>
      
    </div>
  );
};

export default Inputs;
