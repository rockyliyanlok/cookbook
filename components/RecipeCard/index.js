import PropTypes from 'prop-types'
import React from 'react'
import RecipeContent from './RecipeContent'
import RecipeImage from './RecipeImage'
import styled from 'styled-components'

const Container = styled.div`
  box-shadow: 0 1px 5px 1px ${({ theme }) => theme.colors.gallery};
`

const RecipeCard = ({
  recipe
}) => (
  <Container className="button">
    <RecipeImage alt={recipe.title} id={recipe.id} imageType={recipe.imageType} />
    <RecipeContent title={recipe.title} />
  </Container>
)

RecipeCard.propTypes = {
  recipe: PropTypes.object
}

export default RecipeCard
