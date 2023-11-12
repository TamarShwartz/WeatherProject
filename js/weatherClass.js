class Weather {
    constructor(_parent, _item, _itemName, _itemwWeather) {
        this.parent = _parent;
        this.name = _itemName;
        this.temp = _item.temp.toFixed();
        this.feels_like = _item.feels_like.toFixed();
        this.humidity = _item.humidity.toFixed();
        this.description =_itemwWeather.description;
        // this.icon=_itemwWeather.icon;
        this.icon=chekIcon(this.temp);
    }
    render() {
        let div = document.createElement("div");
        document.querySelector(`${this.parent}`).append(div);
        div.className = "col-lg-5 col-sm-12 bg-white card m-4 p-3";

    div.innerHTML=`
    <table class="m-4">
    <tr>
        <td><h2>${this.name}</h2></td>
        <td class="text-start"> 
        <img src="http://openweathermap.org/img/w/${this.icon}.png" />
        </td>
    </tr>
    <tr>
        <td class="text-secondary">
            ${this.description}</td>
    </tr>
</table class="m-4">
    <table style="direction: ltr;" class="text-center">
    <tr>
    <td>לחות</td>
    <td>טמפ' מורגשת</td>
    <td>טמפ' נמדדת</td>
    </tr>
    <tr>
    <td>${this.humidity}%</td>
    <td>${this.feels_like}C°</td>
    <td>${this.temp}C°</td>
    </tr>
    </table>`
    }


}
function chekIcon(_temp) {
    if (_temp < 20) {
        return "11n"
    }
    if (_temp > 20 && _temp < 30) {
        return "04n"
    }
    if (_temp >= 30) {
        return "01d"
    }
}

