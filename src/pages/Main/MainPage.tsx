import React from 'react'
import { Animated, ImageBackground } from 'react-native'
import * as s from './MainPage.styled'
import MenuItem from './sub-components/MenuItem'
import FeatureItem from './sub-components/FeatureItem'
import DateTimePicker from 'react-native-modal-datetime-picker'
import DateTimeValue from '../../views/DateTimeValue'
import { formatDateTime } from './MainPage.utils'
import Button from '../../views/Button'
import SearchBar from './sub-components/SearchBar'
import DismissKeyboard from '../../containers/DismissKeyboard'
import MapView from "../../components/MapView/MapView";

type DateTimePickerType = 'start' | 'end'

type Feature =
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

type State = {
  openAnim: Animated.Value
  isBottomPanelOpen: boolean
  isSelectingDateTimeFor: DateTimePickerType | null

  startDateTime: Date | null
  endDateTime: Date | null

  features: { [P in Feature]: boolean }
}

class MainPage extends React.Component<{}, State> {
  state: State = {
    openAnim: new Animated.Value(0),
    isBottomPanelOpen: false,
    isSelectingDateTimeFor: null,

    startDateTime: null,
    endDateTime: null,

    features: {
      instant: false,
      cover: false,
      lit: false,
      charge: false,
      cam: false,
      gate: false,
      guard: false,
      allDay: false,
      night: false,
      heated: false
    }
  }

  toggleBottomPanel = () => {
    this.setState(({ isBottomPanelOpen }) => {
      Animated.spring(this.state.openAnim, { toValue: isBottomPanelOpen ? 1 : 0 }).start()
      return { isBottomPanelOpen: !isBottomPanelOpen }
    })
  }

  onDateTimePickerPress = (type: DateTimePickerType) => () => {
    this.setState({ isSelectingDateTimeFor: type })
  }

  handleDateTimePicked = (date: Date) => {
    const { isSelectingDateTimeFor } = this.state
    if (isSelectingDateTimeFor === 'start') {
      this.setState({ startDateTime: date })
    } else {
      this.setState({ endDateTime: date })
    }
    this.setState({ isSelectingDateTimeFor: null })
  }

  handleDateTimeCanceled = () => {
    this.setState({ isSelectingDateTimeFor: null })
  }

  toggleFeature = (feature: Feature) => () =>
    this.setState(({ features }) => ({
      features: {
        ...features,
        [feature]: !features[feature]
      }
    }))

  render() {
    const {
      isBottomPanelOpen,
      openAnim,
      startDateTime,
      endDateTime,
      isSelectingDateTimeFor,
      features
    } = this.state

    let preselectedDate = undefined
    if (isSelectingDateTimeFor === 'start' && startDateTime != null) {
      preselectedDate = startDateTime
    }
    if (isSelectingDateTimeFor === 'end') {
      if (endDateTime) {
        preselectedDate = endDateTime
      } else if (startDateTime) {
        preselectedDate = new Date(startDateTime.getTime())
        preselectedDate.setHours(startDateTime.getHours() + 1)
      }
    }

    // const translateY = openAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, -400]
    // })

    return (
      <DismissKeyboard>
        <s.Container>
          <s.MapContainer>
            <MapView />
            <ImageBackground
              source={require('../../icons/search_gradient.png')}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 160 }}
            />
            <SearchBar />
            <s.ExpanderContainer onPress={this.toggleBottomPanel}>
              <s.ExpanderBar />
            </s.ExpanderContainer>
          </s.MapContainer>
          <s.BottomContainer>
            {isBottomPanelOpen ? (
              <s.BottomPanel>
                <s.FeatureCollection>
                  <FeatureItem
                    onPress={this.toggleFeature('instant')}
                    icon={'instant'}
                    label={'Instant'}
                    active={features.instant}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('cover')}
                    icon={'cover'}
                    label={'Cover'}
                    active={features.cover}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('lit')}
                    icon={'lit'}
                    label={'Lit'}
                    active={features.lit}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('charge')}
                    icon={'charge'}
                    label={'Charge'}
                    active={features.charge}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('cam')}
                    icon={'cam'}
                    label={'Cam'}
                    active={features.cam}
                  />
                </s.FeatureCollection>
                <s.FeatureCollection>
                  <FeatureItem
                    onPress={this.toggleFeature('gate')}
                    icon={'gate'}
                    label={'Gate'}
                    active={features.gate}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('guard')}
                    icon={'guard'}
                    label={'Guard'}
                    active={features.guard}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('allDay')}
                    icon={'allDay'}
                    label={'All Day'}
                    active={features.allDay}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('night')}
                    icon={'night'}
                    label={'Night'}
                    active={features.night}
                  />
                  <FeatureItem
                    onPress={this.toggleFeature('heated')}
                    icon={'heated'}
                    label={'Heated'}
                    active={features.heated}
                  />
                </s.FeatureCollection>
                <s.Divider />
                <DateTimeValue
                  active={!!startDateTime}
                  onPress={this.onDateTimePickerPress('start')}
                  text={
                    startDateTime ? formatDateTime(startDateTime) : 'Select start date and time'
                  }
                />
                <DateTimeValue
                  active={!!endDateTime}
                  onPress={this.onDateTimePickerPress('end')}
                  text={endDateTime ? formatDateTime(endDateTime) : 'Select end date and time'}
                  style={{ marginTop: 15 }}
                />
                <Button
                  text={'Save Filters'}
                  style={{ marginTop: 20 }}
                  onPress={this.toggleBottomPanel}
                />
                <DateTimePicker
                  date={preselectedDate}
                  mode={'datetime'}
                  isVisible={isSelectingDateTimeFor != null}
                  onConfirm={this.handleDateTimePicked}
                  onCancel={this.handleDateTimeCanceled}
                />
              </s.BottomPanel>
            ) : (
              <s.BottomNav>
                <MenuItem icon={'locationpin'} active={true} />
                <MenuItem icon={'home'} />
                <MenuItem icon={'messagedash'} />
                <MenuItem icon={'female'} />
                <MenuItem icon={'customize'} />
              </s.BottomNav>
            )}
          </s.BottomContainer>
        </s.Container>
      </DismissKeyboard>
    )
  }
}

export default MainPage
