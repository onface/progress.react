import extend from 'safe-extend';

const getBrowser = function(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
	  return "Chrome";
	}
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}

const colorArrayToStyle = function(colorArray) {
	let colorStart = colorArray[0]
	let colorEnd = colorArray[1]
	let style = {
		filter:'alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr='+colorStart+',endcolorstr='+colorEnd+',gradientType=0)',
	    // -ms-filter:'alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr='+colorStart+',endcolorstr='+colorEnd+',gradientType=0)',
	    background:colorStart,
	}
	switch(getBrowser()){
		case 'Chrome': case 'Safari':
			style.background = '-webkit-gradient(linear, 0 0, 100% 0, from('+colorStart+'), to('+colorEnd+'))'
		break
		case 'FF':
			style.background = '-moz-linear-gradient(top, '+colorStart+', '+colorEnd+')'
		break
		case 'Opera':
			style.background = '-o-linear-gradient(top, '+colorStart+', '+colorEnd+')'
		break

	}
	return style
}

/* 暂时只支持 line 的渐变色
 * @example 
 * 		color = {string} 'red'
 * 		color = {arrayOf(string)} ['red', 'pink']
 *		options = {
 *			type: {string} 'line' || 'circle'
 *		}
 *
 */
const getColor = function(color, options) {
	let outputStyle = {}

	if(typeof color == 'undefined'){
		return outputStyle
	}

	let defaultOptions = {
		// component: 'line',
		colorType: Array.isArray(color) ? 'array' : 'string'
	}
	options = extend(true, defaultOptions, options)


	// switch(options.component){
	// 	case 'line':

			switch(options.colorType){
				case 'string':
					outputStyle = {
						backgroundColor: color
					}
				break
				case 'array':
					outputStyle = colorArrayToStyle(color)
				break
			}

	// 	break
	// 	case 'circle':

	// 		switch(options.colorType){
	// 			case 'string':
	// 				outputStyle = {
	// 					strack: { stroke:color },
	// 					bar: { stroke : color }
	// 				}
	// 			break
	// 			case 'array':
	// 				console.error('Warning: ProcessCircle not support gradient color from \'../node_modules/progress.react/lib/itool/getColor.js!\'')
	// 			break
	// 		}

	// 	break
	// }

	return outputStyle
}

module.exports = getColor
export default getColor