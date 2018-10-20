<template>
	<div class="recommend-area">
		<div class="recommend-title">
			<svg class="icon-recommend" aria-hidden="true">
				<use xlink:href="#icon-love"></use>
			</svg>
			热销推荐
		</div>
		<ul class="recommend-list">
			<li class="item clearfix" v-for="item in recommendList" :key="item.id">
				<div class="item-img-wrapper">
					<img class="item-img" :src="item.imgUrl">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<p class="item-detail">查看详情</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeRecommend',
	data () {
		return {
			recommendList: [{
				id: '0001',
				imgUrl: 'http://img1.qunarzz.com/sight/p38/201211/04/7ed9f5ba01a8412893835fbb.jpg_200x200_1a163b27.jpg',
				title: '可园山庄',
				desc: '清代广东四大名园之一，也是岭南园林的代表作，前人赞为“可羡人间福地，园夸天上仙宫”。'
			},{
				id: '0002',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/a3/a32e2f6b5b6fe1ba90.water.jpg_200x200_ac5b9bd9.jpg',
				title: '东莞观音山国家森林公园',
				desc: '这座美到不可方物的小镇是传说中的格林童话小镇，就是那座有这青蛙王子、灰姑娘、狼和小羊等等故事的格林小镇。小镇传奇，带着您的孩子去探索更多的故事吧！'
			},{
				id: '0003',
				imgUrl: '//img1.qunarzz.com/sight/p0/1810/4c/4c3e7f52ffd973b0a3.water.jpg_110x110_628f5efc.jpg',
				title: '世界之窗',
				desc: '世界奇观、历史遗迹、古今名胜、民间歌舞表演融为一体的人造主题公园。'
			},{
				id: '0004',
				imgUrl: 'http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_110x110_881e1cda.jpg',
				title: '东部华侨城',
				desc: '国家环境保护部和国家旅游局联合授予的首个 “国家生态旅游示范区”。'
			}]
		}
	}
}
</script>

<style scoped lang="less">
	@import "~assets/styles/mixins.less";

	.recommend-area {
		background: #fff;
		margin-top: unit(10/100, rem);
		.recommend-title {
			line-height: unit(30/100, rem);
			text-indent: unit(10/100, rem);
			padding: unit(6/100, rem);
			display: flex;
			align-items: center;
			.icon-recommend {
				padding: 0 unit(5/100, rem);
				display: inline-block;
				width: unit(20/100, rem);
				height: unit(20/100, rem);
				fill: red;
				transform: translateY(unit(-1/100, rem));
			}
		}
		.recommend-list {
			margin-left: .1rem;
			  .item{
				height: 1rem;
				padding: unit(.1, rem) 0;
				overflow: hidden;
				.item-img-wrapper {
					float: left;
					width: 1rem;
					height: 1rem;
					background: #eee;
					.item-img {
						width: 100%;
					}
				}
				.item-info {
					padding-left: unit(.1, rem);
					margin-left: unit(1, rem);
					.item-title {
						font-size: unit(16/100, rem);
						height: unit(22/100, rem);
						line-height: unit(22/100, rem);
						margin-top: unit(10/100, rem);
						overflow: hidden;
						color: #000;
					}
					.item-desc {
						margin-top: unit(2/100, rem);
						padding-right: unit(10/100, rem);
						overflow: hidden;
						.ellipsis();
					}
					.item-detail {
						color: @themeColor;
						margin-top: unit(8/100, rem);
						overflow: hidden;
					}
				}
			}
		}
	}
	
</style>