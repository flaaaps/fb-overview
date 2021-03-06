import { gql } from '@apollo/client';

const FixturesQuery = gql`
    query Fixtures {
        fixtures {
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

export default FixturesQuery;
