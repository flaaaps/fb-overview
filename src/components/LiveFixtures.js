import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fixture from './FixtureItem';
import Layout from './Layout';

function LiveFixtures({ live: { loading, error, data } }) {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        if (!loading) {
            if (error) return console.log(error);
            setFixtures(data.fixtures.slice().sort((a, b) => a.timestamp - b.timestamp));
        }
    }, [data, error, loading]);

    if (loading)
        return (
            <Layout>
                <h1 className="text-2xl">Loading...</h1>
            </Layout>
        );

    return (
        <Layout>
            <Link to="/" className="underline">
                Back
            </Link>
            <h1 className="text-2xl">Live Matches</h1>
            {fixtures.length === 0 ? 'No live games!' : fixtures.map((f) => <Fixture fixture={f} key={f.id} />)}
        </Layout>
    );
}

export default LiveFixtures;
