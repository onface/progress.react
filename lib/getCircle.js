const getCircle = function(percent, barWidth) {
	barWidth = barWidth || 3
	percent = Math.max(Math.min(100, percent) , 0) || 0
	let circumference = Math.PI * (100 - barWidth)
	let output = {
		viewBox : [
			0 - barWidth / 4,
			0 - barWidth / 4,
			100 + barWidth / 2,
			100 + barWidth / 2,
		].join(' '),
		strokeDashoffset : (100 - percent) / 100 * circumference
	}

	return output
}

module.exports = getCircle
export default getCircle