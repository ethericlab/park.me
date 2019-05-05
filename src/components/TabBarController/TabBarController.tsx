import React, { ReactNode } from 'react'
import DismissKeyboard from '../../containers/DismissKeyboard'
import * as s from './TabBar.styled'
import MenuItem from '../../views/MenuItem'
import MainView from '../MainView/MainView'
import FilterView from '../FilterView/FilterView'
import { View } from 'react-native'
import ParkingDetailsView from '../ParkingDetailsView/ParkingDetailsView'
import {ParkingPlace, PrivateParking} from '../../types/common'

const mockParkingDetails: PrivateParking = {
  type: 'private',
  owner: {
    name: 'Andriy Privalov',
    verified: true
  },
  address: 'Banskobystricka 10',
  location: {
    lat: 50.09923,
    lng: 14.392518
  },
  features: ['instant', 'night', 'charge', 'cover'],
  description: 'A parking spot in an underground garage',
  pricing: [
    {
      model: 'hourly',
      currency: 'CZK',
      price: 60
    }
  ]
}

type AppState = 'map' | 'booking' | 'properties' | 'messages' | 'profile' | 'settings'

type State = {
  activeState: AppState
  isBottomViewOpen: boolean
}

class TabBarController extends React.Component<{}, State> {
  state: State = {
    activeState: 'map',
    isBottomViewOpen: false
  }

  handleMenuClick = (state: AppState) => () => this.setState({ activeState: state })

  toggleBottomView = () => {
    console.log('toggleBottomView')
    this.setState(({ isBottomViewOpen }) => {
      // Animated.spring(this.state.openAnim, { toValue: isBottomPanelOpen ? 1 : 0 }).start()
      return { isBottomViewOpen: !isBottomViewOpen }
    })
  }

  setAppState = (state: AppState) => {
    this.setState({ activeState: state })
  }

  render() {
    const { activeState, isBottomViewOpen } = this.state
    let currentMainView: ReactNode = null
    let currentBottomView: ReactNode = null

    switch (activeState) {
      case 'map':
        currentMainView = <MainView />
        // currentBottomView = <FilterView closeBottomView={this.toggleBottomView} />
        currentBottomView = <FilterView closeBottomView={this.toggleBottomView} />
        break
      case 'booking':
        currentBottomView = <ParkingDetailsView details={mockParkingDetails} />
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

export default TabBarController
