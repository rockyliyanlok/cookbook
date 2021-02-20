import React from 'react'
import styled from 'styled-components'

const LoadingImg = styled.img`
  width: 32px;
  height: 8px;
`

const Loading = () => (
  <div className="width--100p d--flex flex-x--center flex-y--center">
    <LoadingImg src="/gif/loading.gif" alt="Loading" />
  </div>
)

export default Loading
