import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import _get from 'lodash/get'
import axios from 'axios'
import getConfig from 'next/config'
import React from 'react'

const { publicRuntimeConfig: { SPOONACULAR_APIKEY, SPOONACULAR_RECIPE_SEARCH_URI } } = getConfig()

const Index = ({ recipes }) => {
  return (
    <>
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ul>
              {recipes.map(recipe => (<li key={recipe.id}>{recipe.title}</li>))}
            </ul>
          </Col>
        </Row>
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const response = await axios(SPOONACULAR_RECIPE_SEARCH_URI, {
    params: {
      apiKey: SPOONACULAR_APIKEY
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
