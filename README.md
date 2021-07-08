# visual-editor

## 前言

> 一个h5可视化编辑器。

## 效果图
想必你一定使用过易企秀或百度H5等微场景生成工具制作过炫酷的h5页面，除了感叹其神奇之处有没有想过其实现方式呢？本文从零开始实现一个H5编辑器项目完整设计思路和主要实现步骤，并开源前端代码。有需要的小伙伴可以按照该教程从零实现自己的H5编辑器。（实现起来并不复杂，该教程只是提供思路，并非最佳实践）

> ![image](https://gitee.com/luofengzh/visual-editor/public/static/example/1.jpg)
> ![image](https://gitee.com/luofengzh/visual-editor/public/static/example/2.jpg)
> ![image](https://gitee.com/luofengzh/visual-editor/public/static/example/3.jpg)
## 项目目录
``` javascript
	src {
		assets: 项目资产存在（图片等）
		components: 公用组件存放
		store: 整个项目的状态存储汇集地方
		router: 路由表
		styles: 整个项目的公用样式表集中地方
		common: 整个项目的工具文件夹
		view: 页面存放  {
			editor:画板模块 {
				components: 当前模块的私有组件 
				module: 画板的插件/模块/组件
			}
		}
	}
```
## 技术栈
**前端：**<br/>
`vue`: 模块化开发。<br/>
`vuex`: 状态管理。<br/>
`scss`: css预编译器。<br/>
`element-ui`：饿了么UI。<br/>

## 前端编辑器实现
编辑器的实现思路是：编辑器生成页面JSON数据，服务端负责存取JSON数据，渲染时从服务端取数据JSON交给前端模板处理。

## 启动运行
```
npm run serve
```
