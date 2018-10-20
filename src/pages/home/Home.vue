<template>
    <div class="home-page">
  		<home-header></home-header>
  		<home-swiper></home-swiper>
  		<home-icons></home-icons>
  		<home-recommend></home-recommend>
      <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons.vue";
import HomeRecommend from "./components/Recommend.vue";
import HomeWeekend from "./components/Weekend.vue";

export default {
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    HomeHeader, HomeSwiper, HomeIcons, HomeRecommend,
    HomeWeekend
  }
}
</script>

<style scoped lang="less">
  .home-page {
    background: #eee;
  }
</style>
