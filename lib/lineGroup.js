import { Component } from "react"
import extend from "extend"
import util from "util.react"
import spreadProps from "react-spread-props"
import Progress from "./line"
import childToArray from './childToArray';
import _ from 'lodash' ;
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

        let children = self.props.children
        // stirng to array
        let childrenArray = []
        if(!Array.isArray(children)){
        	childrenArray = childToArray(children)
        }
		// orderByPercent when lap
        if(/\blap\b/.exec(self.props.themes)){
        	if(Array.isArray(children)){
        		children = _.orderBy(children, [function(item) { return item.props.percent; }], ['desc'])
	        }else{
	        	childrenArray = _.orderBy(childrenArray, [function(item) { return item.percent}], ['desc'])
	        }
        }
        return (
        	<div 
                ref={ref`root`}
                {...domProps}
            >
                {
                	Array.isArray(children)
                	? children
                	: 
                		childrenArray.map(function(item, index){
                			return <Progress key={index} {...item} />
                		})
                }
			</div>
    	)
    }
}
require('./props').default.group(ProgressGroup)
export default ProgressGroup
module.exports = ProgressGroup
