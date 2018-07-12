/*
	@example
*/

const objToArray = function(option) {
	// not exist
	if(!option){
		return []
	}
	// inner string transTo array
	let length = option.percent.length || 1
	let optionObj = {}
	Object.keys(option).map(function(key){
		if(typeof option[key] == 'string' || typeof option[key] == 'number'){
			optionObj[key] = new Array(length).fill(option[key])
		}
		// Make up the length
		if(Array.isArray(option[key])){
			let curLength = option[key].length
			optionObj[key] = option[key].concat(new Array(length - curLength).fill(option[key][0]))
		}
	})
	// optionObj transto optionArray
	let optionArray = []
	for(let i = 0; i < length ; i++){
		let output = {}
		Object.keys(optionObj).map(function(key){
			output[key] = optionObj[key][i]
		})
		optionArray[i] = output
	}

	return optionArray
}


module.exports = objToArray
export default objToArray