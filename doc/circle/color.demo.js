var React = require('react')
var ReactDOM = require('react-dom')
var ProgressCircle = require('progress.react').ProgressCircle;

class Color extends React.Component {
    render () {
        return (
            <div className="colorDemo" style={{width:'100px'}}>
                <ProgressCircle percent={80} />
                <ProgressCircle percent={80} barColor="pink" strackColor="yellow" />
                <ProgressCircle percent={80} barColor="yellow" strackColor="pink" />
            </div>
        )
    }
}
/*ONFACE-DEL*/Color = require("react-hot-loader").hot(module)(Color)
ReactDOM.render(
    <Color />,
    document.getElementById('color-demo')
)

