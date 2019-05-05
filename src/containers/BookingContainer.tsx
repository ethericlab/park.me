import React from 'react'
import { Feature, Features } from '../types/common'

const BookingContext = React.createContext<State>({} as any)

type State = {
  bookingStart: Date | null
  bookingEnd: Date | null
  filters: Features
} & BookingAPI

type BookingAPI = {
  toggleFeature: (feature: Feature) => void
  setStartDate: (date: Date) => void
  setEndDate: (date: Date) => void
}

export type InjectedBookingProps = {
  booking: State
}

export class BookingContainerProvider extends React.Component<{}, State> {
  toggleFeature = (feature: Feature) =>
    this.setState(({ filters }) => ({
      filters: {
        ...filters,
        [feature]: !filters[feature]
      }
    }))
  setStartDate = (date: Date) => this.setState({ bookingStart: date })
  setEndDate = (date: Date) => this.setState({ bookingEnd: date })

  state: State = {
    bookingEnd: new Date(),
    bookingStart: new Date(),
    filters: {
      heated: false,
      night: false,
      allDay: false,
      guard: false,
      charge: false,
      cover: false,
      instant: false,
      cam: false,
      gate: false,
      lit: false
    },

    toggleFeature: this.toggleFeature,
    setStartDate: this.setStartDate,
    setEndDate: this.setEndDate
  }

  render() {
    const { children } = this.props
    return <BookingContext.Provider value={this.state}>{children}</BookingContext.Provider>
  }
}

export const withBooking = <P extends object>(
  Component: React.ComponentType<P & InjectedBookingProps>
): React.ComponentType<P> => props => (
  <BookingContext.Consumer>
    {booking => <Component {...props} booking={booking} />}
  </BookingContext.Consumer>
)
