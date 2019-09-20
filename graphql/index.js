const { makeExecutableSchema } = require('graphql-tools')

const wrapper = require('./resolvers');

const schemaGetAllUsers = require('./schema/type/User')

// Queries
const getAllUsers = wrapper.getAllUsers.getAllUsers;
const getUserByName = wrapper.getUserByName.getUserByName;

// Mutations
const createUser = wrapper.createUser.createUser;


const schemaDefinition = `
    type Query {
        #get userssss
        getAllUsers: users
        getUserByName(
            name: String!
        ): userDetail
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
            ): createUser
    }
`

const schema = makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        schemaGetAllUsers,
    ],
    resolvers: {
        Query: {
            getAllUsers,
            getUserByName,
        },
        Mutation: {
            createUser,
        }
    }
})

module.exports = schema;