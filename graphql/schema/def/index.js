const def = `
    type Query {
        #get users
        getAllUsers: users

        getUser(
            id: String!
        ): userDetail
        #get article
        getAllArticles: articles
 
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
            ): createUser

        login(
            email: String!
            password: String!
        ): login
 
        createArticle(
            title: String!
            project: String!
            image: String!
            content: [contentInput]
            ): articleRespond    
            
        updateArticle(
            id: String!
            title: String!
            project: String!
            image: String!
            content: [contentInput]
            ): articleRespond    
    }
`

module.exports = () => [def];