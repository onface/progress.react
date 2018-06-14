var React = require('react')
var ReactDOM = require('react-dom')
// var ProgressCircle = require('progress.react').ProgressCircle;
import {ProgressCircle} from 'progress.react';

class Width extends React.Component {
    render () {
        return (
            <div className="widthDemo">
            	<div style={{width:'100px'}}>
	            	<ProgressCircle percent={20} />
	                <ProgressCircle percent={20} width={12}/>
            	</div>
            	<div style={{width:'200px',fontSize:'28px'}}>
	            	<ProgressCircle percent={20} />
            	</div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Width = require("react-hot-loader").hot(module)(Width)
ReactDOM.render(
    <Width />,
    document.getElementById('width-demo')
)

