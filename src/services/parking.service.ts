import parkingLocations from '../backend/parkings-location.json'
import { ParkingType } from '../constants'
import {PrivateParking, PublicParking} from "../types/common";

const zoneToParkingMap = {
  1: ParkingType.RESIDENTS,
  2: ParkingType.MIXED,
  3: ParkingType.VISITORS
}

export const getParkingPolygons = (ids: string[]): PublicParking[] => {
  return ids.map(id => {
    const parking = (parkingLocations as any)[id]
    const coordinates = parking.geometry.coordinates[0].map(([longitude, latitude]: [number, number]) => ({
      latitude,
      longitude
    }))
    const parkingType: ParkingType = (zoneToParkingMap as any)[parking.properties['TYPZONY']]
    const numOfPlaces = parking.properties['PS_ZPS']

    return {
      type: 'public',
      id: parking.properties['ZPS_ID'],
      coordinates,
      parkingType,
      capacity: numOfPlaces
    }
  })
}
