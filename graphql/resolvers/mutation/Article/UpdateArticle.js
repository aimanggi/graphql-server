const DB_Schema = require('../../../../db_schema/Article_Schema');
const argon2 = require('argon2');

const updateArticle = async (root, arg, context) => {
    try {
        console.log('arg', arg)
        const title = arg.title,
            project = arg.project,
         image = arg.image,
         content = arg.content;

         const updateData = await DB_Schema.findOne({ _id: arg.id }, function (err, doc){
             console.log('doc', doc)
             console.log('err', err)
            doc.title = title;
            doc.project = project;
            doc.image = image;
            doc.content = content;
 
            doc.save();
          }).exec();

          console.log('save to DB', updateData);
        
        if (updateData) {
            console.log('save to DB', updateData);
            const data = {
                id: updateData.id,
                title: updateData.title,
                project: updateData.project,
                image: updateData.image,
                content: updateData.content,
            }
            return {
                data: data,
                error:  null
            }
        } else {
            return {
                data: null,
                error: "Article not found"
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
    updateArticle
}