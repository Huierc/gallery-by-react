import React , {Component}from 'react';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom';
import News from './news';
import Mssage from './mssage';

export default class Home extends React.Component{
	render(){
		return(
			<div>
				<h2>home react router</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink className="list-group-item" to="/home/news">news</NavLink>
						</li>
						<li>
							<NavLink className="list-group-item" to="/home/mssage">mssage</NavLink>
						</li>
					</ul>
					<div className="panel">
						<div className="panel-body">
							<Switch>
								<Route path="/home/news" component={News}/>
								<Route path="/home/mssage" component={Mssage}/>
								<Redirect to="/home/news" />
							</Switch>
						</div>
					</div>
				</div>
			</div>
		)
	}
}