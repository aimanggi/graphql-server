const getAllUsers = require('./queries/getAllUsers');
const createUser = require('./mutation/CreateUser');
const getUserByName = require('./queries/getUserByName');

module.exports = {
    getAllUsers,
    createUser,
    getUserByName
};
