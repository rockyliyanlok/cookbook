import { css } from 'styled-components'
import { respondTo } from '../mixins'

export default css`
  /** box-sizing */
  .bs--border-box {
    box-sizing: border-box;
  }
  /** dimension */
  .width--100p {
    width: 100%;
  }
  .height--100p {
    height: 100%;
  }
  /** display */
  .d--flex {
    display: flex;
  }
  /** position */
  .pos--absolute {
    position: absolute;
  }
  .pos--relative {
    position: relative;
  }
  .left--0 {
    left: 0;
  }
  .top--0 {
    top: 0;
  }
  .right--0 {
    right: 0;
  }
  .bottom--0 {
    bottom: 0;
  }
  /** flex */
  .flex-x--center {
    justify-content: center;
  }
  .flex-x--left {
    justify-content: flex-start;
  }
  .flex-x--right {
    justify-content: flex-end;
  }
  .flex-x--space-between {
    justify-content: space-between;
  }
  .flex-y--center {
    align-items: center;
  }
  .flex-y--top {
    align-items: flex-start;
  }
  .flex-y--bottom {
    align-items: flex-end;
  }
  /** font */
  .fw--bold {
    font-weight: bold;
  }
  /** button */
  .button {
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: opacity 0.5s ease;
    ${respondTo.smAndDown`
      &:active {
        opacity: 0.7;
      }
    `}
    ${respondTo.mdAndUp`
      &:hover {
        opacity: 0.7;
      }
    `}
  }
`
