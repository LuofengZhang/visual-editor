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
			<el-form style="padding: 15px 0 0 15px;" label-width="60px" label-position="top">
				<el-form-item label="轮播图片">
					<el-upload class="picture-card" action="#" :on-change="onChange" :auto-upload="false" list-type="picture-card"  :file-list="carouselImgs"	>
						<i slot="default" class="el-icon-plus"></i>
						<div slot="file" slot-scope="{file}">
							<el-image style="height: 100%;width: 100%;position: absolute;" :src="file.url" fit="cover"></el-image>
							<span class="el-upload-list__item-actions">
								<span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
									<i class="el-icon-zoom-in"></i>
								</span>
								<span v-if="carouselImgs.length>1" class="el-upload-list__item-delete" @click="handleRemove(file)">
									<i class="el-icon-delete"></i>
								</span>
							</span>
						</div>
					</el-upload>
				</el-form-item>
			</el-form>
		</div>
		<el-dialog :visible.sync="dialogVisibleImage">
			<img width="100%" :src="dialogImageUrl">
		</el-dialog>
	</div>
</template>

<script>
	export default {
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
		computed: {
			carouselImgs() {
				return this.extraData.carouselImgs 
			}
		},
		data() {
			return {
				dialogImageUrl: '',
				dialogVisibleImage: false,
			};
		},
		methods: {
			onChange(file){
				let list = this.carouselImgs
				list.push({
					uid:file.uid,
					url:file.url
				})
				this.$store.commit('editor/changePageModuleAttr', {
					...this.extraData,
					carouselImgs:list
				})
			},
			handleRemove(file) {
				let list = []
				for (let s of this.carouselImgs) {
					if(s.uid==file.uid){}else{
						list.push(s)
					}
				}
				this.$store.commit('editor/changePageModuleAttr', {
					...this.extraData,
					carouselImgs:list
				})
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisibleImage = true;
			},
		}
	}
</script>
