<template>
	<div class="wrapper">
	  <swiper :options="swiperOption" v-if="showSwiper">
	    <swiper-slide v-for="item in list" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length;
    }
  }
}
</script>

<style scoped lang="less">
	.wrapper /deep/ .swiper-pagination, .swiper-pagination-bullets {
		bottom: 0;
	}
	.wrapper /deep/ .swiper-pagination-bullet-active{
	  	background: #fff !important;
	}
	.wrapper {
	  overflow: hidden;
	  width: 100%;
	  height: 0;
	  padding-bottom: 26.66%;
	  background: #ddd;

	  .swiper-img {
		width: 100%;
		vertical-align: middle;
	  }
	}
</style>