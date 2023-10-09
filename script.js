// const getWeather = url => {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => response.json())
//             .then(json => {
//                 resolve(json);
//             })
//             .catch(error => reject(error));
//     });
// };
// 
// getWeather("http://api.weatherapi.com/v1/current.json?key=9ab729aaa6834a76be0115437230910&// q=London")
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error(error);
//     });
// 