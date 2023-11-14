
import Weather from "./weatherClass.js";

const init=()=> {
    doApi();
}

const weather_ar = ["לונדון", "אלסקה", "אילת", "ניו יורק"]

const doApi=()=> {
    weather_ar.forEach(element => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=8ee633956bad6ae1965b557a94ecfcba&units=metric&lang=he`;
        fetch(url)
            .then(resp => {
                console.log(resp)
                return resp.json();
            }
            )
            .then(data => {
                console.log(data);
                createCardWeather(data.main, element, data.weather[0]);
            })

    })
}

const createCardWeather=(_item, _itemName, _itemwWeather)=> {
    let card = new Weather(".row", _item, _itemName, _itemwWeather);
    card.render();
}

init();