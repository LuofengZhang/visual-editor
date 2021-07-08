<style lang="scss" scoped>
	.ed-container {
		width: 100%;
		height: 100%;
		background-color: #F0F0F0;
		.ed-header {
			position: relative;
			width: 100%;
			height: 60px;
			line-height: 60px;
			padding-left: 12px;
			padding-right: 12px;
			background: white;
			box-shadow: 0px 1px 4px 0px rgba(195, 195, 195, 0.6);
			z-index: 2;
			user-select: none;
			.ed-title {
				font-size: 14px;
			}
		}
		// 下部
		.ed-main {
			height: 100%;
			position: relative;
			padding: 0;
		}
	}
	
	.page-editor {
		min-width: 1280px;
		height: 100%;
		display: flex;
		justify-content: space-between;
		.editor-page-edit-wrapper {
			width: 300px;
			height: 100%;
			background-color: #FFFFFF;
		}
		.editor-main {
			background-color: #f0f0f0;
			width: calc(100% - 700px);
			height: 100%;
		}
		.el-attr-edit-wrapper {
			width: 400px;
			height: 100%;
			display: flex;
			justify-content: flex-end;
			.el-attr-edit-content{
				width: 0px;
				height: 100%;
				background-color: #FFFFFF;
				transition: width 0.3s ease-in;
				overflow: hidden;
				&.active{
					width: 400px;
				}
			}
		}
	}
</style>
<template>
	<el-container class="ed-container">
		<el-header class="ed-header">
			<div class="ed-title">可视化编辑器</div>
		</el-header>
		<el-main class="ed-main">
			<div class="page-editor">
				<!--组件&页面&模板-->
				<div class="editor-page-edit-wrapper">
					<component-libs></component-libs>	
				</div>
				<!--页面编辑区域-->
				<div class="editor-main" @click="setCheckedModule(null)">
					<editor-pan></editor-pan>
				</div>
				<!--属性编辑区域-->
				<div class="el-attr-edit-wrapper">
					<div class="el-attr-edit-content" :class="{active:checkedModule!=null}">
						<editor-attr></editor-attr>
					</div>
				</div>
			</div>
		</el-main>
	</el-container>
</template>
<script>
	import componentLibs from './components/component-libs'
	import editorPan from './components/editor-pan'
	import editorAttr from './components/editor-attr'
	export default{
		name: 'editorIndex',
		components: {
			componentLibs,
			editorPan,
			editorAttr
		},
		computed: {
			checkedModule(){
				return this.$store.state.editor.checkedModule
			}
		},
		data() {
			return {
				
			}
		},
		methods:{
			setCheckedModule(value){
				this.$store.commit('editor/setCheckedModule', value)
			},
		}
	}
</script>
