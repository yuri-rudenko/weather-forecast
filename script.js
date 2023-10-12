import { getWeather } from "./files/scripts/getWeather.js"
import { renderCity } from "./files/scripts/renderCity.js"

let input = document.querySelector('.input-city input')
let search = document.querySelector('.search')
document.addEventListener('keyup', (e) => {
    if(e.code == 'Enter' || e.code == 'Escape') {
        if(document.activeElement == input && input.value.length > 1) {
            getWeather(input.value)
        }
        input.blur()
    }
})
document.addEventListener('click', (ev) => {
    if(ev.target == search) {
        if(input.value.length > 1) {
            getWeather(input.value)
        }
        input.blur()
    }
})

getWeather('Kyiv')
