<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
        <h1 class="title">当前城市</h1>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <h1 class="title">热门城市</h1>
        <div class="btn-list">
          <div 
            class="btn-wrapper" 
            v-for="hotCity of hot" 
            :key="hotCity.id"
            @click="changeCity(hotCity.name)">
            <div class="btn">{{hotCity.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(cities, key) in cities">
        <h1 class="title"
            :ref="key">
          {{key}}
        </h1>
        <ul class="item-group">
          <li 
            class="item-list" 
            v-for="city of cities"
            @click="handleChangeCity(city.name)">
            {{city.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations} from 'vuex'

export default {
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  name: 'CityList',
  methods: {
    handleChangeCity (city) {
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState(['city'])
  },
  watch: {
    letter (letter) {
      let element = this.$refs[letter][0];
      this.scroll.scrollToElement(element);
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  }
}

</script>
<style scoped lang="less">
.list {
  position: absolute;
  top: unit(80/100, rem);
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  .area {
    overflow: hidden;
    .title {
      height: unit(32/100, rem);
      line-height: unit(32/100, rem);
      background-color: rgba(0, 0, 0, 0.04);
      padding-left: .08rem;
      font-size: unit(12/100, rem);
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      color: rgba(0, 0, 0, 0.7);
    }

    .btn-list {
      overflow: hidden;
      padding: .03rem .3rem .03rem .03rem;
      .btn-wrapper {
        float: left;
        width: 33.333%;
        line-height: unit(12/100, rem);
        font-size: unit(12/100, rem);
        .btn {
          padding: unit(2/100, rem) 0;
          margin: unit(5/100, rem);
          text-align: center;
          border: 1px solid #ccc;
          border-radius: unit(3/100, rem);
        }
      }
    }

    .item-group {
      .item-list {
        line-height: unit(12/100, rem);
        font-size: unit(12/100, rem);
        padding: unit(8/100, rem);
        border-bottom: 1px solid #ccc;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

</style>
