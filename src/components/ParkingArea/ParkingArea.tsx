import React, { FunctionComponent } from 'react'
import { StyleSheet, Text, ImageBackground } from 'react-native'
import { Polygon, Marker } from 'react-native-maps'
import { LatLng, MapEvent } from 'expo'
import { getCenter } from 'geolib'
import { ParkingType } from '../../constants'

type Props = {
  id: string
  coordinates: Array<LatLng>
  parkingType: ParkingType
  numOfPlaces: number
  onTap: (id: string) => void
}

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

const ParkingArea: FunctionComponent<Props> = ({
  id,
  coordinates,
  parkingType,
  numOfPlaces,
  onTap
}) => {
  const handlePress = (event: MapEvent) => {
    const { coordinate, position } = event.nativeEvent
    onTap(id)
  }

  if (parkingType === ParkingType.PEER_TO_PEER) {
    return <Marker coordinate={coordinates[0]} onPress={handlePress} />
  }
  return (
    <>
      <Polygon
        coordinates={coordinates}
        strokeColor={BORDER_COLOR_MAP[parkingType]}
        fillColor={FILL_COLOR_MAP[parkingType]}
        strokeWidth={1.5}
        onPress={handlePress}
        tappable
      />
      <Marker coordinate={calculateMarkerPosition(coordinates)}>
        <ImageBackground source={require('../../icons/ic_pin.png')} style={styles.marker}>
          <Text style={styles.markerText}>{numOfPlaces}</Text>
        </ImageBackground>
      </Marker>
    </>
  )
}

function calculateMarkerPosition(coordinates: Array<LatLng>): LatLng {
  const center = getCenter(coordinates)

  return { latitude: Number(center.latitude), longitude: Number(center.longitude) }
}

const styles = StyleSheet.create({
  marker: {
    height: 37.5,
    width: 27.3
  },
  markerText: {
    position: 'absolute',
    top: 7.5,
    left: 7.5,
    // fontFamily: 'Galano Grotesque DEMO',
    fontSize: 12,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#0349E8'
  }
})

export default ParkingArea
