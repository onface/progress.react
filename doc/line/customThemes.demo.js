var React = require('react')
var ReactDOM = require('react-dom')
import Progress, {ProgressCircle} from 'progress.react';

import './customThemes.demo.less'

class CustomThemes extends React.Component {
    render () {
        return (
            <div className="customThemesDemo" >
                <Progress percent={60} prefixClassName="face-progress-custom" themes="customPurple" /> <br/>
                <Progress percent={60} prefixClassName="face-progress-custom" themes="customPurple loading" /> <br/>
                <Progress percent={60} prefixClassName="face-progress-custom" themes="customPurple success" /> <br/>
                <Progress percent={60} prefixClassName="face-progress-custom" themes="customPurple warn" /> <br/>
                <Progress percent={60} prefixClassName="face-progress-custom" themes="customPurple error" /> <br/>
                <div style={{width:'100px'}}>
                	<ProgressCircle percent={60} prefixClassName="face-progress-custom" themes="customPurple" />
                	<ProgressCircle percent={60} prefixClassName="face-progress-custom" themes="customPurple success" />
                	<ProgressCircle percent={60} prefixClassName="face-progress-custom" themes="customPurple warn" />
                	<ProgressCircle percent={60} prefixClassName="face-progress-custom" themes="customPurple error" />
                	<ProgressCircle percent={60} prefixClassName="face-progress-custom" themes="customPurple dashboard" />
                </div>
            </div>
        )
    }
}
/*ONFACE-DEL*/CustomThemes = require("react-hot-loader").hot(module)(CustomThemes)
ReactDOM.render(
    <CustomThemes />,
    document.getElementById('customThemes-demo')
)

