let user;

user = `
    type user {
        id: String
        name: String
        email: String
    }

    type users {
        data: [user]
        error: String
    }

    type userDetail {
        data: user
        error: String
    }

    type createUser {
        data: user
        error: String
    }

    input userDataInputParams {
        name: String
    }
`

module.exports = () => [user];