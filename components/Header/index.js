import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import _get from 'lodash/get'
import Link from 'next/link'
import packageJson from '../../package.json'
import React from 'react'
import SearchSvg from '../../public/svg/search.svg'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.silver05};
`

const MastheadWrapper = styled.div`
  height: 50px;
`

const Masthead = styled.a`
  color: ${({ theme }) => theme.colors.tundora};
  font-size: 22px;
  text-decoration: none !important;
`

const SearchIcon = styled.div`
  width: 22px;
  height: 22px;
  svg > path {
    fill: ${({ theme }) => theme.colors.tundora};
  }
`

const Header = () => {
  const router = useRouter()

  return (
    <Container className="width--100p bs--border-box">
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <div className="d--flex flex-x--space-between flex-y--center">
              <MastheadWrapper className="d--flex flex-y--center">
                <Link href="/">
                  <Masthead className="fw--bold button">
                    {packageJson.name.toUpperCase()}
                  </Masthead>
                </Link>
              </MastheadWrapper>
              {_get(router, 'pathname') !== '/search' &&
                <SearchIcon>
                  <Link href="/search">
                    <a>
                      <SearchSvg className="button"/>
                    </a>
                  </Link>
                </SearchIcon>
              }
            </div>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

export default Header
