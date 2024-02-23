const inputbox = document.querySelector('.input-box');
const searchBtn = document.getElementById('Search-btn');
const weather_img = document.querySelector('.weather-image');
const temperature =  document.querySelector('.temperature');
const desc =  document.querySelector('.desc');
const humidity =  document.querySelector('#humidity');
const wind_speed =  document.querySelector('#wind-speed');

async function checkWeather(City){
    let api_key = "300dd40d780eaf042d02282b60c020bf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${api_key}`;


    let weather = await fetch(`${url}`).then((response)=>{
        return response.json();
    })

    console.log(weather);

    temperature.innerHTML = `${Math.round(weather.main.temp - 273.15)}`;
    desc.innerHTML = `${weather.weather[0].description}`;
    wind_speed.innerHTML = `${weather.wind.speed}KM/H`
    humidity.innerHTML = `${weather.main.humidity}%`;
  


    switch(weather.weather[0].main){
        case 'Clouds' :
           weather_img.src = "./assets/cloud.png";
        break;
        case 'Clear' :
            weather_img.src = "./assets/clear.png";
        break;
        case 'Rain' :
           weather_img.src = "./assets/rain.png";
        break;
        case 'Haze' :
           weather_img.src = "./assets/mist.png";
        break;
        case 'Snow' :
           weather_img.src = "./assets/snow.png";
        break;

    }

}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputbox.value);

})
