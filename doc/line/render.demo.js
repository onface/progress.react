var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default
// var getAccuracy = require('progress.react').getAccuracy
import Progress, {getAccuracy} from 'progress.react'

class RenderDemo extends React.Component {
    render () {
        return (
            <div className="renderDemo" >
                <h4>basic</h4>
                <Progress 
                	percent={20}
                	children={function(processSelf, ref, domProps){
                		let ps = processSelf
                		return (
                			<div
			                    ref={ref`root`}
			                    {...domProps}
			                >
                    			<div className={`${ps.props.prefixClassName}-line`}>
    			                    <div 
                                        className={`${ps.props.prefixClassName}-track`}
                                        style={{
                                            height: ps.props.width,
                                            backgroundColor: ps.props.strackColor
                                        }}
                                    >
    			                        <div 
    			                            className={`${ps.props.prefixClassName}-track-bar`}
    			                            style={{
    			                                width: ps.props.percent + '%',
                                                backgroundColor: ps.props.barColor
    			                            }}
    			                        ></div>
    			                    </div>
    			                </div>
			                </div>
            			)
                	}}
            	/>

                <hr/>

                <h4>文字位置(外置于整个进度条上下)</h4>
                <Progress 
                    percent={70}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                            >
                                <div className={`${ps.props.prefixClassName}-line`}>
                                    <div className={`${ps.props.prefixClassName}-F-text`}>
                                        <span style={{float: 'left'}}>top left</span>
                                        top center
                                        <span style={{float: 'right'}}>top right</span>
                                    </div>
                                    <div className={`${ps.props.prefixClassName}-track`}>
                                        <div 
                                            className={`${ps.props.prefixClassName}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        ></div>
                                    </div>
                                    <div className={`${ps.props.prefixClassName}-F-text`}>
                                        <span style={{float: 'left'}}>bottom left</span>
                                        bottom center
                                        <span style={{float: 'right'}}>bottom right</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />

                <hr/>

                <h4>文字位置(内置于进度条轨道中)</h4>
                <Progress 
                    percent={40}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        let pcls = processSelf.props.prefixClassName
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                            >
                                <div className={`${pcls}-line`}>
                                    <div className={`${pcls}-track`} 
                                        style={{
                                            height: '14px', 
                                            borderRadius: '7px',
                                        }}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        ></div>
                                        <div className={`${pcls}-F-text ${pcls}-F-text--inset`}>
                                            <span style={{float: 'left'}}>track: left</span>
                                            track: center
                                            <span style={{float: 'right'}}>track: right</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />

                <hr/>

                <h4>文字位置(内置于进度条中)</h4>
                <Progress 
                    percent={60}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        let pcls = processSelf.props.prefixClassName
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                            >
                                <div className={`${pcls}-line`}>
                                    <div className={`${pcls}-track`} 
                                        style={{
                                            height: '14px', 
                                            borderRadius: '7px',
                                        }}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        >
                                            <div className={`${pcls}-F-text ${pcls}-F-text--inset`}>
                                                <span style={{float: 'left'}}>bar: left</span>
                                                bar: center
                                                <span style={{float: 'right'}}>bar: right</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />

                <hr/>

                <h4>文字位置(外置于进度条上下,文字位置(如center|right)可跟随进度条变化)</h4>
                <Progress 
                    percent={80}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        let pcls = processSelf.props.prefixClassName
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                            >
                                <div className={`${pcls}-line`}
                                    style={{
                                         padding: '14px 0'
                                    }}
                                >
                                    <div className={`${pcls}-track`} 
                                        style={{
                                            height: '14px', 
                                            borderRadius: '7px',
                                        }}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        >
                                            <div className={`${pcls}-F-text ${pcls}-F-text--inset`}
                                                style={{top: '-14px'}}
                                            >
                                                <span style={{float: 'left'}}>bar: top left</span>
                                                bar: top center
                                                <span style={{float: 'right'}}>bar: top right</span>
                                            </div>
                                            <div className={`${pcls}-F-text ${pcls}-F-text--inset`}
                                                style={{top: '14px'}}
                                            >
                                                <span style={{float: 'left'}}>bar: bottom left</span>
                                                bar: bottom center
                                                <span style={{float: 'right'}}>bar: bottom right</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }}
                />

                <hr/>

                <h4>文字位置(外置于进度条左右)</h4>
                <Progress 
                    percent={50}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        let pcls = processSelf.props.prefixClassName
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                                style={{height:'14px'}}
                            >
                                <span 
                                    className={`${pcls}-F-text ${pcls}-F-text--inset`} 
                                    style={{textAlign: 'left'}}
                                >left</span>
                                <div 
                                    className={`${pcls}-line`}
                                    style={{
                                         padding: '0 40px'
                                    }}
                                >
                                    <div className={`${pcls}-track`}
                                        style={{
                                            height: '14px',
                                            borderRadius: '7px'
                                        }}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <span 
                                    className={`${pcls}-F-text ${pcls}-F-text--inset`} 
                                    style={{textAlign: 'right'}}
                                >right</span>
                            </div>
                        )
                    }}
                />
                {/*
                <br/>
                <small>下面这个利用flex垂直对齐, 可能会存在不兼容现象</small>
                <Progress 
                    percent={90}
                    children={function(processSelf, ref, domProps){
                        let ps = processSelf
                        let pcls = processSelf.props.prefixClassName
                        return (
                            <div
                                ref={ref`root`}
                                {...domProps}
                            >
                                <span className={`${pcls}-F-text`}>left&nbsp;&nbsp;</span>
                                <div className={`${pcls}-line`}>
                                    <div className={`${pcls}-track`}>
                                        <div 
                                            className={`${pcls}-track-bar`}
                                            style={{
                                                width: ps.props.percent + '%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <span className={`${pcls}-F-text`}>&nbsp;&nbsp;right</span>
                            </div>
                        )
                    }}
                />
                */}
            </div>
        )
    }
}
/*ONFACE-DEL*/RenderDemo = require("react-hot-loader").hot(module)(RenderDemo)
ReactDOM.render(
    <RenderDemo />,
    document.getElementById('render-demo')
)

