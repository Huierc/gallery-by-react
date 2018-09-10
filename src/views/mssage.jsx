import React , {Component}from 'react';
import {Route,NavLink} from 'react-router-dom';
import messageDetail from './messageDetail';

export default class Mssage extends React.Component{
	constructor(props){
		super(props);
		this.state={
			msage:[
				{
					id:1,
					msg:'msg01'
				},
				{
					id:2,
					msg:'msg02'
				},
				{
					id:3,
					msg:'msg03'
				}
			]
		}
	}

	showDetail(id){
		//路由跳转没有发请求，页面跳转发请求了window.location
		this.props.history.push(`/home/Mssage/messageDetail/${id}`)
	}

	render(){
		return(
			<div>
				<ul>
				{
					this.state.msage.map((item,index) => (
						<li key={index}>
							<NavLink to={`/home/Mssage/messageDetail/${item.id}`}>{item.msg}</NavLink>
							&nbsp;&nbsp;&nbsp;<button onClick={this.showDetail.bind(this,item.id)}>查看</button>
						</li>
					))
				}
				</ul>
				<Route path="/home/Mssage/messageDetail/:id" component={messageDetail}/>
			</div>
		)
	}
}
