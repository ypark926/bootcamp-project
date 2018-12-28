const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
  }

  type Mutation {
    loginUser(email: String!, password: String!): LoginReturn!
  }

  type User {
    id: ID!
    name: String!
  }

  type LoginReturn {
     user: User
     token: String
     error: Error
  }

  type Error {
    message: String
  }
`
