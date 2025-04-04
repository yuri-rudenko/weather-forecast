import React, { useEffect, useState } from 'react';
import WeatherCarousel from './WeatherCarousel';
import DataTable from './Data-Table';
import { getWeather } from '../http/getWeather';

const days: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const Right = () => {

    const [futureDays, setFutureDays] = useState<string[]>([]);
    const today: Date = new Date();

    useEffect(() => {
        const newFutureDays: string[] = [];

        for (let i = 0; i < 1; i++) {
            let futureDate: Date = new Date(today);
            futureDate.setDate(today.getDate() + i + 2);
            let weekday: string = days[futureDate.getDay()];
            newFutureDays.push(weekday);
        }

        getWeather("svalbard")

        setFutureDays(newFutureDays);
    }, []);

    return (
        <div>
            <div className="col right-col">
                <nav className="navbar">
                    <div className="nav-item">
                        <p className="nav-link">Today</p>
                    </div>
                    <div className="nav-item">
                        <p className="nav-link">Tomorrow</p>
                    </div>
                    {futureDays.map(day => (
                        <div key={day} className="nav-item">
                            <p className="nav-link">{day}</p>
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
