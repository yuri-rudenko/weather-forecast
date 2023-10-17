import { addInputEvents } from "./files/scripts/addInputEvents.js"
import { getWeather } from "./files/scripts/getWeather.js"
import { getCookie } from "./files/scripts/cookies.js"
                                                                                                                                               
if(getCookie("city")) {
    getWeather(getCookie("city"))
}
else getWeather('Kyiv')

addInputEvents()