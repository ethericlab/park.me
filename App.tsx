import React from 'react'
import { StyleSheet } from 'react-native'
import MainPage from './src/pages/Main/MainPage'
import {Font} from "expo";

type State = {
  initialized: boolean
}

export default class App extends React.Component<{}, State> {
  state = {
    initialized: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'galano-grotesque-alt-bold': require('./assets/fonts/GalanoGrotesqueAltDEMO-Bold.ttf'),
    });
    this.setState({ initialized: true })
  }

  render() {
    const { initialized } = this.state
    return initialized ? <MainPage /> : null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
