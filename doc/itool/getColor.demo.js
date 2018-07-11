var React = require('react')
var ReactDOM = require('react-dom')
import Progress, {getColor} from 'progress.react'

class Color extends React.Component {
    render () {
        return (
            <div className="itoolDemo" >
	            <Progress 
                    width={'1em'}
                    percent={50}
                    accuracy={3}
                    strackColor={'yellow'}
                    barColor={'pink'}
                    render={function(own){
                        let pcls = own.props.prefixClassName
                        return (
                            <div
                                {...own.$render('rootProps')}
                            >
                                <div className={`${pcls}-line`}>
                                    <div className={`${pcls}-track`}
                                        style={_.assign(
                                            { 
                                                height: own.props.width,
                                            },
                                            own.$render('getColor')(own.props.strackColor)
                                        )}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
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
                    }}
                />
                <hr/>
                <Progress 
                    width={'1em'}
                    percent={30}
                    accuracy={3}
                    strackColor={['pink', 'white']}
                    barColor={['red','yellow']}
                    render={function(own){
                        let pcls = own.props.prefixClassName
                        return (
                            <div
                                {...own.$render('rootProps')}
                            >
                                <div className={`${pcls}-line`}>
                                    <div className={`${pcls}-track`}
                                        style={_.assign(
                                            { 
                                                height: own.props.width,
                                            },
                                            own.$render('getColor')(own.props.strackColor)
                                        )}
                                    >
                                        <div 
                                            className={`${pcls}-track-bar`}
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
                    }}
                />
            </div>
        )
    }
}
/*ONFACE-DEL*/Color = require("react-hot-loader").hot(module)(Color)
ReactDOM.render(
    <Color />,
    document.getElementById('color-demo')
)

