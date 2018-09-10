require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Search from './search';
import App from './app'



export default class AppComponent extends React.Component {
	constructor(props){
		super(props);
		this.state={
			searchName:''
		}
	}

	componentDidMount(){

	}

	searchNameFuc(searchName){
		this.setState({
			searchName:searchName
		})
	}

  render() {
    return (
      <div>
		<Search searchNameFuc={this.searchNameFuc.bind(this)}/>
		<App searchName = {this.state.searchName}/>
	  </div>
    );
  }

}

AppComponent.defaultProps = {
};

