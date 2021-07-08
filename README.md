# visual-editor

## 前言

> 一个h5可视化编辑器。

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
