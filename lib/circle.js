import { Component } from "react"
import extend from "extend"
import util from "util.react"
import commonRender from './commonRender'
import spreadProps from "react-spread-props"
require('./index.css')

class ProgressCircle extends Component {
    $render = (type) => {
        let self = this
        let output = commonRender(type)
        if(output){
            return output
        }
        switch(type){
            case 'rootProps': 
                let rootClassName = [
                    self.props.prefixClassName,
                    util.themes(self.props),
                ].join(' ')
                let domProps = spreadProps(
                    self.props,
                    {
                        className: rootClassName,
                        /*
                        onClick: function (e) {
                            console.log('proxy click')
                            // this.stopTrigger()
                        },
                        */
                    },{
                        ignore:['width']
                    }
                )
                output = domProps
                output.ref = util.ref(self)('root')
            break
            case 'ref':
                output = util.ref(self)
            break
            default:
                console.warn(`not find ${type} ... from node_modules/progress.react/circle...`)
        }
        return output
    }
    render() {
        const self = this
        return self.props.render(self)
    }
}
require('./props').default.circle(ProgressCircle)
export default ProgressCircle
module.exports = ProgressCircle
