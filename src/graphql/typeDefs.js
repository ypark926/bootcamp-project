const gql = require('graphql-tag')

module.exports = gql`
  type Query {
    discovery(
      filter: DiscoveryFilterInput!
      offset: Int
      limit: Int
    ): UserConnection!
    user(id: ID!): User!
    users(substring: String!): UserConnection!
  }

  type Mutation {
    verifyEmail(email: String!): VerifyEmailReturn!
    verifyCode(code: String!, email: String!): VerifyCodeReturn!
    register(input: RegisterInput!): RegisterReturn!
    signS3Url(signS3UrlInput: SignS3UrlInput!): SignS3UrlReturn!
    registerDevice(input: RegisterDeviceInput!): RegisterDeviceReturn!
    loginUser(email: String!, password: String!): LoginReturn!
    sendMatchResponse(
      recipent: ID!
      swipedRight: Boolean
    ): SendMatchResponseReturn!
  }

  input RegisterInput {
    email: String
    hash: String
    name: String
    birthday: String
    genders: [Gender]
    connectsWith: [Gender]
    photo: String
  }

  input RegisterDeviceInput {
    type: DeviceType!
    deviceId: String!
  }

  type RegisterDeviceReturn {
    updatedUser: User
    error: Error
  }

  type VerifyEmailReturn {
    success: Boolean
    error: Error
  }

  type VerifyCodeReturn {
    success: Boolean
    error: Error
  }

  type RegisterReturn {
    user: User
    error: Error
  }

  type LoginReturn {
    user: User
    token: String
    error: Error
  }

  type SendMatchResponseReturn {
    success: Boolean
    error: Error
  }

  type Error {
    message: String
  }

  type User {
    id: ID!
    email: String!
    name: String!
    birthday: String!
    gender: [Gender!]
    photos: [Photo!]
    height: Int
    age: Int
    distance(coordinates: CoordinateInput!): Float
    ethnicity: [Ethnicity!]
    languages: [Language!]
    bodyType: BodyType
    interests: [Interest!]
    professions: [Profession!]
    educations: [Education!]
    conversations(
      filter: ConversationFilterInput!
      offset: Int
      limit: Int
    ): ConversationConnection!
    connections(offset: Int, limit: Int): UserConnection!
    isConnected: Boolean
    matchmakers(offset: Int, limit: Int): UserConnection!
    admirers(offset: Int, limit: Int): UserConnection!
    connectsWith: [Gender!]
    likes: UserConnection!
  }

  input SignS3UrlInput {
    fileName: String!
    contentType: String!
  }

  type SignS3UrlReturn {
    url: String
    error: Error
  }

  input CoordinateInput {
    lat: Float!
    long: Float!
  }

  input ConversationFilterInput {
    substring: String
    type: ChatType
  }

  input DiscoveryFilterInput {
    distance: Int
    ageRange: AgeRange
    height: HeightRange
    genders: [Gender!]
    bodyTypes: [BodyType!]
    ethnicities: [Ethnicity!]
    educations: [Degree!]
    languages: [Language!]
    professions: [Profession!]
  }

  type PageInfo {
    offset: Int!
    limit: Int!
  }

  type UserConnection {
    nodes: [User!]
    totalCount: Int!
    pageInfo: PageInfo!
  }

  type ConversationConnection {
    nodes: [Conversation!]
    totalCount: Int!
    pageInfo: PageInfo!
  }

  type MessageConnection {
    nodes: [Message!]!
    totalCount: Int!
    pageInfo: PageInfo!
  }

  type Photo {
    id: ID!
    imageUrl: String!
    rank: Int!
  }

  type Conversation {
    id: ID!
    users: [User!]
    messages: MessageConnection!
    type: ChatType
  }

  type Message {
    id: ID!
    sender: User!
    content: String!
    conversation: Conversation!
    createdAt: String!
    isRead: Boolean!
    status: MessageStatus
  }

  input AgeRange {
    minimum: Int
    maximum: Int
  }

  input HeightRange {
    minimum: Int
    maximum: Int
  }

  type Education {
    class: String
    degree: Degree
    school: String
  }

  enum DeviceType {
    IOS
    ANDROID
  }

  enum MessageStatus {
    DELIVERED
    FAILED
    SENDING
  }

  enum Gender {
    WOMAN
    MAN
    AGENDER
    TRANSWOMAN
    TRANSMAN
    NONBINARY
    GENDERQUEER
    GENDERFLUID
    TRANSFEMININE
    TRANSMASCULINE
  }

  enum Ethnicity {
    CAUCASIAN
    BLACK
    HISPANIC
    EASTASIAN
    SOUTHASIAN
    AMERICANINDIAN
    PACIFICISLANDER
  }

  enum Language {
    ENGLISH
    SPANISH
    CHINESE
  }

  enum BodyType {
    SLENDER
    ATHLETIC
    AVERAGE
    FULLFIGURED
  }

  enum Interest {
    BOATING
    SKIING
    COMPUTERS
    SPORTS
    GARDENING
  }

  enum Profession {
    DOCTOR
    LAWYER
    ENGINEER
    BANKER
  }

  enum ChatType {
    CONNECTION
    MATCHMAKER
    ADMIRERS
  }

  enum Degree {
    CURRENT
    BACHLORSART
    BACHLORSSCIENCE
    MASTERS
    DOCTORATE
    ASSOCIATES
  }
`
