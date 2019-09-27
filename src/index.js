import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic';

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';



export const types = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
};

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  type: types.SUCCESS,
  timeout: 1500,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
};


ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<PersistGate persistor={persistor}>
		 <AlertProvider template={AlertTemplate}{...options}>
		<App /  >
		</AlertProvider>
		</PersistGate>
	</BrowserRouter>
</Provider>, 
	document.getElementById('root')
	);

