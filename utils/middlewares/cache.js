import getConfig from 'next/config'
import LRU from 'lru-cache'

const { publicRuntimeConfig: {
  CACHE_MAX_SIZE,
  CACHE_MAX_AGE_IN_S
} } = getConfig()

const context = {
  cache: new LRU({
    max: CACHE_MAX_SIZE,
    maxAge: CACHE_MAX_AGE_IN_S * 1000
  })
}

const cache = handler => (req, res) => {
  req.cache = context.cache

  return handler(req, res)
}

export default cache
