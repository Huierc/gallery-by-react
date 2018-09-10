import React , {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state={
			users:null
		}
	}
	
	//组件接收到一个新的 prop (更新后)时被调用
	componentWillReceiveProps(newProps){
		var that = this
		const {searchName} = newProps  //指定了新的searchName，需要请求
		//发送ajax请求
		const url = `https://api.github.com/search/users?q=${searchName}`
		axios.get(url)
			.then((response) => {
				const result = response.data.items;
				this.setState({
					users:result
				})
				
			})
			.catch((error) => {
				this.setState({
					users:null
				})
			})
	}

	render(){
		const {users,isShow} = this.state
		return(
				<div className="index">
					{
						users && users.map((item,index) => (
							<div className="main-img" key={index}>
								<a href={item.html_url}><img src={item.avatar_url}/></a>
								<p className="main-p">{item.login}</p>
					        </div>
						))
					}
		        </div>
			)	
	}
}
