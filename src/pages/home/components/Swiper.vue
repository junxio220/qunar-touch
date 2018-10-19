<template>
	<div class="wrapper">
	  <swiper :options="swiperOption">
	    <swiper-slide v-for="item in swiperList" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/31/da037478f37cf202.jpg_750x200_a02cf862.jpg'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/c6/3c89f3cf37e51502.jpg_750x200_f5e79309.jpg'
      }]
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