// reactElement
import Progress from './line';
import ProgressGroup from './lineGroup';
import ProgressCircle from './circle';
// itool
import getAccuracy from "./itool/getAccuracy";
import getCircle from "./itool/getCircle";
import transToFunc from './itool/transToFunc';
import childToArray from './itool/childToArray';


export {
	Progress as default,
	ProgressCircle,
	ProgressGroup,
	getAccuracy,
	getCircle,
	transToFunc,
	childToArray
};
exports = {
	default : Progress,
	ProgressCircle,
	ProgressGroup,
	getAccuracy,
	getCircle,
	transToFunc,
	childToArray
}