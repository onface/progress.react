var React = require('react')
var ReactDOM = require('react-dom')
// var ProgressCircle = require('progress.react').ProgressCircle
import {ProgressCircle} from 'progress.react'

class RenderDemo extends React.Component {
    render () {
        return (
            <div className="renderDemo" style={{width:'100px'}}>
            	<h4>basic</h4>
            	<ProgressCircle
            		percent={80}
            		render={function(own){
            			// 获取circle的样式属性
            			let circle =  own.$render('getCircle')(own.props.percent, own.props.width)
            			// 获取文字部分正确显示内容
		                let textNode = own.$render('transToFunc').call(own, own.props.text)
		                return (
		                    <div 
		                        {...own.$render('rootProps')}
		                    >
		                        <div className={`${own.props.prefixClassName}-circle`}>
		                            <svg viewBox={circle.viewBox} className={`${own.props.prefixClassName}-circle-svg`}>
		                                <path 
		                                	className={`${own.props.prefixClassName}-circle-svg-track`}
			                                d={own.props.path}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth,
		                                        stroke: own.props.barColor
		                                    }}
		                                ></path>
		                                <path 
		                                	className={`${own.props.prefixClassName}-circle-svg-bar`}
		                                	d={own.props.path}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth,
		                                        strokeDashoffset: circle.strokeDashoffset,
		                                        stroke: own.props.strackColor
		                                    }}
		                                ></path>
		                            </svg>
		                            <div className={`${own.props.prefixClassName}-F-text ${own.props.prefixClassName}-F-text--inset`}>
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
            		render={function(own){
            			// 获取circle的样式属性
            			let circle = own.$render('getCircle')(own.props.percent, own.props.width)
		                return (
		                    <div 
		                        {...own.$render('rootProps')}
		                    >
		                        <div className={`${own.props.prefixClassName}-circle`}>
		                            <svg viewBox={circle.viewBox} className={`${own.props.prefixClassName}-circle-svg`}>
		                                <path 
			                                className={`${own.props.prefixClassName}-circle-svg-track`}
			                                d={own.props.path}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth
		                                    }}
		                                ></path>
		                                <path 
			                                className={`${own.props.prefixClassName}-circle-svg-bar`}
			                                d={own.props.path}
		                                    style={{
		                                        strokeWidth: circle.strokeWidth,
		                                        strokeDashoffset: circle.strokeDashoffset
		                                    }}
		                                ></path>
		                            </svg>
		                            <div className={`${own.props.prefixClassName}-F-text ${own.props.prefixClassName}-F-text--inset`}>
		                                {own.$render('getAccuracy')(own.props.percent, own.props.accuracy)}
		                                <i style={{fontSize:'10px',color:'#aaa'}}>%</i>
		                            </div>
		                        </div>
		                        <div>
		                        	统计数据<br/>
		                        	总数:{own.props.customData.amount}<br/>
		                        	优秀人数:{own.props.customData.better}
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

