<template>
  <div class="home">
    <div class="container">
      <PODimage/>
      <hr>
      <h2 class="heading-h2-white">Modules</h2>
      <Modules/>
    </div>
  </div>
</template>
<script>
import Modules from '../components/Modules'
import PODimage from '../components/PODimage'
export default {
name:'Home',
components:{
    PODimage, Modules
}
}
</script>
<style>

</style>

