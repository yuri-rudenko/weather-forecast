import React from 'react';
import { Carousel } from 'rsuite';
import { RootState } from '../Store/store';
import { useSelector } from 'react-redux';

const WeatherCarousel = () => {

    const data = useSelector((state: RootState) => state.weather.data);
    const activeDay = useSelector((state: RootState) => state.weather.activeDay);

    const curDay = data?.forecast.forecastday[activeDay];

    return (
        <Carousel style={{ height: '150px', width: "fit-content" }}>
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
