export const schema = gql`
  type Weather {
    city: String!
    conditions: String!
    temp: Float!
  }

  type Query {
    weather(city: String!): Weather!
  }
`
