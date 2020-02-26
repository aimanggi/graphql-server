const DB_Schema = require('../../../../db_schema/Article_Schema');
const argon2 = require('argon2');

const createArticle = async (root, arg, context) => {
    try {
        console.log('arg', arg)
        const title = arg.title,
            project = arg.project,
         image = arg.image,
         content = arg.content;

         const insertDataToSchema = new DB_Schema({
             title,
             project,
             image,
             content,
         })

         const saveDataToDb = await insertDataToSchema.save()
         console.log('save to DB', saveDataToDb);

        
        if (saveDataToDb) {
            const data = {
                id: saveDataToDb.id,
                title: saveDataToDb.title,
                project: saveDataToDb.project,
                image: saveDataToDb.image,
                content: saveDataToDb.content,
            }
            return {
                data: data,
                error:  null
            }
        } else {
            return {
                data: null,
                error: "Internal Server Error"
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
    createArticle
}