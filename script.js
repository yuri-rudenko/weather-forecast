const getWeather = (url) => {
    return fetch(url)
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((error) => console.error(error))
};

getWeather("http://api.weatherapi.com/v1/current.json?key=9ab729aaa6834a76be0115437230910&q=Kyiv")
