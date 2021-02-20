import {
  Grid,
  Row,
  Col
} from 'react-styled-flexboxgrid'
import PropTypes from 'prop-types'
import React from 'react'
import SearchSvg from '../../public/svg/search.svg'
import styled from 'styled-components'

const Input = styled.input`
  height: 45px;
  border: solid 1px ${({ theme }) => theme.colors.gallery};
  border-radius: 1px;
  padding: 13px 106px 13px 16px;
  font-size: 16px;
  -webkit-appearance: none;
  outline: none;
  cursor: text;
  ::placeholder {
    color: ${({ theme }) => theme.colors.silver};
    font-size: 14px;
    font-style: italic;
  }
`

const Icon = styled.div`
  width: 21px;
  height: 21px;
  padding: 12px;
  top: 0;
  right: 0;
  svg > path {
    fill: ${({ theme }) => theme.colors.silver};
  }
`

const SearchBar = ({
  query,
  onChange
}) => (
  <Grid>
    <Row>
      <Col xs={12} sm={12} md={8} lg={6} mdOffset={2} lgOffset={3}>
        <div className="pos--relative width--100p">
          <Input className="pos--relative width--100p bs--border-box"
            onChange={onChange}
            placeholder={'Search recipes'}
            value={query} />
          <Icon className="pos--absolute">
            <SearchSvg />
          </Icon>
        </div>
      </Col>
    </Row>
  </Grid>
)

SearchBar.defaultProps = {
  query: '',
  onChange: () => {}
}

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func
}

export default SearchBar
