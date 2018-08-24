import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'isomorphic-fetch';
import { polyfill } from 'es6-promise';
polyfill();

import Home from './Home/Home';
import Details from './Details/Details';
import Edit from './Edit/Edit';

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/chirp/:id/edit" component={Edit} />
                    <Route path="/chirp/:id" component={Details} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
