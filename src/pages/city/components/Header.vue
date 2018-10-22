<template>
  <div class="header">
    <router-link to="/" class="return-btn">
      <div class="header-left">
        <svg class="returnIcon" aria-hidden="true">
          <use xlink:href="#icon-fanhui"></use>
        </svg>
      </div>
    </router-link>
    城市选择
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
  color: #fff;
  text-align: center;
  overflow: hidden;
  .return-btn {
  	display: block;
  	width: unit(38/100, rem);
  	height: 100%;
  	overflow: hidden;
    .header-left {
      width: 100%;
      height: 100%;
      text-align: center;
      padding-right: unit(5/100, rem);
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
}

</style>
