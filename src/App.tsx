import React, { useEffect } from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import './style/style.css';
import './style/loader.css';
import './style/adaptive.css';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherAsync, setLoading, setWeather } from './Store/weather.slice';
import { AppDispatch, RootState } from './Store/store';
import isGreaterDate from './functions/isGreaterDate';
import WeatherResponse from './http/weather-interface';

const getStarerData = async function (dispatch: AppDispatch): Promise<void> {
  dispatch(setLoading(true));
  const foundItemString = localStorage.getItem('weatherData');
  if (foundItemString) {
    const foundItem: LocalWeather = JSON.parse(foundItemString);
    const itemDate = new Date(foundItem.created);

    if (!foundItem || isGreaterDate(itemDate, new Date(Date.now()))) {
      await dispatch(getWeatherAsync("Kyiv"));
    }
    else {
      dispatch(setWeather(foundItem.data));
    }
  } else {
    await dispatch(getWeatherAsync("Kyiv"));
  }
  dispatch(setLoading(false));
}

interface LocalWeather {
  data: WeatherResponse,
  created: string
}

function App() {

  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.weather.loading);

  useEffect(() => {
    getStarerData(dispatch);
  }, [dispatch]);

  return (
    <div className="App">
      {loading ?
        <div className="loader"></div>
        : <div className="container main-cont overflow-hidden">
          <Left />
          <Right />
        </div>
      }
    </div>
  );
}

export default App;
