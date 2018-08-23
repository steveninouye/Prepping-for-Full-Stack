import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import url from '../env/serverUrl';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chirps: false
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch(url)
            .then((res) => res.json())
            .then((chirps) => this.setState({ chirps }));
    }

    listChirps() {
        const chirps = this.state.chirps.map((chirp, idx) => (
            <tr key={idx}>
                <td>{chirp.name}</td>
                <td>{chirp.age}</td>
            </tr>
        ));
        return chirps.length > 0 ? (
            chirps
        ) : (
            <tr>
                <td colSpan="2">There Are No People</td>
            </tr>
        );
    }

    render() {
        const tableData = this.state.chirps ? (
            this.listChirps()
        ) : (
            <tr>
                <td colSpan="2">Loading...</td>
            </tr>
        );
        return (
            <Fragment>
                <h1>Hello from Home</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>{tableData}</tbody>
                </table>
            </Fragment>
        );
    }
}

export default Home;
