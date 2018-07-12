var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class PropsDemo extends React.Component {
    render () {
        return (
            <div className="propsTypeDemo" >
                <h5>merge props</h5>
                <ProgressGroup 
	                accuracy={2}
	                width={10}
	                barColor={'pink'}
	                strackColor={'gray'}
                    render={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                    }}
                />
                <h5>render props</h5>
                <ProgressGroup 
                    render={{
                        percent: [80, 60, 40, 20],
                        themes: [ 'success', 'success', 'success', 'success'],
                        accuracy: [2, 2, 2, 2],
                        width: [10, 10, 10, 10],
                        barColor: ['pink', 'pink', 'pink', 'pink'],
                        strackColor: ['gray', 'gray', 'gray', 'gray'],
                    }}
                />
                <h5>children component</h5>
                <ProgressGroup>
	                <Progress percent={80} themes={'success'} accuracy={2} width={10} barColor={'pink'} strackColor={'gray'} />
	                <Progress percent={60} themes={'success'} accuracy={2} width={10} barColor={'pink'} strackColor={'gray'} />
	                <Progress percent={40} themes={'success'} accuracy={2} width={10} barColor={'pink'} strackColor={'gray'} />
	                <Progress percent={20} themes={'success'} accuracy={2} width={10} barColor={'pink'} strackColor={'gray'} />
                </ProgressGroup>
                <h5>merge children component</h5>
                <ProgressGroup
	                width={10}
	                barColor={'pink'} 
	                strackColor={'gray'}
	                accuracy={2}
                >
	                <Progress percent={80} themes={'success'} />
	                <Progress percent={60} themes={'success'} />
	                <Progress percent={40} themes={'success'} />
	                <Progress percent={20} themes={'success'} />
                </ProgressGroup>
            </div>
        )
    }
}
/*ONFACE-DEL*/PropsDemo = require("react-hot-loader").hot(module)(PropsDemo)
ReactDOM.render(
    <PropsDemo />,
    document.getElementById('props-demo')
)

