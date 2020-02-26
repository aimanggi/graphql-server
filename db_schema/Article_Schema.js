const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ContentSchema = new Schema({
    section: String,
    content: String,
})

const ArticleSchema = new Schema({
    title: String,
    project: String,
    image: String,
    content: [ContentSchema],
},
{
    timestamps: true
})


const articleModel = mongoose.model('Article', ArticleSchema);

module.exports = articleModel;