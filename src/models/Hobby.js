const BaseModel = require('./BaseModel')
const User = require('./User')
const { BelongsToOneRelation } = require('objection')

class Post extends BaseModel {
  static get tableName() {
    return 'hobbies'
  }

  static get relationMappings() {
    return {
      posts: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'hobbies.userId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Post
