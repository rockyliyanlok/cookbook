import React, { useCallback, useEffect, useState } from 'react'
import _get from 'lodash/get'
import _isEmpty from 'lodash/isEmpty'
import _isNil from 'lodash/isNil'
import axios from 'axios'
import getConfig from 'next/config'
import RecipeCards from '../components/RecipeCards'
import SearchBar from '../components/SearchBar'
import styled from 'styled-components'
import useDebounce from '../hooks/useDebouce'

let axiosCancelTokenSource

const { publicRuntimeConfig: { SPOONACULAR_APIKEY, CACHED_SPOONACULAR_RECIPE_SEARCH_URI } } = getConfig()

const Heading = styled.div`
  font-size: 25px;
  margin: 21px 0;
  text-align: center;
`

const Search = () => {
  const [loading, setLoading] = useState(0)
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')

  const searchQuery = useDebounce(query, 500)

  const onChange = useCallback(({ target: { value } }) => {
    setQuery(value)
  }, [])

  const searchRecipes = async query => {
    try {
      if (!_isNil(axiosCancelTokenSource)) {
        axiosCancelTokenSource.cancel('Operation canceled due to new request.')
      }

      if (_isEmpty(query)) {
        setRecipes([])
        return
      }

      axiosCancelTokenSource = axios.CancelToken.source()
    
      setLoading(count => (count + 1))

      const response = await axios(CACHED_SPOONACULAR_RECIPE_SEARCH_URI, {
        cancelToken: axiosCancelTokenSource.token,
        params: {
          apiKey: SPOONACULAR_APIKEY,
          number: 12,
          query
        }
      })

      setRecipes(_get(response, 'data.results', []))
      setLoading(count => (count - 1))
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error)
      }
      setLoading(count => (count - 1))
    }
  }

  useEffect(() => {
    searchRecipes(searchQuery)

    return () => {
      if (!_isNil(axiosCancelTokenSource)) {
        axiosCancelTokenSource.cancel('Operation canceled due to component unmounted.')
      }
    }
  }, [searchQuery])

  return (
    <>
      <Heading className="width--100p">
        Search Recipes
      </Heading>
      <SearchBar query={query} onChange={onChange} />
      <RecipeCards loading={loading !== 0} recipes={recipes} />
    </>
  )
}

export default Search
