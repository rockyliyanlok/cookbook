import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import Loading from '../Loading'
import PropTypes from 'prop-types'
import React from 'react'
import RecipeCard from '../RecipeCard'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 22px;
`

const RecipeCards = ({
  loading,
  recipes
}) => (
  <Container>
    <Grid>
      <Row>
        {loading ? (
          <Loading />
        ) : (
          recipes.map(recipe => (
            <Col key={recipe.id} xs={6} sm={6} md={4} lg={3}>
              <RecipeCard recipe={recipe} />
            </Col>
          ))
        )}
      </Row>
    </Grid>
  </Container>
)

RecipeCards.propTypes = {
  loading: PropTypes.bool,
  recipes: PropTypes.array
}

export default RecipeCards
