var React = require('react')
import Progress, {getAccuracy} from 'progress.react'
class Basic extends React.Component {
    render () {
        return (
            <div className="basicDemo"
	            style={{width:'300px',fontSize:'16px'}} 
            >
                <Progress percent={0} />
                <Progress percent={6.2345} accuracy={2}/>
                <Progress percent={20} barColor={'red'} />
                <Progress percent={40} active={true} />
                <Progress percent={60} info={false} />
                <Progress
                    percent={80}
                    status={'error'} 
                	info={function(percent){
                		return (<span className="fi fi-times-circle"> 失败</span>)
                	}}
                />
                <Progress percent={100} status={'success'} />
                <Progress percent={120} />
                <Progress percent={80} barColor={['red','green']} barMarkColor={'yellow'}/>
                <hr/>
                提供精确度方法:  {getAccuracy(34.2345, 2)}%  {getAccuracy(34, 2)}%
            </div>
        )
    }
}
/*ONFACE-DEL*/Basic = require("react-hot-loader").hot(module)(Basic)
module.exports = Basic
