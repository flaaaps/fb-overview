import { useQuery } from '@apollo/client';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Fixtures from './components/Fixtures';
import Home from './components/Home';
import LiveFixtures from './components/LiveFixtures';
import LiveFixturesQuery from './graphql/LiveFixturesQuery';

function App() {
    const { loading, error, data } = useQuery(LiveFixturesQuery);
    return (
        <BrowserRouter>
            <Route exact path="/">
                <Home live={{ loading, error, data }} />
            </Route>
            <Route path="/live">
                <LiveFixtures live={{ loading, error, data }} />
            </Route>
            <Route path="/upcoming" component={Fixtures} />
        </BrowserRouter>
    );
}

export default App;
