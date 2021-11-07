<template>
    <div class="pod-image">
        <div class="containerr">
        <h1 class="heading-h1-white heading-h1 left-align">Astronomy Picture of the Day</h1>
        <div class="row">
          <div class="col m12 l6">
            <div class="card content">
                <div class="video-container" v-if="video">
                    <iframe width="853" height="480" v-bind:src="result.url" frameborder="0" allowfullscreen></iframe>
                </div>
                <div class="card-image" v-if="image">
                    <img class="responsive-img img-container materialboxed" v-bind:src="result.url" />
                </div>
            </div>
          </div>
          <div class="col m12 l6">
            <div class="card">
              <div class="card-content">
                <h2 class="heading-h2">{{result.title}}</h2>
                <p><em>{{result.date}}</em></p>
                <hr/>
                <p class="p-explanation left-align">{{result.explanation}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return{
            result:[],
            video:false,
            image:false
        }
    },
    mounted(){
         Axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.VUE_APP_NASA_KEY}`)
        .then((response)=>{
            console.log(response.data)
            this.result = response.data
            if(response.data.url.includes('youtube')){
                this.video = true;
                this.image =false;
            }
            else{
                this.video = false;
                this.image = true;
            }
        }).catch(err=>{
            console.log("Could not GET", err)
        })
       
    }
}
</script>
<style>

</style>