const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    user(id: ID!): User!
    users(
      substr: String
      hometown: String
      house: String
      concentration: String
    ): [User!]
    post(id: ID!): Post!
    posts: [Post!]
  }

  type Mutation {
    loginUser(email: String!, password: String!): LoginReturn!
  }

  type User {
    id: ID!
    name: String!
    email: String!
    birthday: String!
    concentration: String!
    hometown: String!
    house: String!
    gender: String!
    bio: String!
    picture: String!
  }

  type Post {
    id: ID!
    content: String!
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
