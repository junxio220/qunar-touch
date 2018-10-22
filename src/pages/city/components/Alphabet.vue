<template>
  <ul class="list">
    <li class="item" 
	    v-for="item in citiesList" 
	    @click="handleLetterClick(item)" 
	    :ref="item" 
	    @touchstart="handleTouchStart" 
	    @touchmove="handleTouchMove" 
	    @touchend="handleTouchEnd">
      {{item}}
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  name: 'CityAlphabet',
  methods: {
    handleLetterClick(letter) {
      this.$emit('change', letter);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
    	if (this.timer) clearTimeout(this.timer);
    	if(this.touchStatus) {
        this.timer = setTimeout( ()=> {
          const touchY = e.touches[0].clientY - 80;
          let index = Math.floor((touchY - this.startY) / 20);
          if(index >= 0 && index < this.citiesList.length) {
            this.$emit('change', this.citiesList[index]);
          }
        }, 17);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  computed: {
    citiesList() {
      const cityList = [];
      for(let key in this.cities) {
        cityList.push(key);
      }
      return cityList;
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop;
  }
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
    line-height: unit(16/100, rem);
    text-align: center;
  }
}

</style>
