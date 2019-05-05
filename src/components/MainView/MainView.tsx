import React from 'react'
// import Map from 'react-native-maps'
import MapView from 'react-native-map-clustering'
import { Marker, Polygon } from 'react-native-maps'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import { LatLng, MapEvent } from 'expo'
import { getCenter } from 'geolib'
import { getParkingPolygons } from '../../services'
import parkingsLocation from '../../backend/parkings-location.json'
import { ParkingType } from '../../constants'
import SearchBar from "../../views/SearchBar";
import {InjectedBookingProps, withBooking} from "../../containers/BookingContainer";
import {PrivateParking} from "../../types/common";

// Ids of parking to rerender
const visibleParkings = Object.keys(parkingsLocation)
const { MIXED, RESIDENTS, PARK_AND_RIDE, VISITORS, PEER_TO_PEER } = ParkingType
const BORDER_COLOR_MAP = {
  [MIXED]: '#CD00A0',
  [RESIDENTS]: '#0349E8',
  [VISITORS]: '#FF9364',
  [PARK_AND_RIDE]: '#00BF41',
  [PEER_TO_PEER]: '#8F00FF'
}
const FILL_COLOR_MAP = {
  [MIXED]: 'rgba(205, 0, 160, 0.3)',
  [RESIDENTS]: 'rgba(0, 78, 255, 0.3)',
  [PARK_AND_RIDE]: 'rgba(0, 191, 65, 0.3)',
  [VISITORS]: 'rgba(255, 147, 100, 0.3)',
  [PEER_TO_PEER]: 'rgba(143, 0, 255, 0.3'
}
const ICON_MAP = {
  [MIXED]: require('../../icons/ic_pin_mixed.png'),
  [RESIDENTS]: require('../../icons/ic_pin_resident.png')
}
const markerStyles = StyleSheet.create({
  marker: {
    height: 51.5,
    width: 37.3
  }
})
const markerTextStyles = StyleSheet.create({
  [RESIDENTS]: {
    position: 'absolute',
    width: 37.3 - 2 * 5 * 1.5,
    top: 5 * 1.5 + 1,
    left: 5 * 1.5,
    fontSize: 15,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Galano Grotesque Alt DEMO',
    color: '#0349E8'
  },
  [MIXED]: {
    position: 'absolute',
    width: 37.3 - 2 * 5 * 1.5,
    top: 5 * 1.5 + 1,
    left: 5 * 1.5,
    fontSize: 15,
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'Galano Grotesque Alt DEMO',
    color: '#CD00A0'
  }
})
const markerOffset = {
  x: 0,
  y: -(markerStyles.marker.height / 2)
}

function calculateMarkerPosition(coordinates: Array<LatLng>): LatLng {
  const center = getCenter(coordinates)

  return { latitude: Number(center.latitude), longitude: Number(center.longitude) }
}

type Props = {
  onParkingSelect: (parking: any) => void
} & InjectedBookingProps

class MainView extends React.Component<Props> {
  handleParkingSelect = (parking: PrivateParking) => () => {
    this.props.booking.setSelectedParking(parking)
  }

  render() {
    const mapMarkers = getParkingPolygons(visibleParkings).map(parking => (
      <Marker
        key={parking.id}
        coordinate={calculateMarkerPosition(parking.coordinates)}
        centerOffset={markerOffset}
        cluster={true}
        onPress={this.handleParkingSelect(parking)}
      >
        <ImageBackground style={markerStyles.marker} source={ICON_MAP[parking.parkingType]}>
          <Text style={markerTextStyles[parking.parkingType]}>{parking.numOfPlaces}</Text>
        </ImageBackground>
      </Marker>
    ))

    const mapPolygons = getParkingPolygons(visibleParkings).map(parking => (
      <Polygon
        tappable
        key={parking.id}
        coordinates={parking.coordinates}
        strokeColor={BORDER_COLOR_MAP[parking.parkingType]}
        fillColor={FILL_COLOR_MAP[parking.parkingType]}
        strokeWidth={1.5}
        onPress={this.handleParkingSelect(parking)}
      />
    ))
    return (
      <>
        <MapView
          style={{ flex: 1, alignSelf: 'stretch' }}
          clustering={true}
          clusterColor="#FF9364"
          clusterTextColor="#fff"
          clusterBorderColor="#fff"
          clusterBorderWidth={4}
          loadingEnabled
          showsUserLocation
          region={{
            latitude: 50.09876159166,
            longitude: 14.34470728,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        >
          {mapPolygons}
          {mapMarkers}
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

export default withBooking(MainView)
