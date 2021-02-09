/**
 * app config
 */

module.exports = {
  SPOONACULAR_APIKEY: process.env.SPOONACULAR_APIKEY || '',
  SPOONACULAR_RECIPE_SEARCH_URI: process.env.SPOONACULAR_RECIPE_SEARCH_URI || 'https://api.spoonacular.com/recipes/complexSearch',
  CACHE_MAX_SIZE: process.env.CACHE_MAX_SIZE || 50,
  CACHE_MAX_AGE_IN_S: process.env.CACHE_MAX_AGE_IN_S || 60 * 60
}
