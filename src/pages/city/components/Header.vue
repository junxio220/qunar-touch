<template>
  <div class="header">
    <router-link to="/" class="return-btn">
      <div class="header-left">
        <svg class="returnIcon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </router-link>
    <h1 class="header-title">城市选择</h1>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}

</script>
<style scoped lang="less">
.header {
  height: @headerHeight;
  line-height: @headerHeight;
  background-color: @themeColor;
  color: #000;
  text-align: center;
  overflow: hidden;
  .return-btn {
  	display: block;
  	width: unit(38/100, rem);
  	height: 100%;
  	overflow: hidden;
  	float: left;
    .header-left {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      fill: #fff;
      .returnIcon {
        width: unit(20/100, rem);
        height: 100%;
      }
    }
  }

  .header-title {
    	display: block;
    	margin: 0 unit(50/100, rem) 0 unit(50/100, rem);
    	text-align: center;
    	color: #fff;
  }
}

</style>
