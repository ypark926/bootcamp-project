const User = require('../../../models/User')

const userResolver = async (obj, args, context) => {
  // TODO: Write a resolver which returns a user given a user id.
  const user = await User.query().findById(args.id)
  return user
}

const usersResolver = async (obj, args, context) => {
  const { substr, hometown, house, concentration, hobbies } = args

  const users = await User.query()
  return users
  /* TODO: Write a resolver which returns a list of all users.
  Once you're done, implement the following pieces of functionality one by one:
  If any of the following arguments are provided, apply the corresponding filter:
    - substr: include only users whose name contains the substring
    - hometown: include only users from that hometown
    - house: include only users from that house
    - concentration: include only users who have that concentration
    - hobbies: include only users who have indicated one of the hobbies in that list
  */
}

const userPostResolver = async (obj, args, context) => {
  const user = await User.query().findById(obj.id)
  const posts = await user.$relatedQuery('posts').orderBy('createdAt', 'desc')

  return posts
}

const userHobbiesResolver = async (obj, args, context) => {
  const user = await User.query().findById(obj.id)
  const hobbies = await user.$relatedQuery('hobbies')
  return hobbies
}

const resolver = {
  Query: {
    user: userResolver,
    users: usersResolver,
  },
  User: {
    posts: userPostResolver,
    hobbies: userHobbiesResolver
  }
}

module.exports = resolver
