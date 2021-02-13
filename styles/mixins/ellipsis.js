import { css } from 'styled-components'

const ellipsis = line => {
  return css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: ${line};
    -webkit-box-orient: vertical;
  `
}

export default ellipsis
