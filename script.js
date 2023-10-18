import { addInputEvents } from "./files/scripts/addInputEvents.js"
import { getWeather } from "./files/scripts/getWeather.js"
import { getCookie } from "./files/scripts/cookies.js"


let input = document.querySelector('.input-city input')
let city = getCookie("city")
input.setAttribute('data-value', `${city}`)
if(city) {
    getWeather(city)
    input.value = `${city}`
}
else getWeather('Kyiv')

addInputEvents()