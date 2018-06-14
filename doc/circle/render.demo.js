var React = require('react')
var ReactDOM = require('react-dom')
// var ProgressCircle = require('progress.react').ProgressCircle
// var getAccuracy = require('progress.react').getAccuracy
import {ProgressCircle, getAccuracy, getCircle, transToFunc} from 'progress.react'

class RenderDemo extends React.Component {
    render () {
        return (
            <div className="renderDemo" style={{width:'100px'}}>
            	<h4>basic</h4>
            	<ProgressCircle
            		percent={80}
            		children={function(processSelf, ref, domProps){
            			let ps = processSelf
            			// 获取circle的样式属性
            			let circle = getCircle(ps.props.percent, ps.props.width)
            			// 获取文字部分正确显示内容
		                let textNode = transToFunc.call(ps, ps.props.text)
		                return (
		                    <div 
		                        ref={ref`root`}
		                        {...domProps}
		                    >
		                        <div className={`${ps.props.prefixClassName}-circle`}>
		                            <svg viewBox={circle.viewBox} className={`${ps.props.prefixClassName}-circle-svg`}>
		                                <path className={`${ps.props.prefixClassName}-circle-svg-track`}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth
		                                    }}
		                                ></path>
		                                <path className={`${ps.props.prefixClassName}-circle-svg-bar`}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth,
		                                        strokeDashoffset: circle.strokeDashoffset
		                                    }}
		                                ></path>
		                            </svg>
		                            <div className={`${ps.props.prefixClassName}-F-text ${ps.props.prefixClassName}-F-text--inset`}>
		                                {textNode}
		                            </div>
		                        </div>
		                    </div>
		                )
            		}}
            	/>
            	
            	<hr/>

            	<h4>custom</h4>
            	<ProgressCircle
            		percent={80}
            		accuracy={1}
            		customData={{
            			amount:100,
            			better:80
            		}}
            		children={function(processSelf, ref, domProps){
            			let ps = processSelf
            			console.log(ps)
            			// 获取circle的样式属性
            			let circle = getCircle(ps.props.percent, ps.props.width)
		                return (
		                    <div 
		                        ref={ref`root`}
		                        {...domProps}
		                    >
		                        <div className={`${ps.props.prefixClassName}-circle`}>
		                            <svg viewBox={circle.viewBox} className={`${ps.props.prefixClassName}-circle-svg`}>
		                                <path className={`${ps.props.prefixClassName}-circle-svg-track`}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth
		                                    }}
		                                ></path>
		                                <path className={`${ps.props.prefixClassName}-circle-svg-bar`}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth,
		                                        strokeDashoffset: circle.strokeDashoffset
		                                    }}
		                                ></path>
		                            </svg>
		                            <div className={`${ps.props.prefixClassName}-F-text ${ps.props.prefixClassName}-F-text--inset`}>
		                                {getAccuracy(ps.props.percent, ps.props.accuracy)}
		                                <i style={{fontSize:'10px',color:'#aaa'}}>%</i>
		                            </div>
		                        </div>
		                        <div>
		                        	统计数据<br/>
		                        	总数:{ps.props.customData.amount}<br/>
		                        	优秀人数:{ps.props.customData.better}
		                        </div>
		                    </div>
		                )
            		}}
            	/>
            </div>
        )
    }
}
/*ONFACE-DEL*/RenderDemo = require("react-hot-loader").hot(module)(RenderDemo)
ReactDOM.render(
    <RenderDemo />,
    document.getElementById('render-demo')
)

