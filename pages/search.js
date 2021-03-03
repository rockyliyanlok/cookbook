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
import { useRouter } from 'next/router'

let axiosCancelTokenSource

const { publicRuntimeConfig: { SPOONACULAR_APIKEY, CACHED_SPOONACULAR_RECIPE_SEARCH_URI } } = getConfig()

const Heading = styled.div`
  font-size: 25px;
  margin: 21px 0;
  text-align: center;
`

const Search = ({
  urlQuery
}) => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState((!_isNil(urlQuery) && !_isEmpty(urlQuery)) ? urlQuery : '')

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
    
      setLoading(true)

      const response = await axios(CACHED_SPOONACULAR_RECIPE_SEARCH_URI, {
        cancelToken: axiosCancelTokenSource.token,
        params: {
          apiKey: SPOONACULAR_APIKEY,
          number: 12,
          query
        }
      })

      setRecipes(_get(response, 'data.results', []))
      setLoading(false)
    } catch (error) {
      if (!axios.isCancel(error)) {
        console.error(error)
      }
      setLoading(false)
    }
  }

  useEffect(() => {
    router.push(Object.assign({},
      { pathname: '/search' },
      (!_isNil(searchQuery) && !_isEmpty(searchQuery)) ? { query: { query: searchQuery } } : {}
    ), undefined , { shallow: true })
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
      <RecipeCards loading={loading} recipes={recipes} />
    </>
  )
}

Search.getInitialProps = async ctx => {
  const urlQuery = _get(ctx, 'query.query', {})
  return { urlQuery }
}

export default Search
