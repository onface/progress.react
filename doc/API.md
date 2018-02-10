# API

## Progress

prefixClassName: 'face-progress',
themes: '',
accuracy: 0 ,
percent: 0 ,
info: true ,
active: false ,
type:'line' ,
status:'default' ,
barColor:'',
insetText: false,
dashboard:false


<table>
	<tr>
		<th>属性</th>
		<th>说明</th>
		<th>类型</th>
		<th>默认值</th>
		<th>例</th>
	</tr>
	<tr>
		<td>prefixClassName</td>
		<td></td>
		<td>string</td>
		<td>'face-progress'</td>
		<td></td>
	</tr>
	<tr>
		<td>themes</td>
		<td></td>
		<td>string</td>
		<td>''</td>
		<td></td>
	</tr>
	<tr>
		<td>accuracy</td>
		<td>精确到小数点后几位</td>
		<td>number</td>
		<td>0</td>
		<td></td>
	</tr>
	<tr>
		<td>percent</td>
		<td>百分比(不带百分比符号的数字)</td>
		<td>number(int|float)</td>
		<td>0</td>
		<td>99.99</td>
	</tr>
	<tr>
		<td>info</td>
		<td>控制显示进度条右侧显示内容,或环内显示内容</td>
		<td>boolean|function</td>
		<td>true</td>
		<td>
			`false`: 不显示 <br/>
			`true`: 显示百分比 <br/>
			`fn`: 显示函数返回的React.Element <br/>
			[示例](./doc/index.html#basic)
		</td>
	</tr>
	<tr>
		<td>active</td>
		<td>控制显示激活样式</td>
		<td>boolean</td>
		<td>false</td>
		<td></td>
	</tr>
	<tr>
		<td>type</td>
		<td>进度条类型</td>
		<td>string</td>
		<td>'line'</td>
		<td>
			`line`: 横向进度条 <br/>
			`inset`: 横向进度条 - 可内置显示内容 <br/>
			`circle`: 环形滚动条
		</td>
	</tr>
	<tr>
		<td>status</td>
		<td>进度条状态</td>
		<td>string</td>
		<td>'default'</td>
		<td>
			`default`: 进度条以及进度条右侧或环内显示内容 为*蓝色* <br/>
			`error`: 进度条以及进度条右侧或环内显示内容 为*红色* <br/>
			`success`: 进度条以及进度条右侧或环内显示内容 为*绿色*
		</td>
	</tr>
	<tr>
		<td>insetText</td>
		<td>控制进度条内置显示内容</td>
		<td>boolean|function</td>
		<td>false</td>
		<td>
			`true`: 默认显示内置内容为百分比 <br/>
			`false`: 不显示 <br/>
			`fn`: 显示函数返回的React.Element <br/>
			[示例](./doc/index.html#inset)
		</td>
	</tr>
	<tr>
		<td>barColor</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
	<tr>
		<td>dashboard</td>
		<td>控制是否显示为仪表盘样式</td>
		<td>boolean</td>
		<td>false</td>
		<td>
			`true`: 显示为仪表盘样式 ( 只有在`type:circle`时才有效 )
			`false`: 没有样式改变
		</td>
	</tr>
</table>


## ProgressGroup