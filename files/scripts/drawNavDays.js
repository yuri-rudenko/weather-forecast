import { getWeekDay, getDayOfWeekIndex } from "./getDate.js"

export function drawNavDays(weather) {
    clearDays()
    let navBar = document.querySelector('.navbar-nav')

    let date = weather.forecast.forecastday[0].date
    let index = getDayOfWeekIndex(date)

    for(let i = 0; i<3; i++) {

        if(index+i+2 == 7) index-=7
        let navItem = document.createElement('li')
        navItem.classList.add('nav-item')
        navItem.classList.add('day-of-week')

        let navLink = document.createElement('p')
        navLink.classList.add('nav-link')

        navLink.innerHTML = getWeekDay(index+i+2)

        navItem.append(navLink)
        navBar.append(navItem)
    }
}
function clearDays() {
    let days = document.querySelectorAll('.day-of-week')
    for(let day of days) {
        day.remove()
    }
}