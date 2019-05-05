import { ParkingType } from '../constants'
import { LatLng } from 'expo'

export type Parking = {
  id: string
  type: ParkingType
  coordinates: LatLng[]
}

export type Parkings = {
  [key: string]: Parking
}

const parkings: Parkings = {
  mixed1: {
    id: 'mixed1',
    type: ParkingType.MIXED,
    coordinates: []
  }
}

const parkingCoords: Array<LatLng> = [
  { latitude: 37.78166105, longitude: -122.4304786 },
  { latitude: 37.7818343, longitude: -122.42909688 },
  { latitude: 37.780901601, longitude: -122.4289885908 },
  { latitude: 37.7807367, longitude: -122.430328689 }
]
