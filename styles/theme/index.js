import {
  baseFontSize,
  breakpoints,
  container,
  gridSize,
  gutterWidth,
  outerMargin
} from '../../config/flexgrid'

export default {
  colors: {
    bluewood: '#2d4558',
    white: '#ffffff'
  },
  flexboxgrid: {
    gridSize, // columns
    gutterWidth: gutterWidth / baseFontSize, // rem
    outerMargin: outerMargin / baseFontSize, // rem
    mediaQuery: 'only screen',
    container: {
      sm: container.sm / baseFontSize, // rem
      md: container.md / baseFontSize, // rem
      lg: container.lg / baseFontSize // rem
    },
    breakpoints: {
      xs: breakpoints.xs / baseFontSize, // em
      sm: breakpoints.sm / baseFontSize, // em
      md: breakpoints.md / baseFontSize, // em
      lg: breakpoints.lg / baseFontSize // em
    }
  },
 }
 