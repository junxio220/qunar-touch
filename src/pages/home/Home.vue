<template>
    <div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<div>test</div>
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/icons.vue";

export default {
  data () {
    return {}
  },
  methods: {},
  computed: {},
  components: {
    HomeHeader, HomeSwiper, HomeIcons
  }
}
</script>

<style scoped>

</style>
