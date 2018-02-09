var React = require('react')
var Progress = require('progress.react')
var { ProgressGroup } = Progress
class Inset extends React.Component {
    render () {
        return (
            <div className="insetDemo"
	            style={{width:'300px',fontSize:'16px'}} 
            >
                <Progress type={'inset'} insetText={true} percent={20} /> <br/>
                <Progress type={'inset'} insetText={true} percent={40} active={true} /> <br/>
                <Progress type={'inset'} insetText={true} percent={60} info={false} /> <br/>
                <Progress type={'inset'} insetText={true} percent={80} status={'error'} 
                	info={function(percent){
                		return (<span className="fi fi-times-circle"> 失败</span>)
                	}}
                /> <br/>
                <Progress type={'inset'} percent={100} status={'success'} 
                    insetText={function(percent){
                        return (<span className="fi fi-check-circle"></span>)
                    }}
                /> <br/>
                <Progress type={'inset'} percent={85.24564} accuracy={2}
                    insetText={function(percent){
                        return (<span>加载中 : {percent}%</span>)
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Inset = require("react-hot-loader").hot(module)(Inset)
module.exports = Inset
