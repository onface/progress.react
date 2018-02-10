var React = require('react')
var Progress = require('progress.react')
var { ProgressGroup } = Progress
class Group extends React.Component {
    render () {
        return (
            <div className="groupDemo"
	            style={{width:'300px',fontSize:'16px'}} 
            >
                <ProgressGroup percent={[20]} info={false} />
                <h5>status</h5>
                <ProgressGroup percent={[90,20,10]} />
                <ProgressGroup percent={[90,20,10]} status={'success'} />
                <ProgressGroup percent={[90,20,10]} status={'error'} />
                <ProgressGroup percent={[80,40]} type={'inset'} active={true} />
                <h5>insetText</h5>
                <ProgressGroup
                    type={'inset'}
                    percent={[80,60,40,20]}
                    insetText={[true]} // => [true,false,false,false]
                /> <br/>
                <h5>accuracy</h5>
                <ProgressGroup
                    type={'inset'}
                    percent={[96.3246,62.7564,42.1,21]}
                    insetText={[true,true,true,true]}
                    accuracy={2} // => [2,2,2,2]
                /> <br/>
                <ProgressGroup
                    type={'inset'}
                    percent={[96.3246,62.7564,42.1,21]}
                    insetText={[true,true,true,true]}
                    accuracy={[2]} // => [2,0,0,0]
                /> <br/>
                <ProgressGroup
                    type={'inset'}
                    percent={[96.3246,62.7564,42.1,21]}
                    insetText={[true,true,true,true]}
                    accuracy={[3,2,2,1]}
                />
                <h5>barColor</h5>
                <ProgressGroup 
                    percent={[100,80,60,40,20]}
                    barColor={[
                        'red',
                        '#000',
                        'rgb(204,204,204)',
                        'rgba(230,25,224,0.3)',
                        'unknowColor'
                    ]} // => [红,黑,灰,粉,(错误的颜色将由组件的主色调三个中随机一色替代)]
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Group = require("react-hot-loader").hot(module)(Group)
module.exports = Group
