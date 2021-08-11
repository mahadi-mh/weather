const all = document.getElementById("all-temp-list")
const ul = document.getElementById("list-city")
const spanCity = document.getElementById("name-city")
const temp = document.getElementById("temperature-container")
const cityName = document.getElementById("city-name")

const bgStyle = document.getElementById("main-temp-container")

const divisionName = ['Chittagong', 'Khulna', 'Barisal', 'Rajshahi', 'Sylhet', 'Rangpur']

for (let i = 0; i < divisionName.length; i++) {
    let element = divisionName[i];

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=841218244979a82d9ada69c23d770258`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const city = data.name
            const temperature = data.main.temp - 273.15
            const storeTemp = Math.floor(temperature)
            console.log(storeTemp)
            changeBackground(storeTemp)
            const cityH2 = document.createElement("h2");
            const tempH2 = document.createElement("h2");
            tempH2.innerText = temperature.toFixed(2) + "°C"
            cityH2.innerText = city
            const cityname = spanCity.appendChild(cityH2)
            const tempvalue = ul.appendChild(tempH2)
            all.appendChild(cityname)
            all.appendChild(tempvalue)

            console.log(element)
        })

}


function displayWeatherFixed() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=841218244979a82d9ada69c23d770258")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const city = data.name
            const temperature = data.main.temp - 273.15
            const storeTemp = Math.floor(temperature)
            console.log(storeTemp)
            changeBackground(storeTemp)
            temp.innerText = temperature.toFixed(2) + "°C"
            cityName.innerText = city
        })
}
displayWeatherFixed()
setInterval(() => {
    displayWeatherFixed()
}, 1000);



function changeBackground(storeTemp) {
    if (storeTemp <= 10) {
        bgStyle.style.backgroundImage = "url(cold.jpg)";
        bgStyle.style.backgroundRepeat = "no-repeat";
        bgStyle.style.backgroundSize = 'cover';
    } else if (storeTemp <= 20) {
        bgStyle.style.backgroundImage = "url(cold.jpg)";
        bgStyle.style.backgroundRepeat = "no-repeat";
        bgStyle.style.backgroundSize = 'cover';
    } else if (storeTemp <= 30) {
        bgStyle.style.backgroundImage = "url(cold.jpg)";
        bgStyle.style.backgroundRepeat = "no-repeat";
        bgStyle.style.backgroundSize = 'cover';
    } else if (storeTemp > 30) {
        bgStyle.style.backgroundImage = "url(cold.jpg)";
        bgStyle.style.backgroundRepeat = "no-repeat";
        bgStyle.style.backgroundSize = 'cover';
    }
}