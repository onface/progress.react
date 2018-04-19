var React = require('react')
var Progress = require('progress.react')
var { ProgressGroup } = Progress

class Status extends React.Component {
    render () {
        const self = this
        return (
            <div className="groupDemo" >
                <div style={{width:'300px'}}>
                    <Progress percent={80} status={'dark'}/>
                </div>
                <div style={{width:'100px'}}>
                    <Progress percent={80} type="circle" status={'dark'} />
                </div>
                <div style={{width:'300px'}}>
                    <ProgressGroup percent={[90,50]} status={'dark'} />
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Status = require("react-hot-loader").hot(module)(Status)
module.exports = Status
