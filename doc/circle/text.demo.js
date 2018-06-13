var React = require('react')
var ReactDOM = require('react-dom')
// var ProgressCircle = require('progress.react').ProgressCircle;
import {ProgressCircle} from 'progress.react';

class Text extends React.Component {
    render () {
        return (
            <div className="textDemo" style={{width:'100px'}}>
                <ProgressCircle percent={20} text={false}/>
                <ProgressCircle percent={20} text={() => null}/>

                <hr/>

                <ProgressCircle percent={20} text={'Hello'}/>
                <ProgressCircle percent={40} text={() => 'Hello'}/>

                <hr/>
                
                <ProgressCircle percent={60} 
                    text={function(processSelf){
                        return (
                            <span>
                                {processSelf.props.percent}
                                <b style={{fontSize:'10px'}}>%</b>
                            </span>
                        )
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Text = require("react-hot-loader").hot(module)(Text)
ReactDOM.render(
    <Text />,
    document.getElementById('text-demo')
)

