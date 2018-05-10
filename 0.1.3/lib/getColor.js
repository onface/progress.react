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


const getColor = {
	getBgColor: function(color, type) {
		if(type == 'circle'){
			return { stroke:color }
		}
		return { background:color }
	},
	getBarColor: function(color) {
		if(typeof color == 'string'){
			console.log('getBarColor string')
			return { backgroundColor : color }
		}else if(Array.isArray(color)){
			console.log('getBarColor array')
			let cStart = color[0]
			let cEnd = color[1]
			let style = {
				filter:'alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr='+cStart+',endcolorstr='+cEnd+',gradientType=0)',
			    // -ms-filter:'alpha(opacity=100 finishopacity=50 style=1 startx=0,starty=0,finishx=0,finishy=150) progid:DXImageTransform.Microsoft.gradient(startcolorstr='+cStart+',endcolorstr='+cEnd+',gradientType=0)',
			    background:cStart,
			}
			switch(getBrowser()){
				case 'Chrome': case 'Safari':
					style.background = '-webkit-gradient(linear, 0 0, 100% 0, from('+cStart+'), to('+cEnd+'))'
				break
				case 'FF':
					style.background = '-moz-linear-gradient(top, '+cStart+', '+cEnd+')'
				break
				case 'Opera':
					style.background = '-o-linear-gradient(top, '+cStart+', '+cEnd+')'
				break

			}
			return style
		}else{
			console.log('getBarColor null')
			return {}
		}
	}
}

export default getColor
module.exports = getColor