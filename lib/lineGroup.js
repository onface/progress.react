import { Component } from "react"
import extend from "extend"
import util from "util.react"
import _ from 'lodash' ;
import spreadProps from "react-spread-props"
import Progress from "./line"
import commonRender from './commonRender'
const objToArray = commonRender('objToArray')
require('./index.css')

class ProgressGroup extends Component {
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
            },{
                ignore:['width']
            }
        )
        let children = self.props.children
        let renderArray = []
        if(typeof self.props.render == 'object'){
            renderArray = objToArray(self.props.render)
        }
		// orderByPercent when lap
        if(/\blap\b/.exec(self.props.themes)){
    		children = _.orderBy(children, [function(item) { return item.props.percent; }], ['desc'])
            renderArray = _.orderBy(renderArray, [function(item) { return item.percent}], ['desc'])
        }
        let inheritProps = {
            accuracy:self.props.accuracy,
            barColor:self.props.barColor,
            strackColor:self.props.strackColor,
            width:self.props.width,
        }
        return (
        	<div 
                ref={ref`root`}
                {...domProps}
            >
                {
                	self.props.render
                	? 
                        typeof self.props.render == 'function'
                        ? self.props.render(self)
                        : 
                            renderArray.map(function(item, index){
                                return (
                                    <Progress key={index} {...inheritProps} {...item} />
                                )
                            })
                	: 
                        children.map(function(item, index){
                            let tempItem = extend(true, [], item)
                                tempItem.key = index
                                tempItem.props = extend(true, tempItem.props, inheritProps)
                            return tempItem
                        })
                }
			</div>
    	)
    }
}
require('./props').default.group(ProgressGroup)
export default ProgressGroup
module.exports = ProgressGroup
