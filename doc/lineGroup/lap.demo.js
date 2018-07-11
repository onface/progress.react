var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class Lap extends React.Component {
    render () {
        return (
            <div className="lapDemo" >
                <ProgressGroup themes="lap"
                    children={{
                        percent: [60, 20, 40],
                        themes: [ '', 'success', 'warn'] ,
                    }}
                />
                <hr/>
	            <ProgressGroup themes="lap">
                	<Progress percent={60} />
                	<Progress percent={20} themes={'success'} />
                	<Progress percent={40} themes={'warn'} />
                </ProgressGroup>
            </div>
        )
    }
}
/*ONFACE-DEL*/Lap = require("react-hot-loader").hot(module)(Lap)
ReactDOM.render(
    <Lap />,
    document.getElementById('lap-demo')
)

