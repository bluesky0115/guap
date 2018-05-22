import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes/Routes';


ReactDOM.render(
	<Provider store={store} kareem='kareem'>
		<BrowserRouter>
			<Routes />
		</BrowserRouter> 
	</Provider>, 
	document.getElementById('root')
);
registerServiceWorker();
