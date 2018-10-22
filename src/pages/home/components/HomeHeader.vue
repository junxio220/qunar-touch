<template>
  <div class="header">
    <div class="header-left">
      <svg class="returnIcon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
    </div>
    <div class="header-input">
      <svg class="findIcon" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <svg class="cityIcon" aria-hidden="true">
          <use xlink:href="#icon-xiala"></use>
        </svg>
      </div>
    </router-link>
  </div>
</template>
<script>
import 'assets/js/svg_icon.js';

export default {
  props: {
    city: String
  },
  data() {
    return {}
  },
  methods: {},
  computed: {},
  components: {}
}

</script>
<style scoped lang="less">
.header {
  display: flex;
  height: @headerHeight;
  line-height: @headerHeight;
  background: @themeColor;
  color: #fff;
  .header-left {
    height: 100%;
    text-align: center;
    width: unit(38/100, rem);
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

  .header-input {
    flex: 1;
    height: auto;
    line-height: .31rem;
    background: #fff;
    border-radius: unit(2/100, rem);
    margin: unit(6/100, rem) 0;
    color: rgba(0, 0, 0, 0.2);
    display: flex;
    .findIcon {
      width: unit(20/100, rem);
      height: 100%;
      padding: 0 unit(10/100, rem);
      fill: #ddd;
    }
  }

  .header-right {
    box-sizing: border-box;
    height: 100%;
    color: #fff;
    text-align: center;
    width: unit(62/100, rem);
    padding-left: unit(8/100, rem);
    display: flex;
    justify-content: space-around;
    align-items: center;
    .cityIcon {
      width: unit(20/100, rem);
      height: 100%;
      fill: #fff;
    }
  }
}

</style>
