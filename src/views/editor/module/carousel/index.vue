<style lang="scss" scoped>
	.carousel {
		width: 100%;
		height: 150px;
		position: relative;
		::v-deep .el-carousel__container{
			width: 100%;
			height: 100%;
			.el-carousel__item {
				width: 100%;
				height: 100%;
			}
			.el-carousel__img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
<template>
	<el-carousel  class="carousel">
		<el-carousel-item class="el-carousel__item" v-for="(item,index) in extraData.carouselImgs"  :key="index">
			<el-image class="el-carousel__img" :src="item.url" fit="cover"></el-image>
		</el-carousel-item>
	</el-carousel>
</template>

<script>
	// 多图文轮播
	export default {
		name: 'Carousel',
		props: {
			extraData: {
				type: Object,
				default: () => {
					return {
						carouselImgs:[]
					}
				}
			}
		},
		data() {
			return {
			}
		}
	}
</script>


