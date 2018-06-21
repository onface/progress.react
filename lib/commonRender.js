import getAccuracy from "./itool/getAccuracy";
import getCircle from "./itool/getCircle";
import getColor from "./itool/getColor";
import transToFunc from './itool/transToFunc';
import childToArray from './itool/childToArray';

const iToolMap = {
	getAccuracy,
	getCircle,
	getColor,
	transToFunc,
	childToArray
}

const commonRender = function(name) {
	if(iToolMap[name]){
		return iToolMap[name]
	}else {
		return undefined
	}
}

module.exports = commonRender
export default commonRender