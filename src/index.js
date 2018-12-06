import React from 'react';
import ReactDOM from 'react-dom';
import LiveSearch from './components/live-search';
import './index.css';
import peaks from './peaks.json';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<LiveSearch />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
