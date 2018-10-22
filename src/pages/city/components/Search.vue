<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}

</script>
<style scoped lang="less">
.search {
  background-color: @themeColor;
  color: #fff;
  line-height: unit(36/100, rem);
  padding: 0 .04rem;
  height: unit(36/100, rem);
  text-align: center;
	.search-input {
		box-sizing: border-box;
		display: block;
		width: 100%;
		height: unit(31/100, rem);
		text-align: center;
		padding: 0 .08rem;
		border-radius: .03rem;
	}
}

</style>
