import { getWeekDay, getDayOfWeekIndex } from "./getDate.js"
import { renderCity } from "./renderCity.js"

export function drawNavDays(weather) {
    clearDays()
    let navBar = document.querySelector('.navbar-nav')

    let date = weather.forecast.forecastday[0].date
    let index = getDayOfWeekIndex(date)

    let navItemToday = document.createElement('li')
    navItemToday.classList.add('nav-item')

    let navLinkToday = document.createElement('p')
    navLinkToday.classList.add('nav-link')
    navLinkToday.classList.add('active')
    navLinkToday.setAttribute('data-day',0)

    navLinkToday.innerHTML = 'Today'

    navItemToday.addEventListener('click', () => {
        renderCity(weather, navLinkToday.dataset.day, false)
        document.querySelector('.nav-item .active').classList.remove('active')
        navLinkToday.classList.add('active')
    })

    navItemToday.append(navLinkToday)
    navBar.append(navItemToday)

    let navItemTomorrow = document.createElement('li')
    navItemTomorrow.classList.add('nav-item')

    let navLinkTomorrow = document.createElement('p')
    navLinkTomorrow.classList.add('nav-link')
    navLinkTomorrow.setAttribute('data-day', 1)

    navLinkTomorrow.innerHTML = 'Tomorrow'

    navItemTomorrow.addEventListener('click', () => {
        renderCity(weather, navLinkTomorrow.dataset.day, false)
        document.querySelector('.nav-item .active').classList.remove('active')
        navLinkTomorrow.classList.add('active')
    })
    navItemTomorrow.append(navLinkTomorrow)
    navBar.append(navItemTomorrow)

    for(let i = 0; i<3; i++) {

        if(index+i+2 == 7) index-=7
        let navItem = document.createElement('li')
        navItem.classList.add('nav-item')

        let navLink = document.createElement('p')
        navLink.classList.add('nav-link')
        navLink.setAttribute('data-day',`${i+2}`)

        navLink.innerHTML = getWeekDay(index+i+2)

        navItem.addEventListener('click', () => {
            renderCity(weather, navLink.dataset.day, false)
            document.querySelector('.nav-item .active').classList.remove('active')
            navLink.classList.add('active')
        })
        navItem.append(navLink)
        navBar.append(navItem)
    }
}
function clearDays() {
    let days = document.querySelectorAll('.nav-item')
    for(let day of days) {
        day.remove()
    }
}