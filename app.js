let id = '3d50bc7876d04e1018cbe5bfee67ca86';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

let city = document.querySelector('.name');
let form = document.querySelector("form");
let temperature = document.querySelector('.temperature');
let description = document.querySelector('.description');
let valueSearch = document.getElementById('name');
let clouds = document.getElementById('clouds');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let main = document.querySelector('main');
let locationBtn = document.getElementById('locationBtn');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (valueSearch.value !== '') {
        searchWeatherByCity(valueSearch.value);
    }
});

locationBtn.addEventListener("click", (e) => {
    e.preventDefault();
    getUserLocation();
});

const searchWeatherByCity = (cityName) => {
    fetch(url + '&q=' + cityName)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(() => {
            showError();
        });
};

const searchWeatherByLocation = (lat, lon) => {
    fetch(`${url}&lat=${lat}&lon=${lon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => displayWeather(data))
        .catch(() => {
            showError();
        });
};

const displayWeather = (data) => {
    if (data.cod == 200) {
        city.querySelector('figcaption').innerHTML = data.name;
        city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.querySelector('span').innerText = data.main.temp;
        description.innerText = data.weather[0].description;

        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
    } else {
        showError();
    }
    valueSearch.value = '';
};

const showError = () => {
    main.classList.add('error');
    setTimeout(() => {
        main.classList.remove('error');
    }, 1000);
};

const getUserLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                searchWeatherByLocation(latitude, longitude);
            },
            () => {
                initApp();
            }
        );
    } else {
        initApp();
    }
};

const initApp = () => {
    searchWeatherByCity('Washington');
};

getUserLocation();
