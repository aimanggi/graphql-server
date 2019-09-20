const DB_Schema = require('../../../../db_schema/User_Schema');
const argon2 = require('argon2');

const createUser = async (root, arg, context) => {
    try {
        console.log('arg', arg)
        const name = arg.name,
            email = arg.email,
         password = arg.password;

         const encryptPassword = await argon2.hash(password)
         const insertDataToSchema = new DB_Schema({
             name,
             email,
             password: encryptPassword,
         })

         const saveDataToDb = await insertDataToSchema.save()
         console.log(saveDataToDb);

        
        if (saveDataToDb) {
            const data = {
                id: saveDataToDb.id,
                name: saveDataToDb.name,
                email: saveDataToDb.email,
            }
            return {
                data: data,
                error:  null
            }
        } 
        
    } catch(error){
        console.log(error);
        return {
            data: null,
            error:  error.message
        }
        
    }
}

module.exports = {
    createUser
}