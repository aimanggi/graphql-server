const { makeExecutableSchema } = require('graphql-tools')

const wrapper = require('./resolvers');

const schemaGetAllUsers = require('./schema/type/User')
const schemaDefinition = require('./schema/def')
const schemaTypeArticle = require('./schema/type/Article')

// Queries
const getAllUsers = wrapper.getAllUsers.getAllUsers;
const getUserByName = wrapper.getUserByName.getUserByName;
const getAllArticles = wrapper.getAllArticles.getAllArticles;

// Mutations
const createUser = wrapper.createUser.createUser;
const createArticle = wrapper.createArticle.createArticle;
const updateArticle = wrapper.updateArticle.updateArticle;

const schema = makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        schemaGetAllUsers,
        schemaTypeArticle,
    ],
    resolvers: {
        Query: {
            getAllUsers,
            getUserByName,
            getAllArticles,
        },
        Mutation: {
            createUser,
            createArticle,
            updateArticle,
        }
    }
})

module.exports = schema;