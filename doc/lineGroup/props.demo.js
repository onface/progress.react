var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class PropsDemo extends React.Component {
    render () {
        return (
            <div className="propsTypeDemo" >
                <h5>props</h5>
                <ProgressGroup 
	                accuracy={2}
	                width={10}
	                barColor={'pink'}
	                strackColor={'gray'}
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                    }}
                />
                <h5>children props</h5>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: [ 'success', 'success', 'success', 'success'],
                        accuracy: [2, 2, 2, 2],
                        width: [10, 10, 10, 10],
                        barColor: ['pink', 'pink', 'pink', 'pink'],
                        strackColor: ['gray', 'gray', 'gray', 'gray'],
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/PropsDemo = require("react-hot-loader").hot(module)(PropsDemo)
ReactDOM.render(
    <PropsDemo />,
    document.getElementById('props-demo')
)

