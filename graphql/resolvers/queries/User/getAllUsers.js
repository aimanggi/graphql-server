const DB_Schema = require('../../../../db_schema/User_Schema');
const checkToken = require('../../../../helper/authorization');

const getAllUsers = async (root, arg, context) => {
    const check = await checkToken(context.req.headers.authorization);
    try {
        if (check.data) {
            let allUsers = await DB_Schema.find().exec()

            if (allUsers) {
                const result = await Promise.all(allUsers.map((data, i) => {
                    return {
                        id: data._id,
                        name: data.name,
                        email: data.email,
                    }
                }))
                if (result.length === allUsers.length) {
                    return {
                        data: allUsers,
                        error: null
                    }
                }

            }
        } else {
            throw {
                message: check.error,
            }
        }

    } catch (error) {
        console.log(error);
        return {
            data: null,
            error: error.message
        }

    }

}

module.exports = {
        getAllUsers
    }