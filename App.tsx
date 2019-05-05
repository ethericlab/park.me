import React from 'react'
import { StyleSheet } from 'react-native'
import { Font } from 'expo'
import TabBarController from './src/components/TabBarController/TabBarController'
import { BookingContainerProvider } from './src/containers/BookingContainer'

type State = {
  initialized: boolean
}

export default class App extends React.Component<{}, State> {
  state = {
    initialized: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Galano Grotesque Alt DEMO': require('./assets/fonts/GalanoGrotesqueAltDEMO-Bold.ttf'),
      'Galano Grotesque DEMO': require('./assets/fonts/GalanoGrotesqueDEMO-Bold.ttf')
    })
    this.setState({ initialized: true })
  }

  render() {
    const { initialized } = this.state
    return initialized ? (
      <BookingContainerProvider>
        <TabBarController />
      </BookingContainerProvider>
    ) : null
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
