import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import TopPage from './topPage'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/about/:name' component={About} />
            <Route exact path='/' component={App} />
            {/* <Route exact path='/' component={TopPage} /> */}
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
