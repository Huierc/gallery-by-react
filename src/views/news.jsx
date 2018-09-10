import React , {Component}from 'react';

export default class News extends React.Component{
	constructor(props){
		super(props)
		this.state={
			newsTitle:[
				'黄晓明出借账户涉股票操纵案 账户未冻结',
				'蔡英文刚在美住下，就被“一个中国”围了',
				'土耳其里拉暴跌 如何用旅游和代购“干一票”？'
			]
		}
	}
	render(){
		return(
			<div>
				{
					this.state.newsTitle.map((item,index) => {
						return(
							<li key={index}>{item}</li>
							)
					})	
				}
			</div>
		)
	}
}
