# 文档

默认不提供文字, 需要的话, 至本章最后一节 [render](#render) 查看使用

## basic

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="simple-demo" ></div>',
    source: './line/simple.demo.js',
    open: true,
    side: true
}
````

## width

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="width-demo" ></div>',
    source: './line/width.demo.js',
    open: true,
    side: true
}
````


## color

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="color-demo" ></div>',
    source: './line/color.demo.js',
    open: true,
    side: true
}
````

## addStyle

themes & prefixClassName & className

可以右键审查元素, 查看三者的不同, 方便进行一些改动或二次封装        
也可以复制 lib/index.less 和 lib/less/ 下的文件，修改部分或者其他代码。配置 `prefixClassName` `themes`


````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="cls-demo" ></div>',
    source: './line/cls.demo.js',
    open: true,
    side: true
}
````

> demo less

````code
{
    title: 'themes',
    desc: '',
    source: './line/themes.demo.less',
    open: false,
    run:false
}
````

````code
{
    title: 'className',
    desc: '',
    source: './line/cls.demo.less',
    open: false,
    run:false
}
````

````code
{
    title: 'prefixClassName',
    desc: '',
    source: './line/pcls.demo.less',
    open: false,
    run:false
}
````

## customThemes

如果你想要快速新增一种风格，只需要修改 less/style.less 和 less/settings.less 文件。比如找到这两个文件的 /\* customPurple \*/ 部分，取消注释，就可以使用         
`<Progress themes="customPurple" />`

````code
{
    title: '基础使用',
    desc: '以防和组件样式冲突，配置了`prefixClassName`',
    html: '<div id="customThemes-demo" ></div>',
    source: './line/customThemes.demo.js',
    open: true,
    side: true
}
````

> demo less

````code
{
    title: 'customThemes',
    desc: '',
    source: './line/customThemes.demo.less',
    open: false,
    run:false
}
````


## render

可以任意处理`html结构` `样式` 等等, 进行二次封装调用        
文字颜色没有跟随不同状态色变化,可自行配置           
精确度配置`accuracy`与 [获取精确度](./ITOOL.md#getAccuracy) `getAccuracy`


````code
{
    title: '基础使用',
    desc: '文字的位置放置基本示例',
    html: '<div id="render-demo" ></div>',
    source: './line/render.demo.js',
    open: true
}
````


