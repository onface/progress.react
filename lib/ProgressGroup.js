import { Component } from "react";
import extend from "extend";
import cls from 'classnames';
import _ from 'lodash';
import util from "util.react";
import {getBgColor, getBarColor} from "./getColor";
import getAccuracy from './accuracy'

require('./index.css');
class ProgressGroup extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    getFloatArray(numArray) {
        let self = this
        let accurArray
        if(typeof self.props.accuracy == 'number'){
            accurArray = new Array(numArray.length).fill(self.props.accuracy)
        }else if(Array.isArray(self.props.accuracy)){
            accurArray = new Array(numArray.length).fill(0)
            accurArray = extend(true,accurArray,self.props.accuracy)
        }
        return numArray.map(function(item, i){
            return getAccuracy(item, accurArray[i])
        })
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        var rootClassName = [
            pcls,
            util.themes(self.props)
        ].join(' ')
        let percentArray = self.getFloatArray(self.props.percent)

        let insetText = new Array(self.props.percent.length).fill(false)
        insetText = extend(true,insetText,self.props.insetText)

        let lineStyle = {
            [`${pcls}-line`] : true ,
            [`${pcls}-line--thick`] : self.props.type === 'inset' ,
            [`${pcls}-line--loading`] : self.props.active ,
        }
        if(self.props.status){
            lineStyle[`${pcls}-line--${self.props.status}`] = true
        }

        return (
            <div
                className={rootClassName}
            >
                {
                    self.props.type === 'line' || self.props.type === 'inset'
                    ? (
                        <div 
                            className={cls(lineStyle)}
                        >
                            <div className={`${pcls}-line-box`}>
                                <div className={`${pcls}-line-box-track`}
                                    style={getBgColor(self.props.barMarkColor)}
                                >
                                    {
                                        percentArray.map(function(item,i){
                                            let style = { width:item+'%' }
                                            if(self.props.barColor[i]){
                                                style = _.assign(style, getBarColor(self.props.barColor[i]))
                                            }
                                            return (
                                                <div
                                                    key={i}
                                                    className={`${pcls}-line-box-track-bar`}
                                                    style={style}
                                                >

                                                    {
                                                        self.props.type !== 'inset' || insetText[i] === false
                                                        ? null
                                                        : (
                                                            <span className={`${pcls}-line-box-track-bar-text`}>
                                                                {
                                                                    typeof insetText[i] === 'function'
                                                                    ? insetText(item)
                                                                    : `${item}%`
                                                                }
                                                            </span>
                                                        )
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {
                                self.props.info === false
                                ? null
                                : (
                                    <div className={`${self.props.prefixClassName}-line-info`}>
                                        {
                                            typeof self.props.info === 'function'
                                            ? self.props.info(percentArray[0])
                                            : `${percentArray[0]}%`
                                        }
                                    </div>
                                )
                            }
                        </div>
                    ) : null
                }
                {/*
                    self.props.type === 'circle'
                    ? (
                        <div className={`${self.props.prefixClassName}-circle`}
                            className={cls({
                                [`${self.props.prefixClassName}-circle`] : true ,
                                [`${self.props.prefixClassName}-circle--theme-danger`] : self.props.status === 'error' ,
                                [`${self.props.prefixClassName}-circle--theme-success`] : self.props.status === 'success' ,
                                [`${self.props.prefixClassName}-circle--dashboard`] : self.props.dashboard
                            })}
                        >
                            <svg 
                                viewBox="0 0 100 100"
                                className={`${self.props.prefixClassName}-circle-svg`}
                            >
                                <path className={`${self.props.prefixClassName}-circle-svg-outer`}
                                        d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                                        strokeDasharray={self.getSvgPercent('outer')}
                                ></path>
                                <path className={`${self.props.prefixClassName}-circle-svg-inner`}
                                        d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                                        strokeDasharray={self.getSvgPercent('inner')}
                                ></path>
                            </svg>
                            {
                                self.props.info === false
                                ? null
                                : (
                                    <div className={`${self.props.prefixClassName}-circle-info`}>
                                        {
                                            typeof self.props.info === 'function'
                                            ? self.props.info(percent)
                                            : `${percent}%`
                                        }
                                    </div>
                                )
                            }
                        </div>
                    ) : null
                */}
            </div>
        )
    }
}
require('./ProgressGroupProps').default(ProgressGroup)
export default ProgressGroup
module.exports= ProgressGroup

