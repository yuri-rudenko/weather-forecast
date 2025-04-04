import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import getDate from '../functions/getDate';
import getFlagLink from '../functions/getFlagLink';
import { getWeatherAsync } from '../Store/weather.slice';
import { Dropdown } from 'rsuite';
import 'rsuite/Dropdown/styles/index.css';
import getAutoSuggest, { City } from '../http/getAutoSuggest';

const Left = () => {

    const data = useSelector((state: RootState) => state.weather.data);

    let code = data?.current.condition.icon.slice(-7, -4)
    if (!code) code = '103';

    const imageUrl = `http://localhost:3000/img/weather/${data?.current.is_day ? 'day' : 'night'}/${code}.png`;
    let curDate = getDate(new Date(data?.location.localtime || Date.now()));

    const [inputText, setInputText] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const [cities, setCities] = useState<City[]>([]);

    const dispatch = useDispatch<AppDispatch>();

    const changeCity = (city: string) => {
        dispatch(getWeatherAsync(city));
        setOpen(false);
    };

    async function getSug(value: string) {
        const result = await getAutoSuggest(value);
        if (!result) return;
        setCities(result);
    }

    useEffect(() => {
        if (inputText.length > 2) {
            getSug(inputText)
            setOpen(true)
        }
        else {
            setOpen(false)
        }
        if (cities.length === 0) setOpen(false);
    }, [inputText]);

    useEffect(() => {
        const handleKeyDown = (ev: KeyboardEvent) => {
            if (ev.key === "Enter") {
                ev.preventDefault();

                if (inputText.length > 2) {
                    changeCity(inputText);
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [inputText]);


    return (
        <div>
            <div className="col-4">
                <div className="input-city">
                    <Dropdown
                        open={open}
                        renderToggle={() => (
                            <input
                                onFocus={() => {
                                    if (inputText.length > 2) setOpen(true);
                                }}
                                onBlur={() => {
                                    setTimeout(() => setOpen(false), 100);
                                }}
                                onChange={(e) => setInputText(e.target.value)}
                                type="text"
                                value={inputText}
                            />
                        )}
                    >
                        {cities.map((city, index) => (
                            <Dropdown.Item
                                key={city.url + index}
                                onClick={() => changeCity(`${city.name}, ${city.country}`)}
                            >
                                {city.name}, {city.country}
                            </Dropdown.Item>
                        ))}
                    </Dropdown>
                    <img onClick={() => {
                        if (inputText.length > 2) {
                            changeCity(inputText);
                        }
                    }} 
                    src="/img/interface/8666693_search_icon.svg" alt="Search Icon" className='search' style={{cursor: "pointer"}}/>
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
                        <img src={getFlagLink(data?.location.country || '')} alt={data?.location.country} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Left;
