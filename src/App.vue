<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
    
  </div>
</template>
<script>
import Navigation from './components/Navigation.vue'
export default {
  components: { Navigation },
  mounted(){
    $(document).ready(function(){
    $('.sidenav').sidenav();
  });
      document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
      });
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
   background: url('./assets/dark-opt.jpg') no-repeat center center fixed; 
 -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media (max-width: 480px) {
    body{
  background: url('./assets/rock.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
}
.heading-h1-white, .heading-h2-white, .heading-h3-white, .p-white{
  color:white;
}
.card-heading h2{
color:black !important;
}
.heading-h1{
  font-size:2.8em;
  line-height:110%;

}
.heading-h1, .heading-h1-white{

}
.heading-h2, .heading-h2-white{
  font-size:2.2em;
}
.heading-h3, .heading-h3-white{
  font-size:1.6em;
}
p{
  font-size:1.2em;
}
.card{
    animation:fadeIn;
    animation-duration: 3s;
}
</style>
