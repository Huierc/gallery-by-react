import React , {Component}from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';
import About from '../views/about';
import Home from '../views/home';

export default class Root extends React.Component {
	render(){
		return(
			<div>
				<h2>react Router Demo</h2>
				<div className="row">
					<div className="col-xs-2 col-xs-offest-2">
						<div className="list-group">
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Redirect to="/about" />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}