const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
    title: String,
    ingredients: String,
});


const Recipe = mongoose.model('Recipe', RecipeSchema);


module.exports = Recipe;
