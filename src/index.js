import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './approot';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

ReactDOM.render(<AppRoot />, document.getElementById('root'));
registerServiceWorker();