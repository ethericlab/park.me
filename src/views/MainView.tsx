import React from 'react'
import { MapView } from 'expo'

const MainView: React.FunctionComponent = () => {
  return (
    <MapView
      style={{ flex: 1, alignSelf: 'stretch' }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }}
    />
  )
}

export default MainView
