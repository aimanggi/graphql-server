const DB_Schema = require('../db_schema/User_Schema');
const jwt = require('jsonwebtoken');
const config = require('./jwtConfig');

const checkToken = (token) => {
    return new Promise((resolve, reject) => {
        try {
            if (token) {
                jwt.verify(token, config.secret, function (err, decoded) {
                    if (err) {
                        throw {
                            data: null,
                            error: 'Failed to authenticate.'
                        }
                    } else {
                        DB_Schema.findById(decoded.id,
                            { password: 0 }, // projection
                            function (err, user) {
                                if (user) {
                                    console.log('user', user)
                                    const result = {
                                        data: {
                                            id: user._id,
                                            name: user.name,
                                            email: user.email,
                                        },
                                        error: null
                                    }
                                    resolve(result)
                                } else {
                                    throw {
                                        data: null,
                                        error: 'User not found.'
                                    }
                                }
                            });
                    }

                });
            } else {
                throw {
                    data: null,
                    error: 'No token provided.'
                }
            }
        } catch (error) {
            console.log('error', error)
            reject(error)
        }
    })
}

module.exports = checkToken
