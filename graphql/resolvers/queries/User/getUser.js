const DB_Schema = require('../../../../db_schema/User_Schema');

const getUser = async (root, arg, context) => {
    try {
     
        let oneUser = await DB_Schema.findOne({_id: arg.id}).exec()
        console.log('user', oneUser)
        if(oneUser){
                return {
                    data: {
                        id: oneUser._id,
                        name: oneUser.name,
                        email: oneUser.email,
                    },
                    error:  null
                }  
        } else {
            return {
                data: null,
                error: "User not found"
            }
        }

    } catch(err) {
        console.log(err);
        return {
            data: null,
            error: err.message
            
        }
    }
}

module.exports = {
    getUser
}