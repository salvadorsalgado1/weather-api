<template>
  <div class="introduction">
    <div class="slider fullscreen">
      <ul class="slides">
        <li>
          <img src="@/assets/space.jpg">
          <div class="caption right-align">
            <h1 class="heading-h1">Let's Explore Our Backyard</h1>
            <h2 class="subheading-p light grey-text text-lighten-3">Images and Content provided by Nasa</h2>
            <router-link class="btn outline" :to="{name:'Home'}">Continue</router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Axios from 'axios';
import Navigation from '../components/Navigation'
export default {
  name: 'Introduction',
  components: {
    Navigation
  },
  data(){
    return({
      result:[]
    })
  },
  mounted(){
    
   

  $(document).ready(function(){
    $('.slider').slider();
  });

  }
}
</script>
<style>
.slider .slides li .caption{
  color: #fff;
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
}
.slider .indicators .indicator-item.active{
  visibility: hidden;
}

.subheading-p{
  font-size:1.8em;
}
</style>
