import React from 'react';
import search from "../img/interface/8666693_search_icon.svg";

const Left = () => {
    
    return (
        <div>
            <div className="col-4">
                <div className="input-city">
                    <input type="text" />
                    <img src={search} alt="" className="search" />
                    <div className="autocomplete" id="autocomplete-container">

                    </div>
                </div>
                <div className="weather-info-wrapper">
                    <div className="weather-picture">
                        <img src="" alt=""
                            className="weather-icon img-fluid" />
                    </div>
                    <div className="weather-info">
                        <p className="temperature">
                            0°C
                        </p>
                        <p className="weather-state">

                        </p>
                    </div>
                    <div className="date-time-info">
                        <p className="date"></p>
                        <p className="time"></p>
                        <p className="day"></p>
                    </div>
                    <div className="city">
                        <p></p>
                        <img src="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
