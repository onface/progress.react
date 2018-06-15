var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class PropsType extends React.Component {
    render () {
        return (
            <div className="propsTypeDemo" >
                <h5>string</h5>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                        width: 10 ,
                        barColor: 'yellow' ,
                        strackColor: 'gray' ,
                    }}

                />
                <h5>array</h5>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: [ 'success', 'success', 'success', 'success'] ,
                        width: [10, 10, 10, 10] ,
                        barColor: ['yellow', 'yellow', 'yellow', 'yellow'] ,
                        strackColor: ['gray', 'gray', 'gray', 'gray'] ,
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/PropsType = require("react-hot-loader").hot(module)(PropsType)
ReactDOM.render(
    <PropsType />,
    document.getElementById('props-type-demo')
)

