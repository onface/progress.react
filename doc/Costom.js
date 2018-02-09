var React = require('react')
var Progress = require('progress.react')
class Costom extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            accuracy: 0 ,
            percent: 20.00 ,
            info: true ,
            active: false ,
            type:'line' ,
            status:'default' ,
            barColor:'',
            insetText: false,
            dashboard:false
        }
    }
    change = (key, value) => {
        this.setState({
            [key] : value
        })
    }
    render () {
        let self = this
        let state = self.state
        return (
            <div className="costomDemo">
                accuracy&nbsp;:&nbsp;
                <input
                    value={state.accuracy}
                    type="number"
                    min={0}
                    max={10}
                    onChange={(e)=>{
                        self.change('accuracy',parseInt(e.target.value))
                    }}
                />&ensp;
                percent&nbsp;:&nbsp;
                <input
                    style={{width:'100px'}}
                    value={state.percent}
                    type="number"
                    step={5}
                    min={0}
                    max={100}
                    onChange={(e)=>{
                        self.change('percent',parseFloat(e.target.value))
                    }}
                />&ensp;
                info&nbsp;:&nbsp;
                <input checked={state.info} type="checkbox" onChange={(e)=>{ self.change('info',!state.info) }} />&ensp;
                active&nbsp;:&nbsp;
                <input checked={state.active} type="checkbox" onChange={(e)=>{ self.change('active',!state.active) }} />&ensp;  
                type&nbsp;:&nbsp;
                <select value={state.type} onChange={(e)=>{ self.change('type',e.target.value) }}>
                    <option>line</option>
                    <option>inset</option>
                    <option>circle</option>
                </select>&ensp;
                status&nbsp;:&nbsp;
                <select value={state.status} onChange={(e)=>{ self.change('status',e.target.value) }}>
                    <option>default</option>
                    <option>success</option>
                    <option>error</option>
                </select>&ensp;
                barColor&nbsp;:&nbsp;
                <input
                    style={{width:'150px'}}
                    value={state.barColor}
                    onChange={(e)=>{
                        self.change('barColor',e.target.value)
                    }}
                />&ensp;
                insetText&nbsp;:&nbsp;
                <input checked={state.insetText} type="checkbox" onChange={(e)=>{ self.change('insetText',!state.insetText) }} />&ensp;
                dashboard&nbsp;:&nbsp;
                <input checked={state.dashboard} type="checkbox" onChange={(e)=>{ self.change('dashboard',!state.dashboard) }} />&ensp;
                <br/><br/>
                <div style={{width:'300px',fontSize:'16px'}} >
                    <Progress {...state} />
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/Costom = require("react-hot-loader").hot(module)(Costom)
module.exports = Costom
