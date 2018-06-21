import p from 'prop-types'
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
            render: function(own){
                return (
                    <div
                        {...own.$render('rootProps')}
                    >
                        <div className={`${own.props.prefixClassName}-line`}>
                            <div className={`${own.props.prefixClassName}-track`}
                                style={_.assign(
                                    { 
                                        height: own.props.width,
                                    },
                                    own.$render('getColor')(own.props.strackColor)
                                )}
                            >
                                <div 
                                    className={`${own.props.prefixClassName}-track-bar`}
                                    style={_.assign(
                                        { 
                                            width: own.props.percent+'%'
                                        },
                                        own.$render('getColor')(own.props.barColor)
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
            render: p.func
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
            text: function(own){
                return own.$render('getAccuracy')(own.props.percent, own.props.accuracy) + '%'
            },
            render: function(own){
                let circle = own.$render('getCircle')(own.props.percent, own.props.width)
                let textNode = own.$render('transToFunc').call(own, own.props.text)
                return (
                    <div 
                        {...own.$render('rootProps')}
                    >
                        <div className={`${own.props.prefixClassName}-circle`}>
                            <svg viewBox={circle.viewBox} className={`${own.props.prefixClassName}-circle-svg`}>
                                <path 
                                    className={`${own.props.prefixClassName}-circle-svg-track`}
                                    d={own.props.path}
                                    style={{
                                        strokeWidth: circle.strokeWidth,
                                        stroke: own.props.barColor
                                    }}
                                ></path>
                                <path 
                                    className={`${own.props.prefixClassName}-circle-svg-bar`}
                                    d={own.props.path}
                                    style={{
                                        strokeWidth: circle.strokeWidth,
                                        strokeDashoffset: circle.strokeDashoffset,
                                        stroke: own.props.strackColor
                                    }}
                                ></path>
                            </svg>
                            <div className={`${own.props.prefixClassName}-F-text ${own.props.prefixClassName}-F-text--inset`}>
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
            render: p.func
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
