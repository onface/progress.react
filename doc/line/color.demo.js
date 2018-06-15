var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react').default;

class Color extends React.Component {
    render () {
        return (
            <div className="colorDemo" >
                <Progress percent={60} /> <br/>
                <Progress percent={60} barColor="pink" /> <br/>
                <Progress percent={60} strackColor="pink" /> <br/>
            </div>
        )
    }
}
/*ONFACE-DEL*/Color = require("react-hot-loader").hot(module)(Color)
ReactDOM.render(
    <Color />,
    document.getElementById('color-demo')
)

