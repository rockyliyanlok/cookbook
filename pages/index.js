import _get from 'lodash/get'
import axios from 'axios'
import getConfig from 'next/config'
import React, { useEffect, useState } from 'react'
import RecipeCards from '../components/RecipeCards'

const { publicRuntimeConfig: { SPOONACULAR_APIKEY, CACHED_SPOONACULAR_RECIPE_SEARCH_URI } } = getConfig()

const Index = () => {
  const [loading, setLoading] = useState(0)
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    setLoading(count => (count + 1))

    const response = await axios(CACHED_SPOONACULAR_RECIPE_SEARCH_URI, {
      params: {
        apiKey: SPOONACULAR_APIKEY,
        number: 24
      }
    })

    setRecipes(_get(response, 'data.results', []))
    setLoading(count => (count - 1))
  }

  useEffect(() => {
    fetchRecipes()

    return () => {}
  }, [])

  return (
    <RecipeCards loading={loading !== 0} recipes={recipes} />
  )
}

export default Index
