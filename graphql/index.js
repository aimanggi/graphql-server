const { makeExecutableSchema } = require('graphql-tools')

const wrapper = require('./resolvers');

const schemaGetAllUsers = require('./schema/type/User')
const schemaDefinition = require('./schema/def')
const schemaTypeArticle = require('./schema/type/Article')
const schemaTypeAuth = require('./schema/type/Authentication')

// Queries
const getAllUsers = wrapper.getAllUsers.getAllUsers;
const getUser = wrapper.getUser.getUser;
const getAllArticles = wrapper.getAllArticles.getAllArticles;

// Mutations
const createUser = wrapper.createUser.createUser;
const login = wrapper.login.Login;
const createArticle = wrapper.createArticle.createArticle;
const updateArticle = wrapper.updateArticle.updateArticle;

const schema = makeExecutableSchema({
    typeDefs: [
        schemaDefinition,
        schemaGetAllUsers,
        schemaTypeAuth,
        schemaTypeArticle,
    ],
    resolvers: {
        Query: {
            getAllUsers,
            getUser,
            getAllArticles,
        },
        Mutation: {
            createUser,
            createArticle,
            updateArticle,
            login,
        }
    }
})

module.exports = schema;