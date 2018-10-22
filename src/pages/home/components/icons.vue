<template>
  <div class="icons clearfix">
    <swiper :options="swiperOption">
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
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.list.forEach((item, index) => {
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

.icons /deep/ .swiper-container {
  overflow: hidden;
  height: 0;
  padding-bottom: 56%;
  background: #fff;
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
      .img-content {
        display: block;
        height: 100%;
        margin: 0 auto;
      }
    }
    .icon-desc {
      text-align: center;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: rgba(0, 0, 0, 0.6);
      .ellipsis();
    }
  }
}

.icons /deep/ .swiper-pagination {
  position: absolute;
  bottom: 0;
}

.icons /deep/ .swiper-pagination-bullet-active {
  background: @themeColor;
}

</style>
