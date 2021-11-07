<template>
  <div class="mars-weather">
      <div v-if="loading">
        <Loading/>
    </div>
    <h3 class="heading-h3-white heading-h3">Example Images Taken from Sol 2000</h3>
      <div v-for="(result, id) in results" :key="id" class="col m6 s12">
      <div  class="card">
          <div class="card-image">
              <img class="materialboxed" v-bind:src="result.img_src.replace('http', 'https')" />
          </div>
          <div class="card-content">
              <h2 class="card-heading-h2"></h2>
              <p>Image ID: {{result.id}}</p>
              <p>Earth Day: {{result.earth_date}}</p>
              <p>Sol: {{result.sol}}</p>
          </div>
      </div>
      </div>
  </div>
</template>
<script>
import Loading from '../components/Loading'
import Axios from 'axios'
export default {
    components:{
        Loading
    },
data(){
        return{
            results:[],
            search:null,
            loading:false,
        }
    },
    mounted(){
        this.loading = true;
            Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2000&camera=fhaz&api_key=${process.env.VUE_APP_NASA_KEY}`)
            .then((response)=>{
            this.loading = false;
            console.log(response.data)
            this.results = response.data.photos
            
        }).catch(err=>{
            this.loading = false
            console.log("Cannot Get")
        })
    }
}
</script>
<style>
.card-heading-h2{
    font-size:1.6em !important;
}
</style>