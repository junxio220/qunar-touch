<template>
  <div class="weekend-area">
    <div class="weekend-title">
      <svg class="icon-weekend" aria-hidden="true">
        <use xlink:href="#icon-lvyou"></use>
      </svg>
      周末去哪儿
    </div>
    <ul class="weekend-list">
      <li class="item clearfix" v-for="item in weekendList" :key="item.id">
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
  name: 'HomeRecommend',
  data () {
    return {
      weekendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1509/86/e3a589b8ac4498.jpg_r_640x214_b8678794.jpg',
        title: '深圳赏秋胜地',
        desc: '在深圳，边走边摄的醉美秋色'
      },{
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4b/d04aa63b1b0ab3.jpg_r_640x214_a3a9c5b6.jpg',
        title: '深圳旅游Top10',
        desc: '深圳，向往一座城，不需要理由'
      },{
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
        title: '欢乐长隆',
        desc: '世界欢乐汇聚长隆'
      },{
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/73/8904e9c01d5c40.jpg_r_640x214_6b230adb.jpg',
        title: '休闲观光撒野',
        desc: '周末就是要High个够'
      }]
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

