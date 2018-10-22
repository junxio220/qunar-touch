<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
    	:hot="hot" 
    	:cities="cities"
    	:letter="letter">
    </city-list>
    <city-alphabet 
    	:cities="cities"
    	@change="handleChange">
    </city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header.vue'
import CitySearch from './components/Search.vue'
import CityList from './components/List.vue'
import CityAlphabet from './components/Alphabet.vue'
import axios from 'axios'

export default {
  name: 'City',
  data() {
  	return {
  		hot: [],
  		cities: {},
  		letter: ''
  	}
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityData() {
      axios.get('/api/city.json')
        .then(this.getCityDataSucc);
    },
    getCityDataSucc (res) {
    	res = res.data;
    	if (res.ret && res.data) {
    		const data = res.data;
    		this.hot = data.hotCities;
    		this.cities = data.cities;
    	}
    },
    handleChange (letter) {
    	this.letter = letter;
    }
  },
  mounted() {
    this.getCityData();
  }
}

</script>
<style>
</style>
