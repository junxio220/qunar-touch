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
      },{
      	id: '0003',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
      },{
      	id: '0004',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg'
      },{
      	id: '0005',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/eb/5cacf42b59e91e02.jpg_750x200_9c0a77b0.jpg'
      },{
      	id: '0006',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/a8/664024556572fd02.jpg_750x200_ffe41025.jpg'
      },{
      	id: '0007',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/ab/0364cd7b56f95702.jpg_750x200_ccb27048.jpg'
      },{
      	id: '0008',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1809/47/7599053a2cb2ee02.jpg_750x200_c61be0c1.jpg'
      },{
      	id: '0009',
      	imgUrl: 'http://img1.qunarzz.com/piao/fusion/1810/e2/2e3774e52b380102.jpg_750x200_14e6ebab.jpg'
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