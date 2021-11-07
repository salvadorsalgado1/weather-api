<template>
    <div class="uh-oh">
        <h2>Uh-oh!</h2>
        <p><i class="material-icons medium">access_time</i></p>
        <p>There doesn't seem to be any data for {{this.$route.name}} at the current day. 
            This rover takes images on a day to day basis. Please try again at a later time.</p>
    </div>
</template>
<script>
export default {

}
</script>