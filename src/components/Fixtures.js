import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FixturesQuery from '../graphql/FixturesQuery';
import Fixture from './FixtureItem';
import Layout from './Layout';

function Fixtures() {
    const [fixtures, setFixtures] = useState([]);
    const { loading, error, data } = useQuery(FixturesQuery);

    useEffect(() => {
        if (!loading) {
            if (error) return console.log(error);
            let test = data.fixtures;
            test = test.slice().sort((a, b) => a.timestamp - b.timestamp);
            console.log(test, 'SF');
            setFixtures(test);
        }
    }, [data, error, loading]);
    return (
        <Layout>
            <Link to="/" className="underline">
                Back
            </Link>
            <h1 className="text-2xl mb-3">Upcoming Matches</h1>
            <div className="grid grid-flow-row md:grid-cols-2 xl:grid-cols-3 auto-rows-fr gap-4">
                {!loading ? fixtures.map((f) => <Fixture fixture={f} key={f.id} />) : <h1>Loading...</h1>}
            </div>
        </Layout>
    );
}

export default Fixtures;
