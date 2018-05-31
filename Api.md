
======----
<Progress percent={60} accuracy={2} />

==========
<Progress percent={120} />

======----60%
<Progress percent={60} inline />
<Progress percent={100} 
	text={(percent)=>{
		return (<i><Icon type="success"/>{percent}%</i>)
	}}
/>

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
<Progress percent={60} barColor={'red'} 	barColor={['red','green']} />
<Progress percent={60} markColor={'yellow'} markColor={['red','green']} />
<Progress percent={60} textSize={'14px'} textColor={'#eee'}/>
/*
<Progress 
	percent={60} 
	render={function (self) {
		let props = self.props
		let pcls = props.prefixClassName
		return (
			<div className={`${pcls}-track`} 
				<div 
					className={`${pcls}-track-bar`}
					style={{
						width: getAccuracy(props.percent, props.accuracy),
						width: props.percent
					}}
				>
					<span className={`${pcls}-track-bar-text`}>
						{props.percent}%
					</span>
				</div>
			</div>
		)
	}}
/>
*/

<ProgressGroup>
	<Progress percent={80} barColor={'green'} />
	<Progress percent={60} barColor={'red'} />
	<Progress percent={40} barColor={'yellow'} />
</ProgressGroup>
<ProgressGroup
	markColor={['red','green']}
	width={'4px'}
	textSize={'10px'} 
	textColor={'pink'}
	accuracy={2}
>
	<Progress percent={80} barColor={'green'} textSize={'14px'} textColor={'#eee'} />
	<Progress percent={60} barColor={'red'} accuracy={0} />
	<Progress percent={40} barColor={'yellow'} />
</ProgressGroup>

<ProgressCircle percent={80} barColor={'red'} />
// <ProgressCircle percent={60} barColor={['red','green']} /> support?
<ProgressCircle percent={80} type="dashboard" width={'6px'} />
/*
<ProgressCircle percent={80} 
	text={(percent)=>{
		let props = self.props
		let pcls = props.prefixClassName
		return (
			<div className={`${pcls}-circle-info`}>{percent}%</div>
		)
	}}
/>
*/