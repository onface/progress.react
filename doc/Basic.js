var React = require('react')
var Progress = require('progress.react')
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo" 
            	style={{width:'100px',fontSize:'16px'}}
            >
                <Progress
	                percent={0}
	                accuracy={2}
	                type={'circle'}
	                status={'error'}
	                dashboard={true}
	            />
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
