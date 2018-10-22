<template>
	<ul class="list">
		<li class="item" v-for="(item, key) in cities">{{key}}</li>
	</ul>
</template>

<script>


export default {
	props: {
		cities: Object
	},
	name: 'CityAlphabet'
}
</script>

<style scoped lang="less">
	.list {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		width: unit(20/100, rem);
		top: unit(80/100, rem);
		right: 0;
		bottom: 0;
		.item {
			color: @themeColor;
			font-size: unit(12/100, rem);
			line-height: unit(12/100, rem);
			padding: unit(2/100, rem) 0;
			text-align: center;
		}
	}
</style>