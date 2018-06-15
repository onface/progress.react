var React = require('react')
var ReactDOM = require('react-dom')
// var Progress = require('progress.react').default;
import Progress, {ProgressGroup} from 'progress.react';

class Color extends React.Component {
    render () {
        return (
            <div className="colorDemo" >
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                        width: 10 ,
                        barColor: ['pink', 'red'] ,
                    }}
                />
                <h4>等同于</h4>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                        width: 10 ,
                        barColor: ['pink', 'red', 'pink', 'pink'] ,
                    }}
                />
                <hr/>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                        width: 10 ,
                        barColor: [
	                        ['pink', 'red']
                        ] ,
                    }}

                />
                <h4>等同于</h4>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: 'success' ,
                        width: 10 ,
                        barColor: [
	                        ['pink', 'red'],
	                        ['pink', 'red'],
	                        ['pink', 'red'],
	                        ['pink', 'red']
                        ] ,
                    }}
                />
                <hr/>
                <ProgressGroup 
                    children={{
                        percent: [80, 60, 40, 20],
                        themes: [ 'success', 'success', 'success', 'success'] ,
                        width: [10, 10, 10, 10] ,
                        barColor: ['pink', ['pink', 'red'], 'pink', 'pink'] ,
                        strackColor: ['gray', 'gray', 'gray', ['white','black']] ,
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Color = require("react-hot-loader").hot(module)(Color)
ReactDOM.render(
    <Color />,
    document.getElementById('color-demo')
)

