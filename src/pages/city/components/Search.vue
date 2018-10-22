<template>
  <div class="search">
    <input 
      type="text" 
      class="search-input"
      v-model="keyword" 
      placeholder="输入城市名或拼音"
      > 
    <div class="search-content" ref="search" v-show="keyword.length">
      <div class="content">
        <div class="search-item" v-for="item of answers" :key="item.id">
          {{item}}      
        </div>
        <div class="search-item" v-show="hasAnswersData">
          无此城市数据     
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  props:{
    cities: Object
  },
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      answers: [],
      timer: null
    }
  },
  computed: {
    hasAnswersData(){
      return !this.answers.length;
    }
  },
  watch: {
    keyword(newV) {
      if (this.timer) clearTimeout(this.timer);
      if (!this.keyword) {
        this.answers = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.name.indexOf(newV) > -1 ||
              item.spell.indexOf(newV) > -1) {
              result.push(item.name);
            }
          });
        }
        this.answers = result;
      }, 100);
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search);
  }
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
  .search-content{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: unit(80/100, rem);
    background: #fff;
    z-index: 1;
    overflow: hidden;
    background: #eee;
    .search-item {
      color: rgba(0, 0, 0, 0.7);
      line-height: .14rem;
      padding: unit(5/100, rem);
      border-bottom: 1px solid #eee;
      background: #fff;
      text-align: left;
      text-indent: .1rem;    
    }
  }
}

</style>
