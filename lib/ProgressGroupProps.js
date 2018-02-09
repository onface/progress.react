import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-progress',
        themes: '',
        accuracy: 0 ,
		percent: [0] ,
		info: true ,
		active: false ,
		type:'line' ,
		status:'default' ,
		barColor:[''],
		insetText: [false],
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string ,
        accuracy: p.oneOfType([
            p.number,
            p.arrayOf(p.number)
        ]) ,
        percent: p.arrayOf(p.number) ,
        info: p.oneOfType([
        	p.bool ,
        	p.func 
    	]),
    	active: p.bool ,
    	type: p.string ,
    	status: p.string ,
    	barColor: p.arrayOf(p.string) ,
    	insetText: p.arrayOf(
            p.oneOfType([
            	p.bool ,
            	p.func 
        	])
        ),
    }
}
