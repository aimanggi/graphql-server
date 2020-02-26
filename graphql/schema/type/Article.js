let user;

user = `
    type content {
        id: String
        section: String
        content: String
    }

    type articlesData {
        id: String
        title: String
        project: String
        image: String
        content: [content]
    }

    type articles {
        data: [articlesData]
        error: String
    }

    type articleDetail {
        data: articlesData
        error: String
    }

    type articleRespond {
        data: articlesData
        error: String
    }

    input articleInput {
        id: String
    }

    input contentInput {
        section: String!
        content: String!
    }

`

module.exports = () => [user];