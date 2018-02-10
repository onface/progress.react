import p from 'prop-types'
var example = function () {return arguments;}

export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-progress',
        themes: '',
		percent: [0] , // 百分比(不带百分比符号的数字)
        accuracy: 0 , // 精确到小数点后几位
		type:'line' , // 进度条类型 (暂只支持'line','inset'两种)
		status:'default' , // 进度条状态
        active: false , // 控制显示激活样式
        info: true , // 控制显示进度条右侧显示内容 (显示的是第一条进度条的信息)
		insetText: [false], // 控制进度条内置显示内容 (仅当type:'inset'时此属性生效)
        barColor:[''], // 改变进度条颜色
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        percent: p.arrayOf(p.number) ,
        accuracy: p.oneOfType([
            p.number,
            p.arrayOf(p.number)
        ]) ,
    	type: p.string ,
    	status: p.string ,
        active: p.bool ,
        info: p.oneOfType([
            p.bool ,
            p.func 
        ]),
        insetText: p.arrayOf(
            p.oneOfType([
                p.bool ,
                p.func 
            ])
        ),
    	barColor: p.arrayOf(p.string) ,
    }
    app.propExample = {
        percent: example(
            [20], // 这样等同只有一条进度条, 那么就用回Progress组件吧,Progress支持更多样式类型
            [99.99, 60, 24.1] // 三条进度条叠加
            [90, 80, 70, 60, 50] // 如果超过三条以上进度条叠加, 就应该考虑是不是不应该使用这种组件了
        ),
        accuracy: example(
            2, // => [2, 2, 2, ...] 每一条进度条都精确到小数后2位
            [2] // => [2, 0, 0, ...] 第一条进度条都精确到小数后2位,其他进度条精确度采用默认值
            [2,3,1] // 第一条进度条精确到小数后2位,第二条精确到后3位,第三条精确到后1位
        ),
        type: example(
            'line', // 横向进度条
            'inset', // 横向进度条 - 可显示内置内容
        ),
        status: example(
            'default' , // 进度条以及进度条右侧或环内显示内容 为 蓝色
            'error' , // 进度条以及进度条右侧或环内显示内容 为 红色
            'success' , // 进度条以及进度条右侧或环内显示内容 为 绿色
        ),
        active: example(
            true ,
            false
        ),
        info: example(
            false , // 不显示
            true , // 默认显示百分比
            function(percent){
                return (<span className="fi fi-times-circle"> {percent}%</span>)
            } , // 显示函数返回的React.Element
        ),
        insetText: example(
            [true] , 
            // => [true, false, false, ...] 第一条显示默认百分比,其他进度条的会被转化为默认false
            [ ()=>{ return (<i>加载中...</i>) } ] , 
            // => [fn, false, false, ...] 第一条显示自定义的函数返回内容,其他进度条会被转化为默认false
            [true,false,true] , // 如果是四条进度条的话, 你应该知道我默认补足第四条为false咯
            [
                ()=>{ return (<i>已缓存</i>) },
                ()=>{ return (<i>已播放</i>) },
            ], 
            // 多嘴补一句, 多条进度条叠加事实上不太适合显示有自己的内置内容, 不是'不适合都显示',而是'不适合显示'
        ),
        barColor: example(
            ['red', '#000', 'rgb(204,204,204)', 'rgba(230,25,224,0.3)'] ,
            // 第一条红,第二条黑,第三条灰,第四条粉
            ['unknow','green'] ,
            // 第一条无法识别的颜色会被组件三个主色调中随机一个替代,
            // 第二条绿, 
            // 如果配置了两条进度条以上,其他进度条会和第一条一样被随机替代, 但放心是间隔替代,不会是相邻重复颜色,您故意配置与主色调相同的颜色混在其中, 对不起,我没做那么细致
        )
    }
}
