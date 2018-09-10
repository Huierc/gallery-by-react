import React from 'react';
const message = [
	{
		id:1,
		msg:'msg01',
		msgdet:'首先它不用去判断渲染哪个'
	},
	{
		id:2,
		msg:'msg02',
		msgdet:'首先它不用去判断渲染哪个2'
	},
	{
		id:3,
		msg:'msg03',
		msgdet:'首先它不用去判断渲染哪个3'
	}

]

export default function MessageDetail(props){
	const {id} = props.match.params;
	const con = message.find((m) => m.id===id*1)
	return(
		<div>
			<li>
				id:{con.id}
				{con.msg}
				{con.msgdet}
			</li>

		</div>
		)
}