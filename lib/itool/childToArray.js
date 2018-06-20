const childToArray = function(children) {
	// not exist
	if(!children){
		return []
	}
	// inner string transTo array
	let length = children.percent.length || 1
	let childrenObject = {}
	Object.keys(children).map(function(key){
		if(typeof children[key] == 'string' || typeof children[key] == 'number'){
			childrenObject[key] = new Array(length).fill(children[key])
		}
		// Make up the length
		if(Array.isArray(children[key])){
			let curLength = children[key].length
			childrenObject[key] = children[key].concat(new Array(length - curLength).fill(children[key][0]))
		}
	})
	// childrenObject transto childrenArray
	let childrenArray = []
	for(let i = 0; i < length ; i++){
		let output = {}
		Object.keys(childrenObject).map(function(key){
			output[key] = childrenObject[key][i]
		})
		childrenArray[i] = output
	}

	return childrenArray
}


module.exports = childToArray
export default childToArray