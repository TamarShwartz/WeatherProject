function init() {
    doApi();
}

weather_ar=["לונדון","אלסקה","אילת","ניו יורק"]

function doApi() {
    weather_ar.forEach(element => {
         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=8ee633956bad6ae1965b557a94ecfcba&units=metric&lang=he`;
    $.get(url, function (resp) {
        // console.log(resp);
        console.log(resp.weather[0]);
        createCardWeather(resp.main,element,resp.weather[0]);
    })
    });
   
}
function createCardWeather(_item,_itemName,_itemwWeather){
    let card = new Weather(".row", _item,_itemName,_itemwWeather);
    card.render();
}

init();