var React = require('react')
var Progress = require('progress.react')
var { ProgressGroup } = Progress
class Inset extends React.Component {
    render () {
        return (
            <div className="circleDemo"
	            style={{width:'100px',fontSize:'16px'}} 
            >
                <Progress type={'circle'} percent={0} />
                <Progress type={'circle'} percent={40} />
                <Progress type={'circle'} percent={60} info={false} />
                <Progress type={'circle'} percent={80} status={'error'} 
                	info={function(percent){
                		return (<span className="fi fi-times"></span>)
                	}}
                />
                <Progress type={'circle'} percent={100} status={'success'} />
                <Progress type={'circle'} percent={120} />
            </div>
        )
    }
}
/*ONFACE-DEL*/Inset = require("react-hot-loader").hot(module)(Inset)
module.exports = Inset