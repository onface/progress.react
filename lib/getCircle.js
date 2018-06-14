const getCircle = function(percent, width) {
	let defaultWidth = 6
	width = width || 3
	percent = Math.max(Math.min(100, percent) , 0) || 0
	let circumference = Math.PI * (100 - width)
	let output = {
		viewBox : [
			0 - ( width - defaultWidth ) / 2,
			0 - ( width - defaultWidth ) / 2,
			100 + ( width - defaultWidth ),
			100 + ( width - defaultWidth ),
		].join(' '),
		strokeWidth: width,
		strokeDashoffset : (100 - percent) / 100 * circumference
	}
	return output
}

module.exports = getCircle
export default getCircle