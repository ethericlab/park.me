import React from 'react'
import { GestureResponderEvent, Image, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'

import styled from 'styled-components/native'

const Container = styled.View<{ active?: boolean }>`
  background-color: ${({ active }) => (active ? '#546DFF' : 'rgba(0, 0, 0, 0.25)')};
  border-radius: 8px;
  height: 55px;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  flex-direction: row;
  width: 100%;
`

const Label = styled.Text`
  margin-left: 10px;
  font-family: galano-grotesque-alt-bold;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`

export type SelectProps = {
  onPress?: (event: GestureResponderEvent) => void
  text?: string
  active?: boolean
  style?: StyleProp<ViewStyle>
}

const DateTimeValue: React.FunctionComponent<SelectProps> = ({ onPress, text, active, style }) => (
  <TouchableOpacity onPress={onPress} style={[{ width: '100%' }, style]}>
    <Container active={active}>
      <Image source={require('../icons/ic_calendar.png')} />
      <Label>{text}</Label>
    </Container>
  </TouchableOpacity>
)

export default DateTimeValue
