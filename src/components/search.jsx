import React , {Component} from 'react';
import PropTypes from 'prop-types';
import PubSub from 'pubsub-js';

export default class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			inpValu:''
		}
	}

	

	search(){
		const searchName = this.input.value;
		if(searchName == ''){
			alert('请输入关键字');
			return;
		}else{
			this.props.searchNameFuc(searchName);
		}
	}

	render(){
		return (
			<section className="jumbor">
				<h3 className="jumborh">Search github users</h3>
				<div>
					<input type="text" placeholder="enter you name" defaultValue={this.state.inpValu} ref={input => this.input = input} />
					<button onClick={this.search.bind(this)}>Search</button>
				</div>
			</section>
		)
	}
}
