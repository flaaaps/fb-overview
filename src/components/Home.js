import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

import classNames from 'classnames';

function Home({ live }) {
    const [currentlyLive, setCurrentlyLive] = useState(false);

    useEffect(() => {
        if (!live.loading) {
            if (live.error) return console.log(live.error);
            setCurrentlyLive(live.data.fixtures.length > 0);
        }
    }, [live, setCurrentlyLive]);

    return (
        <Layout>
            <h1 className="text-2xl">Welcome!</h1>
            <div className="my-3">
                <Link to="/upcoming">Check out the upcoming matches</Link>
            </div>
            <div>
                <Link to="/live">
                    <span className={classNames('text-white bg-red-500 px-3 py-1 rounded-md', { hidden: !currentlyLive, 'px-3': !currentlyLive })}>
                        Live
                    </span>
                    <span className="text-md">Show live matches</span>
                </Link>
            </div>
        </Layout>
    );
}

export default Home;
