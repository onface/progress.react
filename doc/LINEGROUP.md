# ProgressGroup


## basic

`render`优先于`props.children`

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="simple-demo" ></div>',
    source: './lineGroup/simple.demo.js',
    open: true,
    side: true
}
````


## props type

当配置参数相同时, 可以简化至只配置字符串			
> 但是参数`percent`数据格式必须是`propsType.arrayOf(propsType.string)`

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="props-type-demo" ></div>',
    source: './lineGroup/propsType.demo.js',
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
    source: './lineGroup/color.demo.js',
    open: true,
    side: true
}
````

## props


````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="props-demo" ></div>',
    source: './lineGroup/props.demo.js',
    open: true,
    side: true
}
````

## lap

虽然有提供这个这接口，但是一般场景下不建议将进度条重叠显示，即使要显示成重叠模式，也建议不要像`Progress`组件那样，显示过多的信息，如文字、渐变等等。    
!绝不适合使用的场景： 例`Progress1`的**percent1** > `Progress2`的**percent2** 在变化过程中不是永久成立的。      

并且为了能够正常显示，`Progress`组件会根据**precent**的值，从高到低调节渲染先后顺序。


````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="lap-demo" ></div>',
    source: './lineGroup/lap.demo.js',
    open: true,
}
````

## customThemes

themes & prefixClassName & className

使用方式,参照[点此查看](/doc/README.md#customThemes)

<!-- 
## render
复杂使用
render 优先于 children
demo use secondary Progress to show new ProgressGroup -->