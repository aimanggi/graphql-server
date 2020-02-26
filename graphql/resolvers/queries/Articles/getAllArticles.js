const DB_Schema = require('../../../../db_schema/Article_Schema');
const getAllArticles = async () => {
    try {
        let allArticles = await DB_Schema.find().exec()

        if(allArticles) {
            console.log('all Articles', allArticles)
            const result = await Promise.all(allArticles.map((data, i) => {
                return {
                    id: data._id,
                    title: data.title,
                    project: data.project,
                    image: data.image,
                    content: data.content,
                }
            }))
            if(result.length === allArticles.length) {
                return {
                    data: allArticles,
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
    getAllArticles
}