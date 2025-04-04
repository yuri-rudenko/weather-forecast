import React, { useEffect, useState } from 'react';
import { Carousel } from 'rsuite';
import { RootState } from '../Store/store';
import { useSelector } from 'react-redux';
import 'rsuite/Carousel/styles/index.css';

function getDayQuarter(date: Date): number {
    const hour = date.getHours();

    if (hour < 6) return 0;
    if (hour < 12) return 1;
    if (hour < 18) return 2;
    return 3;
}

const WeatherCarousel = () => {

    const data = useSelector((state: RootState) => state.weather.data);
    const activeDay = useSelector((state: RootState) => state.weather.activeDay);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const curDay = data?.forecast.forecastday[activeDay];

    useEffect(() => {
        setActiveIndex(getDayQuarter(new Date(data?.location.localtime || Date.now())));
    }, [data])

    return (
        <Carousel activeIndex={activeIndex} onSelect={index => { setActiveIndex(index) }} style={{ height: 'fit-content', width: "fit-content", paddingBottom: "15px", backgroundColor: "transparent" }}>
            {Array.from({ length: 4 }).map((_, i) => {
                const start = i * 6;
                const end = start + 6;

                return (
                    <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={i}>
                        <div className="row daily-weather">
                            {curDay?.hour?.slice(start, end)?.map((day, k) => {

                                let code = day.condition.icon?.slice(-7, -4) || '103';

                                const imageUrl = `http://localhost:3000/img/weather/${data?.current.is_day ? 'day' : 'night'}/${encodeURIComponent(code)}.png`;

                                return (
                                    <div className="col" key={k}>
                                        <p className="time">{day.time.slice(-5)}</p>
                                        <img src={imageUrl} alt={day.condition.text} />
                                        <p className="temperature">{day.temp_c}°C</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </Carousel>
    );

}


export default WeatherCarousel;
