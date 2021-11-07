<template>
  <div class="about">
    <div class="container">
      <div class="card">
        <div class="card-content">
          <h1 class="heading-h1">About</h1>
          <div class="row">
            <div class="col m12 l6">
               <img src="@/assets/profile-square-opt.jpg" class="image-profile circle responsive-img" alt="Salvador Salgado"/>
          <p class="description">Salvador Salgado</p>
            </div>
            <div class="col m12 l6">
          <h2 class="about-heading-h2">NASA and Forecast</h2>
          <p class="description left-align">This application is used to demonstrate the use of <em>REST API's</em>. 
          I was able to utilize VUE.js
          and its lifecycle hooks in order to create <em>GET</em> requests to the API. 
          This application consists of a weather
          service by <a href="https://www.iqair.com/" title="Airvisual">IQAir</a>, a 
          renowned air pollution app that offers
          free access to the world's greatest air quality database. 
          <br/><br/>
          This application also utilizes services provided by 
            <a href="https://api.nasa.gov/" title="NASA">NASA APIs</a>.
          This section of the application focuses on the retrieval of 
          data such as rover imagery on Mars that is often updated on a day by day basis.</p>
            </div>
          </div>
          <hr/>
          <p><a href="https://salvadorsalgado1.github.io/Portfolio/" title="Portfolio">Portfolio</a></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'About'
}
</script>
<style>
.about-heading-h2{
  font-size:2em;
}
.image-profile{
  max-width:50% !important;
  margin:50px;
}
.description{
  font-size:1.4em;
  
}
</style>
