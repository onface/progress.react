var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react').default;

import './themes.demo.less'
import './cls.demo.less'
import './pcls.demo.less'

class Cls extends React.Component {
    render () {
        return (
            <div className="simpleDemo" >
                <h3>themes</h3>
                <Progress percent={60} themes="customThemes"/>
                <h3>className</h3>
                <Progress percent={60} className="customClassName"/>
                <h3>prefixClassName(用来完全自定义样式)</h3>
                <Progress percent={60} prefixClassName="customPrefixClassName"/>
            </div>
        )
    }
}
/*ONFACE-DEL*/Cls = require("react-hot-loader").hot(module)(Cls)
ReactDOM.render(
    <Cls />,
    document.getElementById('cls-demo')
)

