import p from 'prop-types'
import getAccuracy from './itool/getAccuracy'
import getCircle from "./itool/getCircle"
import transToFunc from './itool/transToFunc'
import getColor from './itool/getColor'
import _ from 'lodash' ;

export default {
    line: function (app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            barColor: undefined, // 改变进度条颜色
            strackColor: undefined, // 改变底层进度条颜色
            className:'',
            render: function(self){
                let refRoot = self.$method('ref')('root')
                let domProps = self.$method('rootDomProps')
                return (
                    <div
                        ref={refRoot}
                        {...domProps}
                    >
                        <div className={`${self.props.prefixClassName}-line`}>
                            <div className={`${self.props.prefixClassName}-track`}
                                style={_.assign(
                                    { 
                                        height: self.props.width,
                                    },
                                    getColor(self.props.strackColor)
                                )}
                            >
                                <div 
                                    className={`${self.props.prefixClassName}-track-bar`}
                                    style={_.assign(
                                        { 
                                            width: self.props.percent+'%'
                                        },
                                        getColor(self.props.barColor)
                                    )}
                                ></div>
                            </div>
                        </div>
                    </div>
                )
            },
            width: undefined
        }
        app.propTypes = {
            prefixClassName: p.string,
            themes: p.string,
            percent: p.number,
            accuracy: p.number,
            barColor: p.oneOfType([
                p.string,
                p.arrayOf(p.string)
            ]),
            strackColor: p.oneOfType([
                p.string,
                p.arrayOf(p.string)
            ]),
            children: p.func
        }
    },
    circle: function(app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            barColor: undefined, // 改变进度条颜色
            strackColor: undefined, // 改变底层进度条颜色
            width: 6,
            path:"M 50,50 m 0,-47 a 47,47 0 1 1 0,94 a 47,47 0 1 1 0,-94",
            text: function(self){
                return getAccuracy(self.props.percent, self.props.accuracy) + '%'
            },
            children: function(self, ref, domProps){
                let circle = getCircle(self.props.percent, self.props.width)
                let textNode = transToFunc.call(self, self.props.text)
                return (
                    <div 
                        ref={ref`root`}
                        {...domProps}
                    >
                        <div className={`${self.props.prefixClassName}-circle`}>
                            <svg viewBox={circle.viewBox} className={`${self.props.prefixClassName}-circle-svg`}>
                                <path 
                                    className={`${self.props.prefixClassName}-circle-svg-track`}
                                    d={self.props.path}
                                    style={{
                                        strokeWidth: circle.strokeWidth,
                                        stroke: self.props.barColor
                                    }}
                                ></path>
                                <path 
                                    className={`${self.props.prefixClassName}-circle-svg-bar`}
                                    d={self.props.path}
                                    style={{
                                        strokeWidth: circle.strokeWidth,
                                        strokeDashoffset: circle.strokeDashoffset,
                                        stroke: self.props.strackColor
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
        app.propTypes = {
            prefixClassName: p.string,
            themes: p.string,
            percent: p.number,
            accuracy: p.number,
            width: p.number,
            barColor:p.string,
            strackColor:p.string,
            text: p.oneOfType([
                p.func,
                p.string,
                p.bool
            ]),
            children: p.func
        }
    },
    group: function(app) {
        app.defaultProps = {
            prefixClassName: 'face-progressGroup',
            themes: '',
            children: undefined
        },
        app.propTypes = {
            prefixClassName: p.string,
            themes: p.string,
            // children: p.oneOfType([
            //     p.arrayOf(p.element),
            //     p.shape({
            //         percent: p.number,
            //         accuracy: p.number,
            //         themes: p.oneOfType([
            //             p.string,
            //             p.arrayOf(p.string),
            //         ]),
            //     })
            // ])
        }
    }
}
