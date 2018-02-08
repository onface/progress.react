import { Component } from "react";
import extend from "extend";
import cls from 'classnames';
import _ from 'lodash';
import util from "util.react";
require('./index.less');
class Progress extends Component {
    constructor (props) {
        super(props)
        const self = this
        this.state = {}
    }
    getColor(color){
        return color ? {
            backgroundColor : color   
        } : {}
    }
    getFloatNum(num) {
        let self = this
        let accur = Math.pow(10, self.props.accuracy)
        if(/\./.test(num)){
            num = Math.round( parseFloat(num) * accur ) / accur
        }else{
            accur = String(accur).replace(/[^0]/,'')
            accur = accur ? '.' + accur : ''
            num = String(num) + accur
        }
        return num
    }
    getSvgPercent(type){
        let self = this
        let diam = 94
        let girth = Math.PI * diam
        let outer = self.props.dashboard ? girth * 0.75 : girth
        let inner = outer * self.props.percent / 100
        if(type === 'outer'){
            return outer+'px,'+girth+'px'
        }else if(type === 'inner'){
            return inner+'px,'+girth+'px'
        }
    }
    render() {
        const self = this
        var rootClassName = [
            self.props.prefixClassName,
            util.themes(self.props)
        ].join(' ')
        let percent = self.getFloatNum(self.props.percent)

        return (
            <div
                className={rootClassName}
            >
                {
                    self.props.type === 'line' || self.props.type === 'inset'
                    ? (
                        <div 
                            className={cls({
                                [`${self.props.prefixClassName}-line`] : true ,
                                [`${self.props.prefixClassName}-line--thick`] : self.props.type === 'inset' ,
                                [`${self.props.prefixClassName}-line--loading`] : self.props.active ,
                                [`${self.props.prefixClassName}-line--theme-danger`] : self.props.status === 'error' ,
                                [`${self.props.prefixClassName}-line--theme-success`] : self.props.status === 'success' ,
                            })}
                        >
                            <div className={`${self.props.prefixClassName}-line-box`}>
                                <div className={`${self.props.prefixClassName}-line-box-track`}>
                                    <div
                                        className={`${self.props.prefixClassName}-line-box-track-bar`}
                                        style={ _.assign(
                                                    { width:percent+'%' },
                                                    self.getColor(self.props.barColor)
                                                )}
                                    >

                                        {
                                            self.props.type !== 'inset' || self.props.insetText === false
                                            ? null
                                            : (
                                                <span className={`${self.props.prefixClassName}-line-box-track-bar-text`}>
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
                                    <div className={`${self.props.prefixClassName}-line-info`}>
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
                }
            </div>
        )
    }
}
require('./props').default(Progress)
export default Progress
module.exports= Progress
