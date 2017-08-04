var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: "Article Name is Required"
  },

  url: {
    type: String,
    unique: true,
    required: "Article URL is Required"
  }
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
