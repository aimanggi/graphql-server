const getAllUsers = require('./queries/getAllUsers');
const createUser = require('./mutation/CreateUser');
const getUserByName = require('./queries/getUserByName');
const createArticle = require('./mutation/Article/CreateArticle');
const updateArticle = require('./mutation/Article/UpdateArticle');
const getAllArticles = require('./queries/Articles/getAllArticles');

module.exports = {
    getAllUsers,
    createUser,
    getUserByName,
    createArticle,
    updateArticle,
    getAllArticles
};
