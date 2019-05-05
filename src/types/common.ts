import { ParkingType } from '../constants'
import { LatLng } from 'react-native-maps'

export type DateType = 'start' | 'end'

export type Feature =
  | 'instant'
  | 'cover'
  | 'lit'
  | 'charge'
  | 'cam'
  | 'gate'
  | 'guard'
  | 'allDay'
  | 'night'
  | 'heated'

export type Features = { [P in Feature]: boolean }

export type ParkingSpotOwner = {
  name: string
  verified: boolean
}

export type PriceModel = 'hourly' | 'daily' | 'monthly' | 'yearly'

export type Location = {
  lat: number
  lng: number
}

export type PublicParking = {
  type: 'public'
  id: string
  coordinates: LatLng[]
  parkingType: ParkingType
  capacity: number
}

export type PrivateParking = {
  type: 'private'
  owner: ParkingSpotOwner
  address: string
  pricing: {
    model: PriceModel
    price: number
    currency: string
  }[]
  description: string
  features: Feature[]
  location: Location
}

export type ParkingPlace = PrivateParking | PublicParking
