import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  height: 55px;
  left: 20px;
  right: 20px;
  position: absolute;
  top: 50px;
  border-radius: 6px;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
`

const StyledImage = styled.Image`
  width: 22px;
  height: 22px;
`

const StyledInput = styled.TextInput`
  margin-left: 10px;
  flex: 1;
  font-family: galano-grotesque-alt-bold;
  font-size: 15px;
  line-height: 22px;
`

const SearchBar: React.FunctionComponent = () => (
  <Container>
    <StyledImage source={require('../../../icons/ic_search.png')} />
    <StyledInput />
    <StyledImage source={require('../../../icons/ic_gps.png')} />
  </Container>
)

export default SearchBar
