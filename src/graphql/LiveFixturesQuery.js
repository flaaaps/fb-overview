import { gql } from '@apollo/client';

const LiveFixturesQuery = gql`
    query LiveFixtures {
        fixtures(live: true) {
            id
            timestamp
            league {
                name
            }
            teams {
                away {
                    name
                    logo
                }
                home {
                    name
                    logo
                }
            }
            venue {
                name
                city
            }
        }
    }
`;

export default LiveFixturesQuery;
