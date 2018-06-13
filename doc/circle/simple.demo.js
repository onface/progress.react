var React = require('react')
var ReactDOM = require('react-dom')
var ProgressCircle = require('progress.react').ProgressCircle;

class Simple extends React.Component {
    render () {
        return (
            <div className="simpleDemo" style={{width:'100px'}}>
                <ProgressCircle percent={0} />
                <ProgressCircle percent={60} accuracy={2}/>
                
                <ProgressCircle percent={20} themes="success"/>
                <ProgressCircle percent={30} themes="error"/>
                <ProgressCircle percent={40} themes="warn"/>

                <hr/>

                <ProgressCircle percent={50} themes="dashboard"/>
                <ProgressCircle percent={70} themes="dashboard error"/>
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

