import { getDate, getWeekDay } from "./getDate.js"
import { drawNavDays } from "./drawNavDays.js"

export function renderCity(weather, day) {
    console.log(weather)
    
    drawNavDays(weather)

    let icon = document.querySelector('.weather-icon')
    let temp_c = document.querySelector('.temperature')
    let text = document.querySelector('.weather-state')
    let date = document.querySelector('.date-time-info .date')
    let localtime = document.querySelector('.date-time-info .time')
    let is_day = document.querySelector('.date-time-info .day')
    let name = document.querySelector('.city')

    let daily_weather = document.querySelectorAll('.daily-weather .col')

    let wind_kph = document.querySelector('.wind-speed')
    let wind_dir = document.querySelector('.wind-direction')

    let humidity = document.querySelector('.humidity-percent')

    let feelslike_c = document.querySelector('.feel-degrees')

    let uv = document.querySelector('.index-number')
    let uv_cond = document.querySelector('.index-moderate')

    let pressure_mb = document.querySelector('.pressure-amount')

    let daily_chance_of_rain = document.querySelector('.rain-percent')

    let minTemp = document.querySelector('.temp-min')
    let maxTemp = document.querySelector('.temp-max')

    let sunrise = document.querySelector('.sun-rise-time')
    let sunset = document.querySelector('.sun-set-time')

    let moonrise = document.querySelector('.moon-rise-time')
    let moonset = document.querySelector('.moon-set-time')

    let code = weather.current.condition.icon.slice(-7, -4)
    console.log(code)
    if(weather.current.is_day) {
        icon.src = `./img/weather/day/${code}.png`
    }
    else {
        icon.src = `./img/weather/night/${code}.png`
    }

    temp_c.innerHTML = weather.current.temp_c +'°C';
    text.innerHTML = weather.current.condition.text;

    let curDate = getDate()

    date.innerHTML = `${curDate.day}-${curDate.month}-${curDate.year}`
    localtime.innerHTML = `${curDate.weekDay},${curDate.time}`

    is_day.innerHTML = weather.current.is_day ? "Day" : "Night";
    name.innerHTML = weather.location.name;

    if(day == 0) {
        wind_kph.innerHTML = Math.floor(weather.current.wind_kph) + ' km/h';
        wind_dir.innerHTML = weather.current.wind_dir;
        humidity.innerHTML = weather.current.humidity +'%';
        feelslike_c.innerHTML = weather.current.feelslike_c + '°C';
    
        uv.innerHTML = weather.current.uv
    
        if(weather.current.uv < 3) uv_cond.innerHTML = "Low"
        else if(weather.current.uv < 6) uv_cond.innerHTML = "Moderate"
        else if(weather.current.uv < 8) uv_cond.innerHTML = "High"
        else if(weather.current.uv < 11) uv_cond.innerHTML = "Very Hight"
        else uv_cond.innerHTML = "Extreme"
    
        pressure_mb.innerHTML = weather.current.pressure_mb +'mb';
        daily_chance_of_rain.innerHTML = weather.forecast.forecastday[0].day.daily_chance_of_rain + '%';
        minTemp.innerHTML = weather.forecast.forecastday[day].day.mintemp_c + '°C';
        maxTemp.innerHTML = weather.forecast.forecastday[day].day.maxtemp_c + '°C';
        sunrise.innerHTML = weather.forecast.forecastday[0].astro.sunrise;
        sunset.innerHTML = weather.forecast.forecastday[0].astro.sunset;
        moonrise.innerHTML = weather.forecast.forecastday[0].astro.moonrise;
        moonset.innerHTML = weather.forecast.forecastday[0].astro.moonset;
    }
    else {
        let curDay = weather.forecast.forecastday[day].day
        let astro = weather.forecast.forecastday[day].astro

        wind_kph.innerHTML = Math.floor(curDay.maxwind_kph) + ' km/h';
        wind_dir.innerHTML = 'Max speed';
        humidity.innerHTML = curDay.avghumidity +'%';
        feelslike_c.innerHTML = curDay.avgtemp_c + '°C';
    
        uv.innerHTML = curDay.uv
    
        if(curDay.uv < 3) uv_cond.innerHTML = "Low"
        else if(curDay.uv < 6) uv_cond.innerHTML = "Moderate"
        else if(curDay.uv < 8) uv_cond.innerHTML = "High"
        else if(curDay.uv < 11) uv_cond.innerHTML = "Very Hight"
        else uv_cond.innerHTML = "Extreme"
    
        pressure_mb.innerHTML = '-';
        daily_chance_of_rain.innerHTML = weather.forecast.forecastday[0].day.daily_chance_of_rain + '%';
        minTemp.innerHTML = curDay.mintemp_c + '°C';
        maxTemp.innerHTML = curDay.maxtemp_c + '°C';
        sunrise.innerHTML = astro.sunrise;
        sunset.innerHTML = astro.sunset;
        moonrise.innerHTML =astro.moonrise;
        moonset.innerHTML = astro.moonset;
    }

    let curtime = Number(localtime.innerHTML.slice(-5,-3))
    if((curtime+1)%6 == 0) curtime +=2
    while((curtime-1)%6 != 0) {
        curtime--
    }
    
    let i = 0
    for(let col of daily_weather) {
        if(curtime + i == 25) i = i-=24
        let time = col.querySelector('.daily-weather .time')
        let img = col.querySelector('.daily-weather img')
        let temperature = col.querySelector('.daily-weather .temperature')

        let curhour = weather.forecast.forecastday[day].hour[curtime-1+i]

        time.innerHTML = (curtime + i-1) + ":00"

        let code = curhour.condition.icon.slice(-7, -4)
        if(curhour.is_day) {
            img.src = `./img/weather/day/${code}.png`
        }
        else {
            img.src = `./img/weather/night/${code}.png`
        }

        temperature.innerHTML = curhour.temp_c +'°C'

        i++
    }
}