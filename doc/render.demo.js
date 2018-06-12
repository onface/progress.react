var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react').default
var getAccuracy = require('progress.react').getAccuracy
// import Progress, {getAccuracy} from 'progress.react'

class Simple extends React.Component {
    render () {
        return (
            <div className="simpleDemo" >
                <Progress 
                	precent={60}
                	children={function(processSelf, ref, domProps){
                		let ps = processSelf
                		return (
                			<div
			                    ref={ref`root`}
			                    {...domProps}
			                >
                    			<div className={`${ps.props.prefixClassName}-line`}>
    			                    <div className={`${ps.props.prefixClassName}-track`}>
    			                        <div 
    			                            className={`${ps.props.prefixClassName}-track-bar`}
    			                            style={{
    			                                width: ps.props.precent + '%'
    			                            }}
    			                        ></div>
    			                    </div>
    			                </div>
			                </div>
            			)
                	}}
            	/>
                <hr/>
                <Progress 
                    precent={60}
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
                                                width: ps.props.precent + '%'
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
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('render-demo')
)

