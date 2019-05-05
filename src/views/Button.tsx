import React from 'react'
import { GestureResponderEvent, StyleProp, TouchableOpacity, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View<{ active?: boolean; disabled?: boolean }>`
  background-color: #ff9364;
  opacity: ${({ disabled }) => (disabled ? '0.3' : '1')};
  border-radius: 6px;
  height: 55px;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Label = styled.Text`
  font-family: Galano Grotesque Alt DEMO;
  font-size: 18px;
  line-height: 22px;
  color: #fff;
`

export type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void
  text: string
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

const Button: React.FunctionComponent<ButtonProps> = ({ onPress, text, style, disabled }) => (
  <TouchableOpacity onPress={onPress} style={[{ width: '100%' }, style]} disabled={disabled}>
    <Container disabled={disabled}>
      <Label>{text}</Label>
    </Container>
  </TouchableOpacity>
)

export default Button
