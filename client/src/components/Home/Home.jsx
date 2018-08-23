import React, { Fragment } from 'react';

import HomeForm from './HomeForm';
import HomeTable from './HomeTable';

const Home = (props) => (
    <Fragment>
        <h1>Welcome to Home</h1>
        <HomeForm />
        <HomeTable />
    </Fragment>
);

export default Home;
