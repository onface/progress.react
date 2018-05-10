import { Component } from "react";
import extend from "extend";
import cls from 'classnames';
import _ from 'lodash';
import util from "util.react";
import {getBgColor, getBarColor} from "./getColor";

require('./index.css');
class Progress extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    static ProgressGroup = require('./ProgressGroup')
    getFloatNum(num) {
        let self = this
        num = num > 100 ? 100 : num
        num = num < 0 ? 0 : num
        let accur = Math.pow(10, self.props.accuracy)
        if(/\./.test(num)){
            let decimal = String(num).replace(/^\d+\.(\d+)$/,'$1')
            if(decimal.length < self.props.accuracy ){
                let fil = new Array(self.props.accuracy - decimal.length).fill('0').join('')
                num = String(num) + fil
            }else{
                num = Math.round( parseFloat(num) * accur ) / accur
            }
        }else{
            accur = new Array(self.props.accuracy).fill('0').join('')
            accur = accur ? '.' + accur : ''
            num = String(num) + accur
        }
        return num
    }
    getSvgPercent(percent){
        let self = this
        let diam = 94
        let girth = Math.PI * diam
            girth = self.props.dashboard ? girth * 0.75 : girth
        let offset = girth * ( 100 - percent ) / 100 
        return self.props.percent ? {
            strokeDashoffset : offset+'px' ,
        } : {
            strokeOpacity : 0
        }
    } 
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        var rootClassName = [
            pcls,
            util.themes(self.props)
        ].join(' ')

        let percent = self.getFloatNum(self.props.percent)
        
        let lineStyle = {
            [`${pcls}-line`] : true ,
            [`${pcls}-line--thick`] : self.props.type === 'inset' ,
            [`${pcls}-line--loading`] : self.props.active ,
        }
        let circleStyle = {
            [`${pcls}-circle`] : true ,
            [`${pcls}-circle--dashboard`] : self.props.dashboard
        }
        if(self.props.status){
            lineStyle[`${pcls}-line--${self.props.status}`] = true
            circleStyle[`${pcls}-circle--${self.props.status}`] = true
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
                                    <div
                                        className={`${pcls}-line-box-track-bar`}
                                        style={ _.assign(
                                                    { width:percent+'%' },
                                                    getBarColor(self.props.barColor)
                                                )}
                                    >

                                        {
                                            self.props.type !== 'inset' || self.props.insetText === false
                                            ? null
                                            : (
                                                <span className={`${pcls}-line-box-track-bar-text`}>
                                                    {
                                                        typeof self.props.insetText === 'function'
                                                        ? self.props.insetText(percent)
                                                        : `${percent}%`
                                                    }
                                                </span>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            {
                                self.props.info === false
                                ? null
                                : (
                                    <div className={`${pcls}-line-info`}>
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
                }
                {
                    self.props.type === 'circle'
                    ? (
                        <div className={`${pcls}-circle`}
                            className={cls(circleStyle)}
                        >
                            <svg 
                                viewBox="0 0 100 100"
                                className={`${pcls}-circle-svg`}
                            >
                                <path className={`${pcls}-circle-svg-outer`}
                                        d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                                        style={getBgColor(self.props.barMarkColor, 'circle')}
                                ></path>
                                <path className={`${pcls}-circle-svg-inner`}
                                        d="M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94"
                                        style={self.getSvgPercent(percent)}
                                ></path>
                            </svg>
                            {
                                self.props.info === false
                                ? null
                                : (
                                    <div className={`${pcls}-circle-info`}>
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
                }
            </div>
        )
    }
}


require('./props').default(Progress)
export default Progress
module.exports= Progress
