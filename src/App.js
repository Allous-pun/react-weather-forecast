import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempDetails from "./components/TempDetails";
import Forecast from "./components/Forecast";
import getWeatherData from "./services/WeatherService";
import getFormattedWeatherData from "./services/WeatherService";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [query, setQuery] = useState({ q: "nairobi" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
 

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query, units).then((data) => {
        setWeather(data);
      });
     
    };
    fetchWeather();
     
  }, [query, units]);


  return (
    <div className=" bg-slate-900 max-h-full min-h-screen">
      <div className={` mx-auto max-w-screen-md min-h-screen py-5 px-32 bg-gradient-to-r from-[rgb(15,23,42)] via-[rgb(88,28,135)] to-[rgb(15,23,42) rounded-lg`}>
        <TopButton setQuery={setQuery}/>
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>
        {weather && (
          <div>
            <TimeAndLocation weather={weather}/>
            <TempDetails weather={weather}/>
            <Forecast title="hourly forecast" items={weather.hourly} />
            <Forecast title="daily forecast" items={weather.daily} />
            <Footer/>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
