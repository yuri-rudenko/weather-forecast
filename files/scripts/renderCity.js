export function renderCity(weather, day) {
    console.log(weather)

    let icon = document.querySelector('.weather-icon')
    let temp_c = document.querySelector('.temperature')
    let text = document.querySelector('.weather-state')
    let date = document.querySelector('.date')
    let localtime = document.querySelector('.time')
    let is_day = document.querySelector('.day')
    let name = document.querySelector('.city')

    let daily_weather = document.querySelectorAll('.daily-weather .col')

    let maxwind_kph = document.querySelector('.wind-speed')
    let wind_dir = document.querySelector('.wind-direction')

    let humidity = document.querySelector('.humidity-percent')

    let feelslike_c = document.querySelector('.feel-degrees')

    let uv = document.querySelector('.index-number')
    let uv_cond = document.querySelector('.index-moderate')

    let pressure_mb = document.querySelector('.pressure-amount')

    let daily_chance_of_rain = document.querySelector('.rain-percent')

    let cloud = document.querySelector('.cloud-percent')

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
    date.innerHTML = weather.current.last_updated.slice(0, 10);
    localtime.innerHTML = weather.location.localtime.slice(11);
    is_day.innerHTML = weather.current.is_day ? "Day" : "Night";
    name.innerHTML = weather.location.name;
    maxwind_kph.innerHTML = Math.floor(weather.current.wind_kph) + ' km/h';
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
    cloud.innerHTML = weather.current.cloud + '%';
    sunrise.innerHTML = weather.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = weather.forecast.forecastday[0].astro.sunset;
    moonrise.innerHTML = weather.forecast.forecastday[0].astro.moonrise;
    moonset.innerHTML = weather.forecast.forecastday[0].astro.moonset;


    let curtime = localtime.innerHTML.slice(0, -3)
    let i = 0
    for(let col of daily_weather) {
        let time = col.querySelector('.daily-weather .time')
        let img = col.querySelector('.daily-weather img')
        let temperature = col.querySelector('.daily-weather .temperature')

        let curhour = weather.forecast.forecastday[day].hour[curtime-1+i]

        time.innerHTML = (Number(curtime) + i) + ":00"

        let code = weather.forecast.forecastday[day].hour[curtime-1+i].condition.icon.slice(-7, -4)
        if(weather.forecast.forecastday[day].hour[curtime-1+i].is_day) {
            img.src = `./img/weather/day/${code}.png`
        }
        else {
            img.src = `./img/weather/night/${code}.png`
        }

        temperature.innerHTML = weather.forecast.forecastday[day].hour[curtime-1+i].temp_c +'°C'

        i++
    }
}