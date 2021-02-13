import _forEach from 'lodash/forEach'
import _get from 'lodash/get'
import _isNil from 'lodash/isNil'
import _pick from 'lodash/pick'
import axios from 'axios'
import cache from '../../../utils/middlewares/cache'
import getConfig from 'next/config'
import { StatusCodes } from 'http-status-codes'

const { publicRuntimeConfig: {
  SPOONACULAR_RECIPE_SEARCH_URI,
  CACHE_MAX_AGE_IN_S
} } = getConfig()

const recipesComplexSearchHandler = async (req, res) => {
  const cacheKey = encodeURIComponent(req.url)
  const cacheHeaderKeys = [
    'x-api-quota-request',
    'x-api-quota-used'
  ]

  if (!_isNil(req.cache) && req.cache.has(cacheKey)) {
    const { headers, data } = req.cache.get(cacheKey)
    res.setHeader('Cache-Control', `public,max-age=${CACHE_MAX_AGE_IN_S}`)
    res.setHeader('X-Cache', 'HIT')
    _forEach(cacheHeaderKeys, cacheHeaderKey => {
      res.setHeader(cacheHeaderKey, headers[cacheHeaderKey])
    })
    
    return res.json(data)
  }

  try {
    const { status, headers, data } = await axios(SPOONACULAR_RECIPE_SEARCH_URI, {
      params: req.query
    })

    if (status === StatusCodes.OK) {
      if (!_isNil(req.cache)) {
        req.cache.set(cacheKey, {
          headers: _pick(headers, cacheHeaderKeys),
          data
        })
      }
      res.setHeader('Cache-Control', 'no-cache')
      res.setHeader('X-Cache', 'MISS')
      _forEach(cacheHeaderKeys, cacheHeaderKey => {
        res.setHeader(cacheHeaderKey, headers[cacheHeaderKey])
      })
      return res.json(data)
    } else {
      return res.status(status).json(data)
    }
  } catch (error) {
    const { status, data } = _get(error, 'response', {})

    return res.status(status).json(data)
  }

}

export default cache(recipesComplexSearchHandler)
 