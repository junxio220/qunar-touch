<template>
	<div class="icons clearfix">
		<swiper>
			<swiper-slide v-for="(page, index) in pages" :key="index">
				<div class="icon" v-for="icon in page" :key="icon.id">
					<div class="icon-img">
						<img class="img-content" :src="icon.imgUrl">
					</div>
					<span class="icon-desc">
						{{icon.desc}}
					</span>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeIcons',
	data () {
		return {
			iconsList: [{
				id: '001',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
				desc: '景点门票'
			}, {
				id: '002',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
	  		desc: '动植物园'
			},{
				id: '003',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
	  		desc: '玻璃栈道'
			},{
				id: '004',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
	  		desc: '东莞必游'
			},{
				id: '005',
				imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
	  		desc: '打卡圣地'
			},{
				id: '006',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
	  		desc: '亲子游'
			},{
				id: '007',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
	  		desc: '玩转长隆'
			},{
				id: '008',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
	  		desc: '水世界乐园'
			},{
				id: '009',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/48/cb72b99b71974c02.png',
	  		desc: '生活休闲'
			},{
				id: '010',
				imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
	  		desc: '全部玩乐'
			}]
		}
	},
	computed: {
		pages(){
			const pages = [];
			this.iconsList.forEach((item, index)=>{
				const page = Math.floor(index / 8);
				if (!pages[page]) {
					pages[page] = [];
				}
				pages[page].push(item);
			})
			return pages;
		}
	}
}
</script>

<style scoped lang="less">
	@import "~assets/styles/mixins.less";

  .icons /deep/ .swiper-container{
		overflow: hidden;
		height: 0;
		padding-bottom: 50%;
		.icon {
		  float: left;
		  width: 25%;
		  padding-bottom: 25%;
		  position: relative;
		  background: #fff;
		  .icon-img {
		  	position: absolute;
		  	top: unit(15/100, rem);
		  	right: 0;
		  	left: 0;
		  	bottom: unit(28/100, rem);
				.img-content{
					display: block;
					height: 100%;
					margin: 0 auto;
				}
		  }
		  .icon-desc{
		  	text-align: center;
		  	position: absolute;
		  	left: 0;
		  	right: 0;
		  	bottom: 0;
		  	color: rgba(0,0,0,0.6);
				.ellipsis();
		  }
		}
  }
</style>