import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import FixturesQuery from './graphql/FixturesQuery';

import moment from 'moment';

function App() {
    const [sortedFixtures, setSortedFixtures] = useState([]);
    const { loading, error, data } = useQuery(FixturesQuery);

    useEffect(() => {
        if (!loading) {
            let test = data.fixtures;
            test = test.slice().sort((a, b) => a.timestamp - b.timestamp);
            console.log(test, 'SF');
            setSortedFixtures(test);
        }
    }, [data, error, loading]);
    return (
        <div>
            {!loading ? (
                <div>
                    {sortedFixtures.map((f) => (
                        <div key={f.id} style={{ margin: '50px 0', fontFamily: 'sans-serif', fontWeight: '500' }}>
                            <p style={{ textAlign: 'center', margin: '0' }}>{f.league.name}</p>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    maxWidth: '800px',
                                    width: '100%',
                                    margin: '0 auto',
                                }}
                            >
                                <img src={f.teams.home.logo} width="35" alt={f.teams.home.name} />
                                {f.teams.home.name} vs {f.teams.away.name} <img src={f.teams.away.logo} width="35" alt={f.teams.away.name} />
                            </div>
                            <div style={{ textAlign: 'center' }}>um {moment(f.timestamp * 1000).format('DD.MM.YYYY HH:mm')} im </div>
                        </div>
                    ))}
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
}

export default App;
