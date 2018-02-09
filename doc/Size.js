var React = require('react')
var Progress = require('progress.react')
class Size extends React.Component {
    render () {
        return (
            <div className="basicDemo">
                <div style={{width:'300px',fontSize:'16px'}} >
                    <Progress percent={80} />
                </div>
                <div style={{width:'300px',fontSize:'32px'}} >
                    <Progress percent={80} />
                </div>
                <div style={{width:'600px',fontSize:'32px'}} >
                    <Progress percent={80} />
                </div>
                <hr/>
                <div style={{width:'100px',fontSize:'16px'}} >
                    <Progress percent={80} type={'circle'} />
                </div>
                <div style={{width:'100px',fontSize:'32px'}} >
                    <Progress percent={80} type={'circle'} />
                </div>
                <div style={{width:'200px',fontSize:'32px'}} >
                    <Progress percent={80} type={'circle'} />
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
module.exports = Size
