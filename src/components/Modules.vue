<template>
  <div class="modules">
    <div class="row">
        <div class="col m6">
            <div class="card card-hover">
                <div class="card-image">
                    <router-link :to="{name:'Weather'}"><img src="@/assets/night-earth-opt.jpg" alt="Earth Weather"/></router-link>
                </div>
            </div>
        </div>
        <div class="col m6">
            <div class="card card-hover">
                <div class="card-image">
                    <router-link :to="{name:'Mars'}"><img src="@/assets/rover.jpg" alt="Mars Rovers"/></router-link>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.card-hover:hover{
    opacity:.6;
}


</style>