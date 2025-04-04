import React, { useEffect } from 'react';
import Left from './Components/Left';
import Right from './Components/Right';
import './style/style.css';
import 'rsuite/Carousel/styles/index.css';
import { useDispatch } from 'react-redux';
import { getWeatherAsync } from './Store/weather.slice';
import { AppDispatch } from './Store/store';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getWeatherAsync("Kyiv"));
  }, [dispatch])

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
