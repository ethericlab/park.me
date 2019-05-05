import React from 'react'
import MapView from 'react-native-maps'
import { ParkingArea } from '../ParkingArea'
import { getParkingPolygons } from '../../services'
import parkingsLocation from '../../backend/parkings-location.json'
import { ImageBackground } from 'react-native'
import SearchBar from '../../views/SearchBar'

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

class MainView extends React.Component {
  render() {
    return (
      <>
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
        <ImageBackground
          source={require('../../icons/search_gradient.png')}
          style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 160 }}
        />
        <SearchBar />
      </>
    )
  }
}

export default MainView
