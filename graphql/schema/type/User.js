let user;

user = `
    type user {
        id: String
        name: String
        email: String
    }

    type userToken {
        id: String
        name: String
        email: String
        token: String
    }

    type users {
        data: [user]
        error: String
    }

    type userDetail {
        data: user
        error: String
    }

    type currentUser {
        data: userToken
        error: String
    }

    type createUser {
        data: user
        error: String
    }

    input userDataInputParams {
        id: String
    }
`

module.exports = () => [user];