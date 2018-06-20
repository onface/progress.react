const transToFunc = function(props) {
	if(props === false){
		return null
	}else if(typeof props == 'string') {
		return props
	}else if(typeof props == 'function') {
		return props(this)
	}
}
module.exports = transToFunc
export default transToFunc