import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';

import url from '../../env/serverUrl';

class HomeTable extends Component {
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
                <td>
                    <button>See Details</button>
                </td>
            </tr>
        ));
        return chirps.length > 0 ? (
            chirps
        ) : (
            <tr>
                <td colSpan="3">There Are No People</td>
            </tr>
        );
    }

    render() {
        const tableData = this.state.chirps ? (
            this.listChirps()
        ) : (
            <tr>
                <td colSpan="3">Loading...</td>
            </tr>
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>{tableData}</tbody>
            </table>
        );
    }
}

export default HomeTable;
