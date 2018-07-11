var React = require('react')
var ReactDOM = require('react-dom')
import Progress, {getAccuracy} from 'progress.react'

const demoString = [
	'0',
	'1',
	0,
	1,
	'0.1',
	'0.123421',
	'0.00013',
	'0.0',
	0.0,
	134.323245,
]
class Accuracy extends React.Component {
    render () {
        return (
            <div className="itoolDemo" >
	            <Progress 
                    accuracy={3}
                    render={function(own){
                        return (
                            <div>
                            {
                            	demoString.map(function(item, index){
                            		return (
                            			<div key={index}>
                            			{item}
                            			{` -> `}
                            			{own.$render('getAccuracy')(item, 3)}
                            			</div>
                        			)
                            	})
                            }
                            </div>
                        )
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Accuracy = require("react-hot-loader").hot(module)(Accuracy)
ReactDOM.render(
    <Accuracy />,
    document.getElementById('accuracy-demo')
)

