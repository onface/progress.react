const transToFunc = function(props) {
	if(props === false){
		console.log(false)
		return null
	}else if(typeof props == 'string') {
		console.log('string')
		return props
	}else if(typeof props == 'function') {
		console.log('function')
		return props(this)
	}
}
module.exports = transToFunc
export default transToFunc