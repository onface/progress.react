var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react')
class Simple extends React.Component {
    render () {
        return (
            <div className="simpleDemo" >
                <Progress precent={60} /> <br/>
                <Progress precent={60} themes="loading" /> <br/>
                <Progress precent={60} themes="success" /> <br/>
                <Progress precent={60} themes="warn" /> <br/>
                <Progress precent={60} themes="error" />
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

