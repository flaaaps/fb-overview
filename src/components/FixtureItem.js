import React from 'react';
import moment from 'moment';
import TeamLogo from './TeamLogo';

function Fixture({ fixture }) {
    return (
        <div key={fixture.id} className="my-5">
            <p className="text-center text-red-500 m-0">{fixture.league.name}</p>
            <div className="flex items-center justify-between w-100 text-center">
                <p className="flex items-center mx-auto">
                    <TeamLogo src={fixture.teams.home.logo} alt={fixture.teams.home.name} />
                    {fixture.teams.home.name} vs {fixture.teams.away.name}
                    <TeamLogo src={fixture.teams.away.logo} alt={fixture.teams.away.name} />
                </p>
            </div>
            <div style={{ textAlign: 'center' }}>um {moment(fixture.timestamp * 1000).format('DD.MM.YYYY HH:mm')}</div>
        </div>
    );
}

export default Fixture;
