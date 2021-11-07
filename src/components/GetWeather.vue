<template>
    <div class="get-weather">
        <div class="container">
            <div class="row">
                <div class="col s12 m6">
                    <div class="card card-bg transparent z-depth-4">
                        <div class="card-content">
                            <h2 class="h2-weather">{{this.results.city}}, 
                            <br/>{{this.results.state}}, {{this.results.country}} Weather</h2>
                            <p class="temp-p">{{this.weather.tp}} &#8451; | {{convertToF}} &#8457;</p>
                            <p class="temp-p">Air Quality Index {{this.pollution.aqius}}</p>
                            <br/>
                            <p class="time-p">as of {{time}}<br/>{{date}}</p>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card transparent z-depth-4">
                        <div class="card-img">
                            <img class="responsive-img" :src="this.url" alt="Current Weather"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12">
                    <div class="card left-align transparent z-depth-5">
                        <div class="card-content details-p">
                            <p>Wind Direction: {{this.weather.wd}}&deg; {{direction}}</p>
                            <p>Wind Speed: {{this.weather.ws}} (m/s) | {{convertMtoMPH}} mph</p>
                            <p>Humidity {{this.weather.hu}}%</p>
                            <p>Atmospheric Pressure {{this.weather.pr}} hPa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            results:[],
            url:null,
            weather:[],
            pollution:[],
        }
    },
    computed:{
        convertToF(){
            let fahren = ((this.weather.tp * (9/5)) + 32).toFixed(1)
            return fahren;
        },
        convertMtoMPH(){
            let meters = (this.weather.ws * 2.236936).toFixed(1)
            return meters;
        },
        date(){
            let day = new Date(this.weather.ts).getDate();
            let month = new Date(this.weather.ts).getMonth() + 1;
            let year = new Date(this.weather.ts).getFullYear();
            let date = `${month}/${day}/${year}`
            return date;
        },
        time(){
            let seconds = new Date(this.weather.ts).getSeconds();
            let hours = new Date(this.weather.ts).getHours();
            let minutes = new Date(this.weather.ts).getMinutes();
            let time = `${hours}:${minutes}:${seconds}`
            return time;
        },
        direction(){
            let direction;
            if(this.results.wd = 0){
                direction = 'North'
            }else if(0 < this.results.wd < 90){
                direction = 'North East'
            }else if(this.results.wd = 90){
                direction = 'East'
            }else if(90 < this.results.wd < 180){
                direction = 'South East'
            }else if(this.results.wd = 180){
                direction = 'South'
            }else if(180 < this.results.wd < 270){
                direction = 'South West'
            }else if(this.results.wd = 270){
                direction = 'West'
            }else{
                direction = 'South West'
            }
            return direction;
        }
    },
    mounted(){
         Axios.get(`https://api.airvisual.com/v2/nearest_city?key=${process.env.VUE_APP_WEATHER_KEY}`)
            .then((response)=>{
                console.log(response.data.data)
                this.results = response.data.data
                this.weather = response.data.data.current.weather
                this.pollution = response.data.data.current.pollution
                this.url = `https://www.airvisual.com/images/${this.results.current.weather.ic}.png`
            }).catch(error=>{
                console.log("Cannot Get", error);
            })
    }
}
</script>

<style>
.h2-weather, .temp-p, .time-p, .details-p{
color:rgb(228, 228, 228);
}
.h2-weather{
    font-size:2em;
}
.temp-p{
    font-size:2.2em;
}
.time-p{
    font-size:1.2em;
}
.details-p{
    font-size:1.2em;
}

</style>