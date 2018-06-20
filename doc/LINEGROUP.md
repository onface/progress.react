# ProgressGroup


## basic

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="simple-demo" ></div>',
    source: './lineGroup/simple.demo.js',
    open: false,
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
    open: false,
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
    open: false,
    side: true
}
````

## lap

- dont suggest use lap 原因细述
- order 说明 从高到低

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="lap-demo" ></div>',
    source: './lineGroup/lap.demo.js',
    open: false,
    side: true
}
````

## customThemes

themes & prefixClassName & className

使用方式,参照[点此查看](/doc/README.md#customThemes)


## render
复杂使用

demo use secondary Progress to show new ProgressGroup