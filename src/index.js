import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import {BrowserRouter} from 'react-router-dom';
import 'antd-mobile/dist/antd-mobile.css'

// Render the main component into the dom
ReactDOM.render((
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	), document.getElementById('app'));
