const getAccuracy = function(percent, accuracy) {

	let num = Math.max(Math.min(100, percent) , 0) || 0

        num = (num).toFixed(accuracy)
    /*
    if(/\./.test(num)){
        // 浮点数处理
        let decimal = String(num).replace(/^\d+\.(\d+)$/,'$1')
        if(decimal.length < accuracy ){
            let fil = new Array(accuracy - decimal.length).fill('0').join('')
            num = String(num) + fil
        }else{
            num = Math.round( parseFloat(num) * accur ) / accur
        }
    }else{
        // 整数处理
        accur = new Array(accuracy).fill('0').join('')
        accur = accur ? '.' + accur : ''
        num = String(num) + accur
    }
    */
    return num
}
module.exports = getAccuracy
export default getAccuracy