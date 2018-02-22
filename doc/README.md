# 文档

## basic

````code
{
    title: '基础使用',
    desc: '**线形进度条**',
    html: '<div id="basic-demo" ></div>',
    js: './basic.demo.js',
    source: './Basic.js',
    horiz: true,
    open: true
}
````

## inset

````code
{
    title: '基础使用',
    desc: '**线形进度条 — 内置显示内容**',
    html: '<div id="inset-demo" ></div>',
    js: './inset.demo.js',
    source: './Inset.js',
    horiz: true,
    open: true
}
````

## circle

````code
{
    title: '基础使用',
    desc: '**环形进度条**',
    html: '<div id="circle-demo" ></div>',
    js: './circle.demo.js',
    source: './Circle.js',
    horiz: true,
    open: true
}
````

## size

````code
{
    title: '基础使用',
    desc: '**通过改变包裹的div的`width`和`font-size`来自适应大小**',
    html: '<div id="size-demo" ></div>',
    js: './size.demo.js',
    source: './Size.js',
    horiz: true,
    open: true
}
````

## change

````code
{
    title: '基础使用',
    desc: '**改变数据**',
    html: '<div id="change-demo" ></div>',
    js: './change.demo.js',
    source: './Change.js',
    horiz: true,
    open: true
}
````

## costom

````code
{
    title: 'Progress',
    desc: '**这里尝试下各种属性改变吧 ( 表单没做校验,请手下留情测试 ) **',
    html: '<div id="costom-demo" ></div>',
    js: './costom.demo.js',
    source: './Costom.js',
    open: false
}
````

## addStatus

如果你想要新增一种状态风格，只需要修改 `less/style.less` 和 `less/settings.less` 文件。        
比如找到这两个文件的 `// dark` 部分，取消注释，就可以使用      
`<Progress percent={80} status={'dark'}/>`      
`<ProgressGroup percent={[90,50]} status={'dark'} />`



## group

> 使用之前需要了解一些注意点 [点此查看](../doc/intro.html#ProgressGroup)

````code
{
    title: '基础使用',
    desc: '**多进度条叠加**',
    html: '<div id="group-demo" ></div>',
    js: './group.demo.js',
    source: './Group.js',
    open: true
}
````
