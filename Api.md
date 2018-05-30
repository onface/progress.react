
======----
<Progress percent={60} accuracy={2} />

==========
<Progress percent={120} />

======----60%
<Progress percent={60} inline />

======60%----
<Progress percent={60} inset />

   60%
======----
<Progress percent={60} top />

======----
   60%
<Progress percent={60} bottom />

======----
======----
<Progress percent={60} width={'4px'} />

<Progress percent={60} barColor={'red'} />
<Progress percent={60} barColor={['red','green']} />
<Progress percent={60} markColor={'yellow'} />
<Progress percent={60} markColor={['red','green']} />
// <Progress 
// 	percent={60} 
// 	render={function (self) {
// 		let data = self.props
// 		return (
// 			<div 
// 				className={`${data.prefixClassName}-bar`}
// 				style={{
// 					width: getAccuracy(data.percent, data.accuracy),
// 					width: data.percent
// 				}}
// 			>
// 				<span className={`${data.prefixClassName}-bar-text`}>
// 					{data.percent}%
// 				</span>
// 			</div>
// 		)
// 	}}
// />
