var React = require('react')
var ReactDOM = require('react-dom')
var Progress = require('progress.react').default;

class Width extends React.Component {
    render () {
        return (
            <div className="textDemo">
                <div style={{width:'100px'}}>
                    <Progress percent={20} />
                    <Progress percent={20} width={12}/>
                    <Progress percent={20} width={'2em'}/>
                </div>
                <div style={{width:'200px',fontSize:'28px'}}>
                    <Progress percent={20} />
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Width = require("react-hot-loader").hot(module)(Width)
ReactDOM.render(
    <Width />,
    document.getElementById('width-demo')
)

