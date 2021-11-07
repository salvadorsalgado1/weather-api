<template>
<div class="navigation" v-if="this.$route.name !== 'Introduction'">
  
  <nav class="transparent">
    <div class="nav-wrapper">
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><router-link class="waves-effect waves-light" :to="{name:'Introduction'}">Introduction</router-link></li>
        <li><router-link class="waves-effect waves-light" :to="{name:'Home'}">Home</router-link></li>
        <li><router-link class="waves-effect waves-light" :to="{name:'Weather'}">Weather on Earth!</router-link></li>
        <li><router-link class="waves-effect waves-light" :to="{name:'About'}">About</router-link></li>
        <li><router-link class="waves-effect waves-light" :to="{name:'Mars'}">Visit Mars!</router-link></li>

      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><router-link :to="{name:'Introduction'}">Introduction</router-link></li>
    <li><router-link :to="{name:'Home'}">Home</router-link></li>
    <li><router-link :to="{name:'Weather'}">Weather on Earth!</router-link></li>
    <li><router-link :to="{name:'About'}">About</router-link></li>
    <li><router-link :to="{name:'Mars'}">Visit Mars!</router-link></li>
  </ul>
</div>      
</template>
<script>

export default {
  
  mounted(){
      $(document).ready(function(){
    $('.sidenav').sidenav();
  });
      $( document ).ready(function() {
      $(".button-collapse").sideNav();
    });
      document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
      });
  }
  
}
</script>
<style>

nav ul a{
  color:white;
  font-size:1.2em;
}

</style>
