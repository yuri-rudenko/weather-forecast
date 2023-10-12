let input = document.querySelector('.input-city input')
let body = document.querySelector('body')
document.addEventListener('keyup', (e) => {
    if(e.code == 'Enter' || e.code == 'Escape') {
        input.blur()
    }
    if(document.activeElement == input && input.value.length > 1) {

    }
})

const getWeather = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error(error))
};

getWeather("http://api.weatherapi.com/v1/current.json?key=9ab729aaa6834a76be0115437230910&q=Kyiv")
