import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import getDate from '../functions/getDate';
import getFlagLink from '../functions/getFlagLink';

const Left = () => {

    const data = useSelector((state: RootState) => state.weather.data);

    let code = data?.current.condition.icon.slice(-7, -4)
    if(!code) code = '103';

    const imageUrl = `http://localhost:3000/img/weather/${data?.current.is_day ? 'day': 'night'}/${code}.png`;
    let curDate = getDate(new Date(data?.location.localtime || Date.now()));

    return (
        <div>
            <div className="col-4">
                <div className="input-city">
                    <input type="text" />
                    <img src="/img/interface/8666693_search_icon.svg" alt="Search Icon" className='search' />
                    <div className="autocomplete" id="autocomplete-container">

                    </div>
                </div>
                <div className="weather-info-wrapper">
                    <div className="weather-picture">
                        <img src={imageUrl} alt={data?.current.condition.text}
                            className="weather-icon img-fluid" />
                    </div>
                    <div className="weather-info">
                        <p className="temperature">
                            {data?.current.temp_c} C°
                        </p>
                        <p className="weather-state">
                            {data?.current.condition.text}
                        </p>
                    </div>
                    <div className="date-time-info">
                        <p className="date">{curDate.day}-{curDate.month}-{curDate.year}</p>
                        <p className="time">{`${curDate.weekDay}, ${curDate.time}`}</p>
                        <p className="day">{data?.current.is_day ? "Day" : "Night"}</p>
                    </div>
                    <div className="city">
                        <p>{data?.location.name}</p>
                        <img src={getFlagLink(data?.location.country || '')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
