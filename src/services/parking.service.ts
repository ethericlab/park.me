import parkingLocations from '../backend/parkings-location.json'
import { ParkingType } from '../constants'

const zoneToParkingMap = {
  1: ParkingType.RESIDENTS,
  2: ParkingType.MIXED,
  3: ParkingType.VISITORS
}

export const getParkingPolygons = (ids: string[]) => {
  return ids.map(id => {
    const parking = parkingLocations[id]
    const coordinates = parking.geometry.coordinates[0].map(([longitude, latitude]) => ({
      latitude,
      longitude
    }))
    const parkingType: ParkingType = zoneToParkingMap[parking.properties['TYPZONY']]
    const numOfPlaces = parking.properties['PS_ZPS']

    return {
      id: parking.properties['ZPS_ID'],
      coordinates,
      parkingType,
      numOfPlaces
    }
  })
}
