<style scoped lang="scss">
	.editor-attr{
		
	}
</style>
<template>
	<div class="editor-attr">
		<components :is="componentName" :extraData="extraData"></components>
	</div>
</template>

<script>
	import modules from '../module/index'
	const components = {}
	for (let key in modules) {
		components[key] = modules[key].attrComponent
	}
	export default {
		components: components,
		computed: {
			pageModules() {
				return this.$store.state.editor.pageModules
			},
			checkedModule() {
				return this.$store.state.editor.checkedModule
			},
			extraData(){
				let pageModules = this.$store.state.editor.pageModules
				let checkedModule = this.$store.state.editor.checkedModule
				if(checkedModule != null){
					return pageModules[checkedModule].extraData || {}
				}
				
			}
			
		},
		watch: {
			checkedModule(newValue) {
				if(newValue != null){
					this.componentName = this.pageModules[newValue].name
					
				}
			}
		},
		data() {
			return {
				componentName:'',
			}
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>
