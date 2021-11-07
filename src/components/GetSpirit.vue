<template>
  <div class="get-curosity">
      <div class="container">
         <div class="row">
             <div v-if="!show" class="col m12">
                 <div class="card">
                     <div class="card-content">
                        <UhOh/>
                        <p>Check out <router-link :to="{name:'Curiosity'}">Curiosity</router-link> or <router-link :to="{name:'Opportunity'}">Opportunity</router-link> in the meantime!</p>
                     </div>
                 </div>
             </div>
             <div v-if="show">
                 <h3 class="heading-h3-white">Results</h3>
                 <div v-for="(result, id) in results.photos" :key="id" class="col m6 s12">
                 <div class="card">
                     <div class="card-image">
                         <img class="lazy" :src="result.img_src" alt="" />
                     </div>
                    <div class="card-content">
                        <p>Image ID:{{result.id}}</p>
                        <p>Camera: <strong>{{result.camera.full_name}} or {{result.camera.name}} on Sol {{result.sol}}</strong> </p>
                    </div>
                </div>
                
             </div>
             </div>
             
         </div>
      </div>
  </div>
</template>

<script>

import UhOh from '../components/UhOh'
import Axios from 'axios'
export default {
    components:{
        UhOh
    },
data(){
    return{
        results:[],
        collections:[],
        date:null,
        show:false
        
    }
},
methods:{
    
},
mounted(){
   
    let date = Date();
    let day = new Date(date).getDate();
    let month = new Date(date).getMonth() + 1;
    let year = new Date(date).getFullYear();
    let current = `${year}-${month}-${day}`;
    
    Axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?earth_date=${current}&api_key=${process.env.VUE_APP_NASA_KEY}`)
    .then((response)=>{
        console.log(response.data)
        this.results = response.data;
        response.data.photos.length == 0 ? this.show = false : this.show = true;
    }).catch(error=>{
        console.log("Cannot Get", error);
    })



    $(document).ready(function(){
    $('.materialboxed').materialbox();
  });
    
}
}
</script>

<style>

</style>