const { makeExecutableSchema } = require('graphql-tools');

const schema = makeExecutableSchema({
  typeDefs: `
    type Post {
      id: Int!
      title: String
    }

    type User {
        id: Int
        name: String!
        lastname: String
        email: String!
    }

    type Query {
        posts: [Post]
        users: [User]!
    }
  `,
  resolvers: {
    Query: {
      posts: () => [{
        id: 1,
        title: 'Mi titulo',
      }],
      users: () => [{
        id: 1,
        name: 'Max',
        lastname: 'Decimo',
        email: 'maximodecimo@mail.com',
      },
      {
        name: 'John',
        lastname: 'Doe',
        email: 'maximodecimo@mail.com',
      }],
    },
  },
});

module.exports = schema;
