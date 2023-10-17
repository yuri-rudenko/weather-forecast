import { renderCity } from "./renderCity.js"
import { setCookie } from "./cookies.js"

export function getWeather(city) {
    let url = `https://api.weatherapi.com/v1/forecast.json?key=9ab729aaa6834a76be0115437230910&q=${city}&days=5&aqi=no&alerts=no`
    fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Wrong city")
    }
    return response.json()
  })
  .then(data => {
    setCookie('city', city, 3)
    renderCity(data, 0, 1)
  })
  .catch((error) => {
    
    console.error(error)
  })
};