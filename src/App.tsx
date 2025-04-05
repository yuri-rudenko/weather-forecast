import React, { useEffect } from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import './style/style.css';
import './style/adaptive.css';
import { useDispatch } from 'react-redux';
import { getWeatherAsync, setWeather } from './Store/weather.slice';
import { AppDispatch } from './Store/store';
import isGreaterDate from './functions/isGreaterDate';
import WeatherResponse from './http/weather-interface';

interface LocalWeather {
  data: WeatherResponse,
  created: string
}

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const foundItemString = localStorage.getItem('weatherData');
    if (foundItemString) {
      const foundItem: LocalWeather = JSON.parse(foundItemString);
      const itemDate = new Date(foundItem.created);

      if (!foundItem || isGreaterDate(itemDate, new Date(Date.now()))) {
        dispatch(getWeatherAsync("Kyiv"));
      }
      else {
        dispatch(setWeather(foundItem.data));
      }
    } else {
      dispatch(getWeatherAsync("Kyiv"));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <div className="container main-cont overflow-hidden">
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
