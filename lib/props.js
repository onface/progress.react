import p from 'prop-types'
import getAccuracy from './getAccuracy'
import getCircle from "./getCircle"
import transToFunc from './transToFunc'

export default {
    line: function (app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            // barColor:'', // 改变进度条颜色
            // strackColor:'#f5f5f5', // 改变底层进度条颜色
            className:'',
            children: function(self, ref, domProps){
                return (
                    <div
                        ref={ref`root`}
                        {...domProps}
                    >
                        <div className={`${self.props.prefixClassName}-line`}>
                            <div className={`${self.props.prefixClassName}-track`}
                                style={{
                                    height: self.props.width
                                }}
                            >
                                <div 
                                    className={`${self.props.prefixClassName}-track-bar`}
                                    style={{
                                        width: self.props.percent + '%'
                                    }}
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
            // barColor:p.string,
            // strackColor:p.string,
            children: p.func
        }
    },
    circle: function(app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            width: 6,
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
                                <path className={`${self.props.prefixClassName}-circle-svg-track`}
                                    style={{
                                        strokeWidth: circle.strokeWidth
                                    }}
                                ></path>
                                <path className={`${self.props.prefixClassName}-circle-svg-bar`}
                                    style={{
                                        strokeWidth: circle.strokeWidth,
                                        strokeDashoffset: circle.strokeDashoffset
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
        },
        app.propTypes = {
            prefixClassName: p.string,
            themes: p.oneOfType([
                p.string,
                p.arrayOf(p.string),
            ])
        }
    }
}
