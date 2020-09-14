const app = new Vue({
    el: '#app',
    data: {
        api_key: 'd1e902b667baccdb37cfbc96ad629f00',
        base_url: 'http://api.openweathermap.org/data/2.5/find?q=',
        currentDate: new Date().toLocaleString(),
        currentWeather: {},
        forecastData: {},
    },

    mounted: function () {
        /*        axios.get(`${this.base_url}weather?q=${this.query}&units=metric&appid=${this.api_key}`)*/
        axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=52.231589&lon=5.189039&exclude=minutely,hourly&units=metric&lang=nl&appid=d1e902b667baccdb37cfbc96ad629f00")
            .then((response) => {
                this.currentWeather = {
                    condition: response.data.current.weather[0].description,
                    temperatureNow: Math.round(response.data.current.temp),
                    hiTemp: Math.round(response.data.daily[0].temp.max),
                    loTemp: Math.round(response.data.daily[0].temp.min),
                    icon: "./images/" + response.data.current.weather[0].icon + ".png",
                };
                this.forecastData = response.data.daily.splice(1, 7);
                console.log(this.forecastData);

            });
    },

    methods: {
        fetchWeather: function () {
        },
        datefunction() {
        },
        customIcon: function(iconId){
            return `./images/${iconId}.png`;
        }
    },
});



