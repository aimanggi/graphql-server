const createUser = require('./mutation/CreateUser');
const getAllUsers = require('./queries/User/getAllUsers');
const getUser = require('./queries/User/getUser');
const login = require('./mutation/Authentication/Login');
const createArticle = require('./mutation/Article/CreateArticle');
const updateArticle = require('./mutation/Article/UpdateArticle');
const getAllArticles = require('./queries/Articles/getAllArticles');

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    createArticle,
    updateArticle,
    getAllArticles,
    login
};
