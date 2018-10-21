<template>
  <div class="weekend-area">
    <div class="weekend-title">
      <svg class="icon-weekend" aria-hidden="true">
        <use xlink:href="#icon-lvyou"></use>
      </svg>
      周末去哪儿
    </div>
    <ul class="weekend-list">
      <li class="item clearfix" v-for="item in list" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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

  .weekend-area {
    background: #fff;
    margin-top: unit(10/100, rem);
    .weekend-title {
      line-height: unit(30/100, rem);
      text-indent: unit(10/100, rem);
      padding: unit(6/100, rem);
      display: flex;
      align-items: center;
      .icon-weekend {
        padding: 0 unit(5/100, rem);
        display: inline-block;
        width: unit(20/100, rem);
        height: unit(20/100, rem);
        fill: red;
        transform: translateY(unit(-1/100, rem));
      }
    }
    .weekend-list {
      background: #eee;
      .item {
        background: #fff;
        margin-bottom: unit(5/100, rem);
          .item-img-wrapper {
          height: 0;
          padding-bottom: unit(144/374*100, %);
          overflow: hidden;
          .item-img {
            width: 100%;
            vertical-align: middle;
          }
        }
        .item-info {
          padding: .07rem .1rem .1rem .1rem;
          .item-title {
            height: unit(22/100, rem);
            line-height: unit(22/100, rem);
            padding-right: unit(50/100, rem);
            overflow: hidden;
            color: #000;
          }
          .item-desc {
            margin-top: unit(2/100, rem);
            padding-right: unit(50/100, rem);
            overflow: hidden;
            .ellipsis();
          }
        }
      }
    }
  }
  
</style>

