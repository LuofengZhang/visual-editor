<style scoped lang="scss">
	.magic-nav {
		background: #FFFFFF;
		width: 375px;
		position: relative;
		.magic-box{
			padding: 15px;
		}
		.magic-item{
			padding: 8px 0;
			font-size: 14px;
			display: flex;
			align-items: center;
			flex-direction: column;
		}
		.magic-icon{
			background: -webkit-gradient(linear, left top, left bottom, from(#8bd3fb), to(#4e98f8));
			width: 45px;
			height: 45px;
			line-height: 45px;
			text-align: center;
			margin-bottom: 10px;
			border-radius: 50%;
			overflow: hidden;
		}
		.magic-icon-img{
			width: 100%;
			height: 100%;
		}
	}
</style>

<template>
	<div class="magic-nav">
		<el-row class="magic-box">
			<el-col :span="6" v-for="(item,index) in extraData.navList" :key="index">
				<div class="magic-item">
					<div class="magic-icon">
						<el-image class="magic-icon-img" :src="item.url" fit="cover"></el-image>
					</div>
					<div>{{item.name}}</div>
				</div>
			</el-col>
		</el-row>
		<slot name="select"></slot>
	</div>
</template>

<script>
	// 魔方导航
	export default {
		name: 'magicNav',
		props: {
			extraData: {
				type: Object,
				default: () => {
					return {
						navList:[]
					}
				}
			}
		},
		mounted() {
			
		},
	}
</script>