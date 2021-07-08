/**
 * 组件库入口
 * */
// 基础组件
export default {
	magicNav:{
		name:'魔方导航',
		icon:'el-icon-menu',
		component:()=>import('./magic-nav'),
		attrComponent:()=>import('./magic-nav/attr'),
		extraData:{
			navList:[
				{
					name:'导航1',
					url: '/static/img/test1.png'
				},
				{
					name:'导航2',
					url: '/static/img/test2.png'
				},
				{
					name:'导航3',
					url: '/static/img/test3.png'
				},
				{
					name:'导航4',
					url: '/static/img/test3.png'
				},
				{
					name:'导航5',
					url: '/static/img/test1.png'
				},
				{
					name:'导航6',
					url: '/static/img/test2.png'
				},
				{
					name:'导航7',
					url: '/static/img/test3.png'
				},
				{
					name:'导航8',
					url: '/static/img/test3.png'
				}
			]
		}
	},
	carousel:{
		name:'轮播图',
		icon:'el-icon-picture',
		component:()=>import('./carousel'),
		attrComponent:()=>import('./carousel/attr'),
		extraData:{
			carouselImgs:[
				{
					url: '/static/img/test1.png'
				},
				{
					url: '/static/img/test2.png'
				},
				{
					url: '/static/img/test3.png'
				}
			]
		}
	},	
}