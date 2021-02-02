/**
 * app config
 */

module.exports = {
  SPOONACULAR_APIKEY: process.env.SPOONACULAR_APIKEY || '',
  SPOONACULAR_RECIPE_SEARCH_URI: process.env.SPOONACULAR_RECIPE_SEARCH_URI || 'https://api.spoonacular.com/recipes/complexSearch'
}
