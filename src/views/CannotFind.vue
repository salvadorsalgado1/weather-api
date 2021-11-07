<template>
  <div class="cannot-find">
      <div class="container">
          <div class="card">
              <div class="card-content">
                  <h1 class="heading-h1 h1-gray">404!</h1>
                  <p><i class="material-icons large">public</i></p>
                  <img class="responsive-img img-cannotfind" src="@/assets/spaceship.png" />
                  <h2 class="heading-h2 h2-gray">Whoops! Looks like we have reached for the stars.</h2>
                  <p>Not to worry! We have brought a ship to take you back <router-link :to="{name:'Home'}">Home</router-link>!</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
name:'Cannot-Find'
}
</script>

<style>
.h1-gray, .h2-gray{
    color:rgb(117, 117, 117);
}
.img-cannotfind{
    width:50%;
}
</style>