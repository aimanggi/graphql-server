let auth;

auth = `
    type loginData {
        status: String
        token: String
    }

    type login {
        data: loginData,
        error: String 
    }

`
module.exports = () => [auth];