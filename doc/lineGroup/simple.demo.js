var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class Simple extends React.Component {
    render () {
        return (
            <div className="simpleDemo" >
                <h5>正常的渲染结构</h5>
                <ProgressGroup>
                    <Progress percent={80} themes="loading" />
                    <Progress percent={60} themes="loading success" />
                    <Progress percent={40} themes="loading warn" />
                    <Progress percent={20} themes="loading error" />
                </ProgressGroup>
                <h5>-> 可以简化成这样</h5>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: [ 'loading ', 'loading success', 'loading warn', 'loading error'] ,
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Simple = require("react-hot-loader").hot(module)(Simple)
ReactDOM.render(
    <Simple />,
    document.getElementById('simple-demo')
)

