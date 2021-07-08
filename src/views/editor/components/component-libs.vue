<style lang="scss" scoped>
	.components-libs-wrapper{
		user-select: none;
		padding-top: 10px;
		.c-title{
			width: 256px;
			height: 38px;
			text-align: center;
			line-height: 38px;
			margin: 0 auto;
			color: #333;
			font-size: 14px;
			border: 1px solid #e5e9f2;
			border-radius: 20px;
		}
		.c-scroll{
			width: 100%;
			height: calc(100% - 48px)
		}
		.scroll-flex{
			display: flex;
			flex-wrap:wrap ;
			.flex-item{
				width: 100px;
				height: 100px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
			.item-box{
				width: 70px;
				height: 70px;
				border: 1px solid #e5e9f2;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 14px;
				color: #666666;
				transition: background .3s ease-in;
				&:hover{
					color: #FFFFFF;
					background: var(--primary-color);
				}
			}
			.iconfont{
				font-size: 20px;
				line-height: 20px;
				height: 20px;
			}
		}
		
	}
	
</style>
<template>
	<div class="components-libs-wrapper">
		<div class="c-title">常用模块</div>
		<el-scrollbar class="c-scroll">
			<div class="scroll-flex">
				<div class="flex-item" v-for="(item,index) in module" :key="index" @click="addPageModule(index)">
					<div class="item-box">
						<i class="iconfont" :class="item.icon"></i>
						<div>{{item.name}}</div>
					</div>
				</div>
			</div>
		</el-scrollbar>
	</div>
</template>

<script>
	import module from '../module/index'
	export default {
		data() {
			return{
				module:module
			}
		},
		created() {
			
		},
		methods:{
			addPageModule(name){
				this.$store.commit('editor/addPageModule', name)
				this.$bus.$emit('editorScroll')
			}
		}
	}
</script>
