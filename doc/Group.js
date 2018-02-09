var React = require('react')
var Progress = require('progress.react')
var { ProgressGroup } = Progress
class Group extends React.Component {
    render () {
        return (
            <div className="groupDemo"
	            style={{width:'300px',fontSize:'16px'}} 
            >
                <ProgressGroup percent={[20]} />
                <ProgressGroup percent={[80,60,40,20]} /> <br/>
                <ProgressGroup
                    percent={[80,60,40,20]}
                    type={'inset'}
                    insetText={[true,false,true,false]}
                /> <br/>
                <ProgressGroup
                    percent={[96.3246,62.7564,42.1,21]}
                    type={'inset'}
                    insetText={[true,true,true,true]}
                    accuracy={2}
                /> <br/>
                <ProgressGroup
                    percent={[96.3246,62.7564,42.1,21]}
                    type={'inset'}
                    insetText={[true,true,true,true]}
                    accuracy={3,2,2,1}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Group = require("react-hot-loader").hot(module)(Group)
module.exports = Group
