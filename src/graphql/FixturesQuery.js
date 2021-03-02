import { gql } from '@apollo/client';

const FixturesQuery = gql`
    query Test {
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
        }
    }
`;

export default FixturesQuery;
