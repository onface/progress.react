# $render

只有使用到组件 `render` 接口时, 才会需要浏览本章节, 否则可以预先跳过这部分


## getAccuracy

获取精确度，搭配组件`render`接口使用，点此查看 [render示例](./README.md#render)

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="accuracy-demo" ></div>',
    source: './itool/getAccuracy.demo.js',
    open: true
}
````

## getColor

获取进度条的颜色, 传入的颜色参数兼容**单色**和**多色**		
**只适用于 `Progress` 组件**

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="color-demo" ></div>',
    source: './itool/getColor.demo.js',
    open: true
}
````


## getCircle

获取进度所需，传入参数`进度百分比percent`和`进度条宽度width`，返回组件显示所需`viewBox` `strokeWidth` `strokeDashoffset`		
[点此查看示例](/doc/CIRCLE.md#render)			
**只适用于 `ProgressCircle` 组件**


## transToFunc

使各种参数类型如`boolean` `string`转换后都可以正常react render中渲染 		
[点此查看示例效果](/doc/CIRCLE.md#text) 将不同类型`props.text`正常渲染		
[点此查看使用方法](/doc/CIRCLE.md#render)		
**目前只有 `ProgressCircle` 组件需要用到**



## childToArray

*由于`ProgressGroup`组件目前未提供`render`接口，所有这个工具函数使用者还不会接触到，仅仅记录在此*		

将`props.children`转化成`Array`数组		
**只适用于 `ProgressGroup` 组件**



