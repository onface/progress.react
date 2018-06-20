var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react').default;

class Simple extends React.Component {
    render () {
        return (
            <div className="simpleDemo" >
                <Progress percent={60} /> <br/>
                <Progress percent={60} themes="loading" /> <br/>
                <Progress percent={60} themes="success" /> <br/>
                <Progress percent={60} themes="warn" /> <br/>
                <Progress percent={60} themes="error" />
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

