import React from 'react';

const DataTable = () => {
    return (
        <div className="table-container">

            <div className="col wind">
                <p className="wind-wind small-text_">Wind</p>
                <p className="wind-speed big-text_">0 km/h</p>
                <p className="wind-direction medium-text_">East</p>
            </div>
            <div className="col humidity">
                <p className="humidity-humidity small-text_">Humidity</p>
                <p className="humidity-percent big-text_">0%</p>
            </div>
            <div className="col feel">
                <p className="feel-feel small-text_">Real Feel</p>
                <p className="feel-degrees big-text_">0°C</p>
            </div>

            <div className="col index">
                <p className="index-index small-text_">UV Index</p>
                <p className="index-number big-text_">0</p>
                <p className="index-moderate medium-text_">Moderate</p>
            </div>
            <div className="col pressure">
                <p className="pressure-pressure small-text_">Pressure</p>
                <p className="pressure-amount big-text_">1000 mb</p>
            </div>
            <div className="col rain">
                <p className="rain-rain small-text_">Chance of rain</p>
                <p className="rain-percent big-text_">0%</p>
            </div>

            <div className="col sun temp">
                <p className="small-text_ sun-sun">Temperature</p>
                <div className="sun-container">
                    <div className="sun-rise-container">
                        <p className="temp-rise-rise sr-info medium-text_">Min</p>
                        <p className="temp-min sr-time medium-text_">0</p>
                    </div>
                    <div className="sun-set-container">
                        <p className="temp-set-set sr-info  medium-text_">Max</p>
                        <p className="temp-max sr-time medium-text_">0</p>
                    </div>
                </div>
            </div>
            <div className="col sun sun-sun">
                <p className="small-text_ sun-sun">Sun</p>
                <div className="sun-container">
                    <div className="sun-rise-container">
                        <p className="sun-rise-rise sr-info medium-text_">Rise</p>
                        <p className="sun-rise-time sr-time medium-text_">0 am</p>
                    </div>
                    <div className="sun-set-container">
                        <p className="sun-set-set sr-info  medium-text_">Set</p>
                        <p className="sun-set-time sr-time medium-text_">0 am</p>
                    </div>
                </div>
            </div>
            <div className="col moon">
                <p className="small-text_ moon-moon">Moon</p>
                <div className="moon-container">
                    <div className="moon-rise-container">
                        <p className="moon-rise-rise sr-info medium-text_">Rise</p>
                        <p className="moon-rise-time sr-time medium-text_">0 am</p>
                    </div>
                    <div className="moon-set-container">
                        <p className="moon-set-set sr-info medium-text_">Set</p>
                        <p className="moon-set-time sr-time  medium-text_"> am</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DataTable;
