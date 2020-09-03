const app = new Vue({
    el: '#app',
    data: {
        today: {
            title: 'The weather now',
            condition: 'Sunny',
            temperature: '26',
            degree: "°C",
        }
    },
    methods: {},
    template: `
        <div id="todayWrap">
            <div id="todayContainer">
                <div class="todayImage">
                    <img alt="sunny" class="today" src="./svg/001-sunny.svg" />
                </div>
                <div class="dayText">
                    <h2 class="today">{{ today.title }}</h2>
                    <h3 class="today">{{ today.condition }}</h3>
                </div>
                <div class="today, temperature">{{ today.temperature }}<span class="temperature">{{ today.degree }}</span></div>
            </div>
        </div>`,
})

vue.component = new vue({
    data
})