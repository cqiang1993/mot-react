import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './js/App';
import registerServiceWorker from './js/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
