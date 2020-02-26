const DB_Schema = require('../../../../db_schema/User_Schema');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const config = require('../../../../helper/jwtConfig');

const Login = async (root, arg, context) => {
    try {
        let oneUser = await DB_Schema.findOne({email: arg.email}).exec()
        console.log('user login', oneUser)
        if(oneUser){
            const token = jwt.sign({ id: oneUser._id }, config.secret, {
                expiresIn: '30d'
              });
             const verify = await argon2.verify(oneUser.password, arg.password); 
            if(verify) {
                return {
                    data: {
                        status: "admin",
                        token,
                    },
                    error:  null
                } 
            } else {
                return {
                    data: null,
                    error: "Password doesn't match",
                }
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
    Login
}