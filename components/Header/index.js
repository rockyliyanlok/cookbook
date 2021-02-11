import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import Link from 'next/link'
import packageJson from '../../package.json'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver05};
`

const MastheadWrapper = styled.div`
  height: 50px;
`

const Masthead = styled.a`
  color: ${({ theme }) => theme.colors.tundora};
  font-size: 22px;
`

const Header = () => (
  <Container className="width--100p bs--border-box">
    <Grid>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <MastheadWrapper className="d--flex flex-x--left flex-y--center">
            <Link href="/">
              <Masthead className="fw--bold button">
                {packageJson.name.toUpperCase()}
              </Masthead>
            </Link>
          </MastheadWrapper>
        </Col>
      </Row>
    </Grid>
  </Container>
)

export default Header
