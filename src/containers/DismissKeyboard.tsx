import React from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'

const DismissKeyboard: React.FunctionComponent = ({ children }) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>{children}</TouchableWithoutFeedback>
)

export default DismissKeyboard
