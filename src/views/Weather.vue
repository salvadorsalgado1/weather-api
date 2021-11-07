<template>
  <div class="weather-home">
      <div class="container">
        <h1 class="heading-h1-white heading-h1 left-align">Weather Service</h1>
        <p class="p-white">Weather is received through an API where we fetch information using Axios.
            We get our weather from the nearest station within an IP address of the user.
        </p>
        
            <GetWeather/>
            <hr/>            
      </div>
  </div>
</template>

<script>
import GetWeather from '../components/GetWeather'
export default {
    name:'Weather',
    components:{
        GetWeather,
    },
data(){
    return{
        zip:null,
    }
},
methods:{
  
}
}
</script>

<style>

</style>