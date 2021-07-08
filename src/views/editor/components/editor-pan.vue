<style scoped lang="scss">
	.editor-pan {
		transform: scale(1);
		width: 375px;
		height: 667px;
		background: #F4F4F4;
		position: relative;
		user-select: none;
		margin: 50px auto 0;

		.editor-head {
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid #eee;
			font-size: 17px;
			text-align: center;
			background-color: white;
			box-sizing: border-box;
			background-color: #FFFFFF;
		}

		.editor-nav {
			width: 100%;
			height: 50px;
			position: absolute;
			bottom: 0;
			background-color: white;
			border-top: 1px solid #eee;
			box-sizing: border-box;
			display: flex;
			justify-content: space-around;
			background-color: #FFFFFF;

			.nav-item {
				display: block;
				cursor: pointer;
				text-align: center;
				color: #666;
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				padding: 5px 0;

				&.active {
					color: var(--primary-color);
				}

				.nav-text {
					font-size: 14px;
				}

				.nav-icon-wrap {
					width: 26px;
					height: 26px;
					font-size: 20px;
					display: block;
				}
			}
		}

		.editor-content {
			height: 567px;
			width: 375px;
			position: relative;
			box-sizing: border-box;

			.editor-scroll {
				height: 100%;
				overflow-y: scroll;

				&::-webkit-scrollbar-track-piece,
				&::-webkit-scrollbar,
				&::-webkit-scrollbar-thumb {
					display: none;
				}
			}

			.module-box {
				width: 375px;
				position: relative;
				margin-bottom: 15px;
				box-sizing: border-box;
				.light-border {
					border: 1px dashed transparent;
					position: absolute;
					left: 0;
					top: 0;
					height: 100%;
					width: 100%;
					z-index: 2;
					&.active {
						border-color: var(--primary-color) !important;
					}
				}
			}

			.light-btn-box {
				width: 25px;
				background: rgba(51, 51, 51, .9);
				position: absolute;
				right: -25px;
				top: 0px;
				color: #FFFFFF;
				.light-btn{
					height: 25px;
					line-height: 25px;
					width: 25px;
					border-bottom: 1px solid rgba(51, 51, 51, 1);
					text-align: center;
					&:last-child{
						border-bottom:none
					}
				}
			}
			.empty {
				width: 100%;
				height: 100%;
				background: #fff;
				padding-top: 80px;
				.empty-bg {
					background: url(../../../assets/bg.png) no-repeat;
					width: 180px;
					height: 220px;
					margin: 0 auto 20px;
				}
				.empty-tip {
					text-align: center;
					font-size: 14px;
					color: #666;
				}
			}
		}
	}
</style>
<template>
	<div class="editor-pan">
		<!-- 标题 -->
		<div class="editor-head">页面名称</div>
		<!-- 画板 -->
		<div class="editor-content">
			<!-- 模板列表 -->
			<div v-if="pageModules.length>0" class="editor-scroll" ref="editorWrapper">
				<div @click.stop="setCheckedModule(index)" @mouseover="modulemouseover($event, index)" @mouseout="modulemouseout($event, index)" class="module-box"
					v-for="(item,index) in pageModules">
					<components :is="item.name" :extraData="item.extraData"></components>
					<!-- 高亮框 -->
					<div class="light-border" :class="{active:((hoverIndex==index)&&hoverShow)||checkedModule==index}"></div>
				</div>
			</div>
			<!-- 空白页 -->
			<div v-else class="empty" >
				<div class="empty-bg"/>
				<div class="empty-tip">点击模块，马上设计您的专属小程序!</div>
			</div>
			<!-- 右侧排序和删除按钮 -->
			<div class="light-btn-box" v-show="hoverShow" @mouseover="lightmouseover($event)" @mouseout="lightmouseout($event)"  :style="'top:'+ hoverY+'px;'">
				<div @click="changePageModule('up')" v-show="hoverIndex!==0" class="light-btn el-icon-top"></div>
				<div @click="changePageModule('down')" v-show="hoverIndex!==pageModules.length-1" class="light-btn el-icon-bottom"></div>
				<div @click="changePageModule('del')" class="light-btn el-icon-close"></div>
			</div>
		</div>

		<!-- 导航 -->
		<div class="editor-nav">
			<div v-for="(item, index) in editorNavs" class="nav-item" :class="{active:item.active}" :key="index">
				<div class="nav-icon-wrap iconfont" :class="item.icon" />
				<div class="nav-text">{{ item.name }}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import modules from '../module/index'
	const components = {}
	for (let key in modules) {
		components[key] = modules[key].component
	}
	export default {
		components: components,
		computed: {
			editorNavs() {
				return this.$store.state.editor.editorNavs
			},
			pageModules() {
				let pageModules = this.$store.state.editor.pageModules
				return pageModules
			},
			checkedModule() {
				return this.$store.state.editor.checkedModule
			},
		},
		data() {
			return {
				hoverIndex: null,
				hoverY: null,
				hoverShow:false,
			}
		},
		mounted() {
			// 这个事件是左边组件区域的点击事件，属于非父子组件通信
			this.$bus.$on('editorScroll', () => {
				// 滚动到底部
				this.$nextTick(() => {
					if (this.$refs.editorWrapper) {
						this.scrollBottom(this.$refs.editorWrapper, this.$refs.editorWrapper.scrollHeight, 500)
					}
				})
			})
		},
		methods: {
			// 组件选中准备编辑属性
			setCheckedModule(value){
				this.$store.commit('editor/setCheckedModule', value)
			},
			//滚动底部
			scrollBottom(dom, number, time){
				if (!time) {
					dom.scrollTop = number
					return number
				}
				const spacingTime = 20 // 设置循环的间隔时间  值越小消耗性能越高
				let spacingInex = time / spacingTime // 计算循环的次数
				let nowTop = dom.scrollTop // 获取当前滚动条位置
				let everTop = (number - nowTop) / spacingInex // 计算每次滑动的距离
				let scrollTimer = setInterval(() => {
					if (spacingInex > 0) {
						spacingInex--
						this.scrollBottom(dom, nowTop += everTop)
					} else {
						clearInterval(scrollTimer) // 清除计时器
					}
				}, spacingTime)
			},
			//鼠标移入模块高亮显示操作按钮
			modulemouseover(e, index) {
				let currentTarget = e.currentTarget
				this.hoverShow = true
				this.hoverIndex = index
				let y = currentTarget.getBoundingClientRect().y
				if (y < 160) {
					y = 160
				}
				this.hoverY = y - 160
			},
			//鼠标移出模块
			modulemouseout(e, index) {
				this.hoverShow = false
			},
			//鼠标移入按钮
			lightmouseout(e) {
				this.hoverShow = false
			},
			//鼠标移出按钮
			lightmouseover(e) {
				this.hoverShow = true
			},
			//模块排序或删除
			changePageModule(action){
				this.hoverShow = false
				this.$store.commit('editor/changePageModule', [this.hoverIndex , action])
			},
		}
	}
</script>
