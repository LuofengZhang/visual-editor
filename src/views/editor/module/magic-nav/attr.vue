<style lang="scss" scoped>
	.attr {
		user-select: none;
		height: 100%;
		.header-flex {
			font-size: 14px;
			height: 50px;
			line-height: 50px;
			display: flex;
			border-bottom: 1px solid #f1f1f1;
			background-color: #fbfbfb;
			color: #333;
			text-align: center;

			.header-item {
				flex: 1;
			}
		}
		.attr-content{
			width: 100%;
			height: calc(100% - 50px);
			overflow-y: scroll;
			.picture-card{
				::v-deep .el-upload-list__item{
					width: 100px;
					height: 100px;
				}
				::v-deep .el-upload{
					width: 100px;
					height: 100px;
					line-height: 100px;
				}
			}
		}
	}
</style>

<template>
	<div class="attr">
		<div class="header-flex">
			<div class="header-item">基础</div>
		</div>
		<div class="attr-content">
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
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
		methods: {
			
		}
	}
</script>
