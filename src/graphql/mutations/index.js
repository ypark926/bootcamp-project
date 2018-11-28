const merge = require('lodash.merge')

const auth = require('./Auth')

const resolvers = [auth]

module.exports = merge(...resolvers)
