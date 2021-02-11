import { ellipsis } from '../../styles/mixins'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 12px 12px 20px 12px;
  margin-bottom: 20px;
`

const Title = styled.div`
  ${ellipsis(2)}
  height: 42px;
  color: ${({ theme }) => theme.colors.tundora};
  font-size: 15px;
  line-height: 21px;
`

const RecipeContent = ({
  title
}) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

RecipeContent.propTypes = {
  title: PropTypes.string
}

export default RecipeContent
