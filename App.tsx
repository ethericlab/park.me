import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MapView, { Polygon } from 'react-native-maps'
import { MapEvent, LatLng } from 'expo'
import { ParkingArea } from './src/components/ParkingArea'
import { ParkingType } from './src/constants'
import { getParkingPolygons } from './src/services'
import parkingsLocation from './src/backend/parkings-location.json'

// Ids of parking to rerender
const visibleParkings = Object.keys(parkingsLocation)
const mapPolygons = getParkingPolygons(visibleParkings).map(parking => (
  <ParkingArea
    key={parking.id}
    id={parking.id}
    coordinates={parking.coordinates}
    parkingType={parking.parkingType}
    numOfPlaces={parking.numOfPlaces}
    onTap={() => {}}
  />
))
const MS = 1000
const fetchInterval = 10 * MS

export default class App extends React.Component {
  intervalId: number = 0

  componentDidMount() {
    this.intervalId = setInterval(() => {}, fetchInterval)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          loadingEnabled
          showsUserLocation
          style={{ flex: 1, alignSelf: 'stretch' }}
          initialRegion={{
            latitude: 50.09876159166,
            longitude: 14.34470728,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {mapPolygons}
        </MapView>
      </View>
    )
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
