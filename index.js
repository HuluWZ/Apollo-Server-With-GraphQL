const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs');

require('dotenv').config()

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
