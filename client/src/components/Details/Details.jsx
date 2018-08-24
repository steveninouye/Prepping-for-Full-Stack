import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

class Details extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Hello from Details {this.props.match.params.id}</h1>;
    }
}

export default Details;
