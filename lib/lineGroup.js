import { Component } from "react"
import extend from "extend"
import util from "util.react"
import spreadProps from "react-spread-props"
import Progress from "./line"
require('./index.css')
class ProgressGroup extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    render() {
        const self = this
        const ref = util.ref(self)
        // let

        let rootClassName = [
            self.props.prefixClassName,
            // util.themes(self.props),
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
        console.log(self.props)
        return (
        	<div 
                ref={ref`root`}
                {...domProps}
            >
                {
                	self.props.children
                	? self.props.children
                	: (
                		<Progress />
            		)
                }
			</div>
    	)
    }
}
require('./props').default.group(ProgressGroup)
export default ProgressGroup
module.exports = ProgressGroup
