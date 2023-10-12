export function renderCity(weather) {
    //console.log(weather)

    let icon = document.querySelector('.weather-icon')
    let temp_c = document.querySelector('.temperature')
    let text = document.querySelector('.weather-state')
    let date = document.querySelector('.date')
    let localtime = document.querySelector('.time')
    let is_day = document.querySelector('.day')
    let name = document.querySelector('.city')

    let maxwind_kph = document.querySelector('.wind-speed')
    let wind_dir = document.querySelector('.wind-direction')

    let humidity = document.querySelector('.humidity-percent')

    let feelslike_c = document.querySelector('.feel-degrees')

    //let wind_kph = document.querySelector('.index-number')
    //let wind_kph = document.querySelector('.index-moderate')

    let pressure_mb = document.querySelector('.pressure-amount')

    let daily_chance_of_rain = document.querySelector('.rain-percent')

    let cloud = document.querySelector('.cloud-percent')

    let sunrise = document.querySelector('.sun-rise-time')
    let sunset = document.querySelector('.sun-set-time')

    let moonrise = document.querySelector('.moon-rise-time')
    let moonset = document.querySelector('.moon-set-time')

    icon.src = weather.current.condition.icon
    temp_c.innerHTML = weather.current.temp_c +'°C';
    text.innerHTML = weather.current.condition.text;
    date.innerHTML = weather.current.last_updated.slice(0, 10);
    localtime.innerHTML = weather.location.localtime.slice(11);
    is_day.innerHTML = weather.current.is_day ? "Day" : "Night";
    name.innerHTML = weather.location.name;
    maxwind_kph.innerHTML = weather.current.wind_kph + ' km/h';
    wind_dir.innerHTML = weather.current.wind_dir;
    humidity.innerHTML = weather.current.humidity +'%';
    feelslike_c.innerHTML = weather.current.feelslike_c + '°C';
    pressure_mb.innerHTML = weather.current.pressure_mb +'mb';
    //daily_chance_of_rain.innerHTML = weather.current.daily_chance_of_rain;
    cloud.innerHTML = weather.current.cloud + '%';
    sunrise.innerHTML = weather.forecast.forecastday[0].astro.sunrise;
    sunset.innerHTML = weather.forecast.forecastday[0].astro.sunset;
    moonrise.innerHTML = weather.forecast.forecastday[0].astro.moonrise;
    moonset.innerHTML = weather.forecast.forecastday[0].astro.moonset;
}