var React = require('react')
var Progress = require('progress.react')
class Change extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            percent : 0
        }
    }
    render () {
        let self = this

        return (
            <div className="changeDemo" >
                <div style={{width:'300px',fontSize:'16px'}} >
                    <Progress 
                        percent={self.state.percent}
                        status={self.state.percent == 100 ? 'success' : 'default'}
                        info={(value)=>{
                            if(self.state.percent == 100){
                                return (<span className="fi fi-check-circle"></span>)
                            }else{
                                return (<i>{value}%</i>)
                            }
                        }}
                    />
                </div>
                <div style={{width:'100px',fontSize:'16px'}} >
                    <Progress percent={self.state.percent} type="circle"/>
                    <Progress percent={self.state.percent} type="circle" dashboard={true} />
                </div>
                <button
                    onClick={function(){
                        let percent = self.state.percent
                        self.setState({
                            percent : percent + 20 > 100 ? 100 : percent + 20
                        })
                    }}
                >+</button>
                <button
                    onClick={function(){
                        let percent = self.state.percent
                        self.setState({
                            percent : percent - 20 < 0 ? 0 : percent - 20
                        })
                    }}
                >-</button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Change = require("react-hot-loader").hot(module)(Change)
module.exports = Change
