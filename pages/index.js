import _get from 'lodash/get'
import axios from 'axios'
import getConfig from 'next/config'
import React from 'react'
import RecipeCards from '../components/RecipeCards'

const { publicRuntimeConfig: { SPOONACULAR_APIKEY, CACHED_SPOONACULAR_RECIPE_SEARCH_URI } } = getConfig()

const Index = ({
  recipes
}) => (
  <RecipeCards recipes={recipes} />
)

export async function getStaticProps() {
  const response = await axios(CACHED_SPOONACULAR_RECIPE_SEARCH_URI, {
    params: {
      apiKey: SPOONACULAR_APIKEY,
      number: 24
    }
  })
  const recipes = _get(response, 'data.results', [])

  return {
    props: {
      recipes
    }
  }
}

export default Index
