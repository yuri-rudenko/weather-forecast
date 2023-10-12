import { renderCity } from "./renderCity.js"

export function getWeather(city) {
    let url = `http://api.weatherapi.com/v1/forecast.json?key=9ab729aaa6834a76be0115437230910&q=${city}&days=2&aqi=no&alerts=no`
    fetch(url)
        .then((response) => response.json())
        .then(data => renderCity(data))
        .catch((error) => console.error(error))
};