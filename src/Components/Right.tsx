import React, { useEffect, useState } from 'react';
import WeatherCarousel from './WeatherCarousel';
import DataTable from './Data-Table';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../Store/store';
import { changeActiveDay } from '../Store/weather.slice';

const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Right = () => {

    const [futureDays, setFutureDays] = useState<string[]>([]);
    const today: Date = new Date();
    const activeDay = useSelector((state: RootState) => state.weather.activeDay);

    const dispatch = useDispatch<AppDispatch>();

    const handleDayChange = (day: number) => {
        dispatch(changeActiveDay({ activeDay: day }));
    };

    useEffect(() => {

        const newFutureDays: string[] = [];

        for (let i = 0; i < 1; i++) {
            let futureDate: Date = new Date(today);
            futureDate.setDate(today.getDate() + i + 2);
            let weekday: string = days[futureDate.getDay()];
            newFutureDays.push(weekday);
        }

        setFutureDays(newFutureDays);

    }, []);

    return (
        <div>
            <div className="col right-col">
                <nav className="navbar">
                    <div onClick={() => handleDayChange(0)} className="nav-item">
                        <p style={{color: activeDay === 0 ? "black" : "rgba(0, 0, 0, 0.65)"}} className="nav-link">Today</p>
                    </div>
                    <div onClick={() => handleDayChange(1)} className="nav-item">
                        <p style={{color: activeDay === 1 ? "black" : "rgba(0, 0, 0, 0.65)"}} className="nav-link">Tomorrow</p>
                    </div>
                    {futureDays.map((day, index) => (
                        <div onClick={() => handleDayChange(index+2)} key={day} className="nav-item">
                            <p style={{color: activeDay === index+2 ? "black" : "rgba(0, 0, 0, 0.65)"}} className="nav-link">{day}</p>
                        </div>
                    ))}
                </nav>
                <div className="container">
                    <div className="row carousel-main">
                        <div className="carousel-inner">
                            <WeatherCarousel />
                        </div>
                    </div>

                    <DataTable />

                </div>
                <div className="bottom-text">
                    <p>All data provided by</p>
                    <a href="https://www.weatherapi.com" rel="noreferrer" target="_blank">Weather API</a>
                </div>
            </div>
        </div>
    );
}

export default Right;
