import React, { ReactNode } from 'react'
import DismissKeyboard from '../../containers/DismissKeyboard'
import * as s from './TabBar.styled'
import MenuItem from '../../views/MenuItem'
import MainView from '../MainView/MainView'
import FilterView from '../FilterView/FilterView'
import {Animated, View} from 'react-native'
import ParkingDetailsView from '../ParkingDetailsView/ParkingDetailsView'
import { PrivateParking } from '../../types/common'
import {InjectedBookingProps, withBooking} from "../../containers/BookingContainer";

// const mockParkingDetails: PrivateParking = {
//   id: "",
//   type: 'private',
//   owner: {
//     name: 'Andriy Privalov',
//     verified: true
//   },
//   address: 'Banskobystricka 10',
//   location: {
//     lat: 50.09923,
//     lng: 14.392518
//   },
//   features: ['instant', 'night', 'charge', 'cover'],
//   description: 'A parking spot in an underground garage',
//   pricing: [
//     {
//       model: 'hourly',
//       currency: 'CZK',
//       price: 60
//     }
//   ]
// }

type AppState = 'map' | 'booking' | 'properties' | 'messages' | 'profile' | 'settings'

type State = {
  animate: Animated.Value
  activeState: AppState
  isBottomViewOpen: boolean
}

type Props = {} & InjectedBookingProps

class TabBarController extends React.Component<Props, State> {
  state: State = {
    animate: new Animated.Value(0),
    activeState: 'map',
    isBottomViewOpen: false
  }

  handleMenuClick = (state: AppState) => () => this.setState({ activeState: state })

  toggleBottomView = () => {
    const { booking } = this.props
    const { isBottomViewOpen } = this.state
    if (isBottomViewOpen && booking.selectedParking) {
      booking.setSelectedParking(null)
    }
    this.setState(({ isBottomViewOpen }) => {
      Animated.spring(this.state.animate, { toValue: isBottomViewOpen ? 0 : 1 }).start()
      return { isBottomViewOpen: !isBottomViewOpen }
    })
  }

  openBottomPanel = () => {
    if (!this.state.isBottomViewOpen) {
      this.toggleBottomView()
    }
  }

  setAppState = (state: AppState) => {
    this.setState({ activeState: state })
  }

  render() {
    const { booking } = this.props
    const { animate, activeState, isBottomViewOpen } = this.state
    let currentMainView: ReactNode = null
    let currentBottomView: ReactNode = null

    switch (activeState) {
      case 'map':
        currentMainView = <MainView openBottomPanel={this.openBottomPanel}/>
        if (booking.selectedParking) {
          currentBottomView = <ParkingDetailsView details={booking.selectedParking} />
        } else {
          currentBottomView = <FilterView closeBottomView={this.toggleBottomView} />
        }
        break
      case 'booking':
        break
      case 'properties':
        break
      case 'messages':
        break
      case 'profile':
        break
      case 'settings':
        break
    }

    // const translateYForBottomView = animate.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [395, 0]
    // })

    return (
      <DismissKeyboard>
        <s.Container>
          <s.MainViewContainer>
            {currentMainView}
            <s.ExpanderContainer onPress={this.toggleBottomView}>
              <s.ExpanderBar />
            </s.ExpanderContainer>
          </s.MainViewContainer>
          <s.BottomViewContainer
            open={isBottomViewOpen}
            style={{
              transform: [
                {
                  translateY: 0
                }
              ]
            }}
          >
            <View
              style={{
                flex: 1,
                display: isBottomViewOpen ? 'flex' : 'none'
              }}
            >
              {currentBottomView}
            </View>
          </s.BottomViewContainer>
          {!isBottomViewOpen && (
            <s.BottomNav>
              <MenuItem
                onPress={this.handleMenuClick('map')}
                icon={'locationpin'}
                active={activeState === 'map'}
              />
              <MenuItem
                onPress={this.handleMenuClick('properties')}
                icon={'home'}
                active={activeState === 'properties'}
              />
              <MenuItem
                onPress={this.handleMenuClick('messages')}
                icon={'messagedash'}
                active={activeState === 'messages'}
              />
              <MenuItem
                onPress={this.handleMenuClick('profile')}
                icon={'female'}
                active={activeState === 'profile'}
              />
              <MenuItem
                onPress={this.handleMenuClick('settings')}
                icon={'customize'}
                active={activeState === 'settings'}
              />
            </s.BottomNav>
          )}
        </s.Container>
      </DismissKeyboard>
    )
  }
}

export default withBooking(TabBarController)
