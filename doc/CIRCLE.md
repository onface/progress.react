# circle

## basic

````code
{
    title: '基础使用',
    desc: '暂未提供loading样式',
    html: '<div id="simple-demo" ></div>',
    source: './circle/simple.demo.js',
    open: true,
    side: true
}
````

## text


````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="text-demo" ></div>',
    source: './circle/text.demo.js',
    open: true,
    side: true
}
````

## width
虽然组件样式是以`em`为单位, 但`ProgressCircle`内以`svg`制作而成的部分以`px`为单位,		
`svg`默认以`viewbox='0 0 100 100'` `width='6px'`基准制作,		
因为单位的不同, 当改变外容器的`width` `fontSize` 和组件的`width` 会有不同的效果

````code
{
    title: '基础使用',
    desc: '',
    html: '<div id="width-demo" ></div>',
    source: './circle/width.demo.js',
    open: true,
    side: true
}
````