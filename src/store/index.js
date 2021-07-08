import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import editor from './modules/editor'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		token:'1',
	},
	getters,
	modules: {
		editor
	},
})

export default store
