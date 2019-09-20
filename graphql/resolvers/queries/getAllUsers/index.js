const DB_Schema = require('../../../../db_schema/User_Schema');
const getAllUsers = async () => {
    try {
        let allUsers = await DB_Schema.find().exec()

        if(allUsers) {
            const result = await Promise.all(allUsers.map((data, i) => {
                return {
                    id: data._id,
                    name: data.name,
                    email: data.email,
                }
            }))
            if(result.length === allUsers.length) {
                return {
                    data: allUsers,
                    error:  null
                }
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
    getAllUsers
}