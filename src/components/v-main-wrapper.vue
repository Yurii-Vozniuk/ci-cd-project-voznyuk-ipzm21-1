<template>
    <div class="v-main-wrapper">
        <v-header/>
        <router-view></router-view>
        <v-bottom-nav/>
    </div>
</template>

<script>
import vHeader from './layouts/v-header.vue';
import vBottomNav from './layouts/v-bottom-nav.vue';

export default {
  name: 'v-main-wrapper',
  components: {
    vHeader,
    vBottomNav,
  },
};
</script>

<style scoped>

</style>
