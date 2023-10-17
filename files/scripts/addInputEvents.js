import { getWeather } from "./getWeather.js"

export function addInputEvents() {

    let input = document.querySelector('.input-city input')
    let search = document.querySelector('.search')

    document.addEventListener('keyup', (e) => {
        if (e.code == 'Enter') {
            if (document.activeElement == input && input.value.length > 1) {
                getWeather(input.value)
            }
            input.blur()
        }
        if (e.code == 'Escape') {
            input.blur()
        }
    })
    document.addEventListener('click', (ev) => {
        if (ev.target == search) {
            if (input.value.length > 1) {
                getWeather(input.value)
            }
            input.blur()
        }
    })

    const autocompleteContainer = document.getElementById('autocomplete-container');

    input.addEventListener('input', async function () {
        if (input.value.length >= 2) {

            const query = input.value;
            const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=9ab729aaa6834a76be0115437230910&q=${query}`);
            const suggestions = await response.json();


            displayAutocompleteSuggestions(suggestions);
        } else {

            autocompleteContainer.style.display = 'none';
        }
    });

    function displayAutocompleteSuggestions(suggestions) {

        autocompleteContainer.innerHTML = '';

        suggestions.forEach(city => {
            const suggestionItem = document.createElement('div');
            suggestionItem.classList.add('suggestion-item')
            suggestionItem.textContent = city.name + ', ' + city.country;
            suggestionItem.addEventListener('click', () => {

                getWeather(suggestionItem.innerHTML);
                autocompleteContainer.style.display = 'none';
            });

            autocompleteContainer.appendChild(suggestionItem);
        });

        autocompleteContainer.style.display = 'block';
    }
    input.addEventListener('blur', () => {
        setTimeout(() => {
            autocompleteContainer.style.display = 'none';
        }, 100)
    });
    input.addEventListener('focus', async function () {
        if (input.value.length > 2) {
            const query = input.value;
            const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=9ab729aaa6834a76be0115437230910&q=${query}`);
            const suggestions = await response.json();
            displayAutocompleteSuggestions(suggestions);
        }
    })
}