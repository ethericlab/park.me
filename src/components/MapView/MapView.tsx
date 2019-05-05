import React from 'react'
import Map from 'react-native-maps'
import { ParkingArea } from '../ParkingArea'
import { getParkingPolygons } from '../../services'
import parkingsLocation from '../../backend/parkings-location.json'

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

class MapView extends React.Component {
  render() {
    return (
      <Map
        loadingEnabled
        showsUserLocation
        style={{ flex: 1, alignSelf: 'stretch' }}
        initialRegion={{
          latitude: 50.09876159166,
          longitude: 14.34470728,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}>
        {mapPolygons}
      </Map>
    )
  }
}

export default MapView
