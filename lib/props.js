import p from 'prop-types'
var example = function () {return arguments;}

export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-progress',
        themes: '',
        percent: 0 , // 百分比(不带百分比符号的数字)
        accuracy: 0 , // 精确到小数点后几位
		type:'line' , // 进度条类型
		status:'default' , // 进度条状态
        active: false , // 控制显示激活样式 (环形进度条暂不支持)
        info: true , // 控制显示进度条右侧显示内容,或环内显示内容
        insetText: false, // 控制进度条内置显示内容 (仅当type:'inset'时此属性生效)
        barColor:'', // 改变进度条颜色
        barMarkColor:'#f5f5f5', // 改变底层进度条颜色
		dashboard:false // 控制是否显示为仪表盘样式 (仅当type:'circle'时此属性生效)
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        percent: p.number ,
        accuracy: p.number ,
    	type: p.string ,
        status: p.string ,
        active: p.bool ,
        info: p.oneOfType([
            p.bool ,
            p.func 
        ]),
        insetText: p.oneOfType([
            p.bool ,
            p.func 
        ]),
    	barColor: p.string ,
    	dashboard: p.bool ,
    }
    app.propExample = {
        percent: example(
            20, // int
            99.99, // float
            -12, // => 0 会被转化为有效数据0
            120, // => 100 会被转化为有效数据100
        ),
        accuracy: example(
            2, // 精确到小数后2位
            8, // 精确到小数后8位, !不建议精确到那么多位数,影响样式不好看
            -1 // 请别这么写,Please!
        ),
        type: example(
            'line', // 横向进度条
            'inset', // 横向进度条 - 可显示内置内容
            'circle' // 环形进度条
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
            true , // 默认显示内置内容为百分比
            false , // 不显示
            function(percent){
                return (<span className="fi fi-times-circle"> {percent}%</span>)
            } , // 显示函数返回的React.Element
        ),
        barColor: example(
            'red',
            '#999',
            'rgb(0,0,0)',
            'rgba(200,200,200,0.3)',
            'unknowColor', // 如果设置的颜色无法识别, 将会在组件自身提供的三中主色调中随机一个替代
            ['red','green']
        ),
        barMarkColor: example(
            'red',
            '#999',
            'rgb(0,0,0)',
            'rgba(200,200,200,0.3)',
        ),
        dashboard: example(
            true , // 显示为仪表盘样式 ( 只有在'type:circle'时才有效 )
            false
        )
    }
}
