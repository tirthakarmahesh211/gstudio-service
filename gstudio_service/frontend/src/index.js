import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';

ReactDOM.render(
    
        	<BrowserRouter>
    			<App />
    		</BrowserRouter>,
    document.getElementById('root')
);

//registerServiceWorker();