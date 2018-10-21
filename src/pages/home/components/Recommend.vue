<template>
	<div class="recommend-area">
		<div class="recommend-title">
			<svg class="icon-recommend" aria-hidden="true">
				<use xlink:href="#icon-love"></use>
			</svg>
			热销推荐
		</div>
		<ul class="recommend-list">
			<li class="item clearfix" v-for="item in list" :key="item.id">
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
	props: {
		list: Array
	},
	name: 'HomeRecommend',
	data () {
		return {
			
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