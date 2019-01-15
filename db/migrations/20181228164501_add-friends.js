exports.up = function(knex, Promise) {
  return knex.schema.createTable('follows', table => {
    table
      .uuid('id')
      .primary()
      .notNull()
    table.uuid('followerId').references('users.id')
    table.uuid('followingId').references('users.id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('follows')
}
