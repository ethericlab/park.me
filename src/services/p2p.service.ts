import { PrivateParking } from '../types/common'

const state: { [id: string]: PrivateParking } = {
  'p2p-1': {
    id: 'p2p-1',
    type: 'private',
    owner: {
      name: 'Nikita Kurpas',
      verified: true
    },
    address: 'Tibetska 806/2, 160 00 Praha 6',
    pricing: [
      {
        model: 'hourly',
        price: 150,
        currency: 'CZK'
      }
    ],
    description: 'First p2p parking in Prague!',
    features: ['instant', 'cover', 'lit', 'charge', 'gate'],
    location: {
      lat: 50.09834,
      lng: 14.35537
    }
  },
  'p2p-2': {
    id: 'p2p-2',
    type: 'private',
    owner: {
      name: 'Andriy Privalov',
      verified: false
    },
    address: 'Arabska 782/16, 160 00 Praha 6',
    pricing: [
      {
        model: 'daily',
        price: 700,
        currency: 'CZK'
      }
    ],
    description: 'p2p parking on police station',
    features: ['instant', 'cover', 'lit', 'charge', 'night', 'heated', 'allDay'],
    location: {
      lat: 50.09899,
      lng: 14.35806
    }
  }
}

export const getPrivateParkings = (): PrivateParking[] => {
  return Object.keys(state).map(key => state[key])
}
