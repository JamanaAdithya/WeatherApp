const apiurl = "https://goweather.herokuapp.com/weather/"
const city = "Dehradun";
const searchBox = document.querySelector(".searchbox input")
const searchBtn = document.querySelector(".searchbox button")


async function checkWeather(city){
const weather = await fetch(apiurl+city)
var data = await weather.json();
console.log(data);

document.querySelector(".description").innerHTML = data.description;
document.querySelector(".city").innerHTML = city;
document.querySelector(".temperature").innerHTML = data.temperature;
document.querySelector(".wind").innerHTML = data.wind;

document.querySelector(".weather").display = "block";

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

