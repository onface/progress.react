import { Component } from "react"
import extend from "extend"
import util from "util.react"
import spreadProps from "react-spread-props"
import getCircle from "./getCircle"
import getAccuracy from './getAccuracy'
import transToFunc from './transToFunc'
require('./index.css')

class ProgressCircle extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        const ref = util.ref(self)
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
            }
        )
        let circle = getCircle(self.props.percent, self.props.barWidth)
        let textNode = transToFunc.call(self, self.props.text)
        return (
            <div 
                ref={ref`root`}
                {...domProps}
            >
                <div className={`${self.props.prefixClassName}-circle`}>
                    <svg viewBox={circle.viewBox} className={`${self.props.prefixClassName}-circle-svg`}>
                        <path className={`${self.props.prefixClassName}-circle-svg-track`}></path>
                        <path className={`${self.props.prefixClassName}-circle-svg-bar`}
                            style={{
                                strokeDashoffset: circle.strokeDashoffset + 'px'
                            }}
                        ></path>
                    </svg>
                    <div className={`${self.props.prefixClassName}-F-text ${self.props.prefixClassName}-F-text--inset`}>
                        {textNode}
                    </div>
                </div>
            </div>
        )
    }
}
require('./props').default.circle(ProgressCircle)
export default ProgressCircle
module.exports = ProgressCircle
