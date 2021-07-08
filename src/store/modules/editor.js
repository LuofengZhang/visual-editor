import modules from '@/views/editor/module/index.js'
const state = {
	editorNavs:[
		{
			name: '首页',
			icon: 'el-icon-s-home',
			active:true
		},
		{
			name: '我的',
			icon: 'el-icon-user-solid'
		}
	],
	pageModules:[],
	checkedModule:null
}
const mutations = {
	setCheckedModule(state, value){
		state.checkedModule = value
	},
	addPageModule(state, name){
		let list = state.pageModules
		for (let key in modules) {
			if(key==name){
				list.push({
					name:name,
					extraData:modules[key].extraData
				})
			}
		}
		state.pageModules = list
	},
	changePageModule(state, [index, action]){
		let pageModules = state.pageModules
		if(action == 'down'){
			let pageModule = pageModules[index] 
			pageModules[index] = pageModules[index+1]
			pageModules[index + 1] = pageModule
		}
		if(action == 'up'){
			let pageModule = pageModules[index] 
			pageModules[index] = pageModules[index-1]
			pageModules[index - 1] = pageModule
		}
		if(action == 'del'){
			pageModules.splice(index, 1)
		}
		state.pageModules = pageModules
	},
	changePageModuleAttr(state, pageModule){
		let pageModules = state.pageModules
		pageModules[state.checkedModule].extraData = pageModule
		state.pageModules = pageModules
	},
}

const actions = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
