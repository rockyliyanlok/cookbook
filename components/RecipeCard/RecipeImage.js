import { aspectRatio } from '../../styles/mixins'
import getConfig from 'next/config'
import Image from 'next/image'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const { publicRuntimeConfig: { SPOONACULAR_RECIPE_IMAGE_PREFIX } } = getConfig()

const imageWidth = 636
const imageHeight = 393

const Container = styled.div`
  ${aspectRatio(imageWidth, imageHeight)}
`

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
`

const RecipeImage = ({
  alt,
  id,
  imageType
}) => (
  <Container>
    <Wrapper>
      <Image 
        src={`${SPOONACULAR_RECIPE_IMAGE_PREFIX}${id}-${imageWidth}x${imageHeight}.${imageType}`}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
      />
    </Wrapper>
  </Container>
)

RecipeImage.propTypes = {
  alt: PropTypes.string,
  id: PropTypes.number,
  imageType: PropTypes.string
}

export default RecipeImage
