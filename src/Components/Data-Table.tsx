import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import getWindDirection from '../functions/getWindDirection';
import getUV from '../functions/getUV';

const DataTable = () => {

    const data = useSelector((state: RootState) => state.weather.data);
    const activeDay = useSelector((state: RootState) => state.weather.activeDay);
    const curDay = data?.forecast.forecastday[activeDay];

    return (
        <div className="table-container">

            <div className="col wind">
                <p className="wind-wind small-text_">Wind</p>
                <p className="wind-speed big-text_">{curDay?.day.maxwind_kph} km/h</p>
                <p className="wind-direction medium-text_">{getWindDirection(curDay?.hour[14].wind_degree || 0)}</p>
            </div>
            <div className="col humidity">
                <p className="humidity-humidity small-text_">Humidity</p>
                <p className="humidity-percent big-text_">{curDay?.day.avghumidity}%</p>
            </div>
            <div className="col feel">
                <p className="feel-feel small-text_">Avarage temp.</p>
                <p className="feel-degrees big-text_">{curDay?.day.avgtemp_c}°C</p>
            </div>

            <div className="col index">
                <p className="index-index small-text_">UV Index</p>
                <p className="index-number big-text_">{curDay?.day.uv}</p>
                <p className="index-moderate medium-text_">{getUV(curDay?.day.uv || 5)}</p>
            </div>
            <div className="col pressure">
                <p className="pressure-pressure small-text_">Pressure</p>
                <p className="pressure-amount big-text_">{activeDay === 0 ? data?.current.pressure_mb : '-'} mb</p>
            </div>
            <div className="col rain">
                <p className="rain-rain small-text_">Chance of rain</p>
                <p className="rain-percent big-text_">{curDay?.day.daily_chance_of_rain}%</p>
            </div>

            <div className="col sun temp">
                <p className="small-text_ sun-sun">Temperature</p>
                <div className="sun-container">
                    <div className="sun-rise-container">
                        <p className="temp-rise-rise sr-info medium-text_">Min</p>
                        <p className="temp-min sr-time medium-text_">{curDay?.day.mintemp_c}°C</p>
                    </div>
                    <div className="sun-set-container">
                        <p className="temp-set-set sr-info  medium-text_">Max</p>
                        <p className="temp-max sr-time medium-text_">{curDay?.day.maxtemp_c}°C</p>
                    </div>
                </div>
            </div>
            <div className="col sun sun-sun">
                <p className="small-text_ sun-sun">Sun</p>
                <div className="sun-container">
                    <div className="sun-rise-container">
                        <p className="sun-rise-rise sr-info medium-text_">Rise</p>
                        <p className="sun-rise-time sr-time medium-text_">{curDay?.astro.sunrise}</p>
                    </div>
                    <div className="sun-set-container">
                        <p className="sun-set-set sr-info  medium-text_">Set</p>
                        <p className="sun-set-time sr-time medium-text_">{curDay?.astro.sunset}</p>
                    </div>
                </div>
            </div>
            <div className="col moon">
                <p className="small-text_ moon-moon">Moon</p>
                <div className="moon-container">
                    <div className="moon-rise-container">
                        <p className="moon-rise-rise sr-info medium-text_">Rise</p>
                        <p className="moon-rise-time sr-time medium-text_">{curDay?.astro.moonrise}</p>
                    </div>
                    <div className="moon-set-container">
                        <p className="moon-set-set sr-info medium-text_">Set</p>
                        <p className="moon-set-time sr-time  medium-text_">{curDay?.astro.moonset}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
