<template>
    <div class="mars">
       <div class="container">
           <h2 class="heading-h2-white">Mars Rover Photos</h2>
           <hr/>
             <div class="row">
                <div class="col m12">
                  <div class="card">
                        <div class="card-content">          
                            <h3 class="heading-h3">Get Today's Images</h3>         
                            <p>This API is designed to collect image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. 
                                This application makes it easier for these images to be widely available to others. Each rover has its own set of images.
                            </p>
                            <div class="container">
                                <div class="row">
                                    <div class="col s12 m4">
                                        <router-link :to="{name:'Curiosity'}" class='btn blue rover'>Curiosity</router-link>
                                    </div>
                                    <div class="col s12 m4">
                                        <router-link :to="{name:'Opportunity'}" class='btn blue rover'>Opportunity</router-link>
                                    </div>
                                    <div class="col s12 m4">
                                        <router-link :to="{name:'Spirit'}" class='btn blue rover'>Spirit</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="row">    
                <MarsDiscover />
            </div>
        </div>
    </div>
</template>
<script>
import MarsDiscover from '../components/MarsDiscover'
import Axios from 'axios';
export default {
    name:'Mars',
   components:{
       MarsDiscover
   },
   computed:{
       current(){
           //year month day
           let date = Date();
           let day = new Date(date).getDate();
           let month = new Date(date).getMonth() + 1;
           let year = new Date(date).getFullYear();
           let current = `${year}-${month}-${day}`;
           return current;
       }
   },
}
</script>
<style>
.rover{
    margin-top:10px;
    margin:15px;
}
</style>