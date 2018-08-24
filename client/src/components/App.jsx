import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();

import Home from './Home/Home';
import Details from './Details/Details';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/details/:id" component={Details} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
