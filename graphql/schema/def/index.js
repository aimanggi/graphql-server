const def = `
    type Query {
        #get users
        getAllUsers: users

        getUserByName(
            name: String!
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