const DB_Schema = require('../../../../db_schema/User_Schema');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const config = require('../../../../helper/jwtConfig');

const createUser = async (root, arg, context) => {
    try {
        console.log('arg', arg)
        const name = arg.name,
            email = arg.email,
            password = arg.password;

        const encryptPassword = await argon2.hash(password)
        const token = jwt.sign({ id: arg.id }, config.secret, {
            expiresIn: '30d'
        });
        const insertDataToSchema = new DB_Schema({
            name,
            email,
            password: encryptPassword,
            token,
        })

        console.log('insert', insertDataToSchema);

        const saveDataToDb = await insertDataToSchema.save()
        console.log('saved', saveDataToDb);

        if (saveDataToDb) {
            const data = {
                id: saveDataToDb.id,
                name: saveDataToDb.name,
                email: saveDataToDb.email,
            }
            return {
                data: data,
                error: null
            }
        }

    } catch (error) {
        console.log(error.code);
        if (error.code === 11000) {
            return {
                data: null,
                error: 'Email already exist',
            }
        }
        return {
            data: null,
            error: error.message
        }
    }
}

module.exports = {
    createUser
}