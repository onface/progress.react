import p from 'prop-types'
export default {
    line: function (app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            barColor:'', // 改变进度条颜色
            barMarkColor:'#f5f5f5', // 改变底层进度条颜色
            className:'',
            children: function(self, ref, domProps){
                return (
                    <div
                        ref={ref`root`}
                        {...domProps}
                    >
                        <div className={`${self.props.prefixClassName}-line`}>
                            <div className={`${self.props.prefixClassName}-track`}>
                                <div 
                                    className={`${self.props.prefixClassName}-track-bar`}
                                    style={{
                                        width: self.props.precent + '%'
                                    }}
                                ></div>
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
            barColor:p.string,
            barMarkColor:p.string,
            children: p.func
        }
    },
    circle: function(app) {
        app.defaultProps = {
            prefixClassName: 'face-progress',
            themes: '',
            percent: 0 , // 百分比(不带百分比符号的数字)
            accuracy: 0 , // 精确到小数点后几位
            barColor:'', // 改变进度条颜色
            barMarkColor:'#f5f5f5', // 改变底层进度条颜色
        }
    }
}
