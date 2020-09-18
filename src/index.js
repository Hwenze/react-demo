import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store/data';
import { Provider } from 'react-redux';
import List from './view/list';
import Add from './view/add';
import Choose from './view/choose';
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import './assets/scss/common.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" exact component={List}></Route>
            <Route path="/add" exact component={Add}></Route>
            <Route path="/choose" exact component={Choose}></Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);