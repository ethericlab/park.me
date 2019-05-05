import React from 'react'
import * as s from './FilterView.styled'
import { DateType, Feature, Features } from '../../types/common'
import FeatureItem from '../../views/FeatureItem'
import Button from '../../views/Button'
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect'
import { Divider } from '../../views/Common.styled'
import {InjectedBookingProps, withBooking} from '../../containers/BookingContainer'

type Props = {
  closeBottomView: () => void
} & InjectedBookingProps

type State = {
  features: Features
}

class FilterView extends React.Component<Props, State> {
  state: State = {
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

  handleDatePicked = (type: DateType, date: Date) => {
    if (type === 'start') {
      this.props.booking.setStartDate(date)
    } else {
      this.props.booking.setEndDate(date)
    }
  }

  toggleFeature = (feature: Feature) => () =>
    this.setState(({ features }) => ({
      features: {
        ...features,
        [feature]: !features[feature]
      }
    }))

  render() {
    const { booking: { bookingStart, bookingEnd } } = this.props
    const { features } = this.state

    // let preselectedDate = undefined
    // if (isSelectingDateFor === 'start' && startDate != null) {
    //   preselectedDate = startDate
    // }
    // if (isSelectingDateFor === 'end') {
    //   if (endDate) {
    //     preselectedDate = endDate
    //   } else if (startDate) {
    //     preselectedDate = new Date(startDate.getTime())
    //     preselectedDate.setHours(startDate.getHours() + 1)
    //   }
    // }

    // const translateY = openAnim.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, -400]
    // })

    return (
      <>
        <s.Container>
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
          <Divider />
          <DateRangeSelect onDatePicked={this.handleDatePicked} startDate={bookingStart} endDate={bookingEnd} />
          {/*<DateTimeValue*/}
          {/*  active={!!startDate}*/}
          {/*  onPress={this.handleDatePickerPress('start')}*/}
          {/*  text={startDate ? formatDateTime(startDate) : 'Select start date and time'}*/}
          {/*/>*/}
          {/*<DateTimeValue*/}
          {/*  active={!!endDate}*/}
          {/*  onPress={this.handleDatePickerPress('end')}*/}
          {/*  text={endDate ? formatDateTime(endDate) : 'Select end date and time'}*/}
          {/*  style={{ marginTop: 15 }}*/}
          {/*/>*/}
          <Button
            text={'Save Filters'}
            style={{ marginTop: 20 }}
            onPress={this.props.closeBottomView}
          />
        </s.Container>
        {/*<DateTimePicker*/}
        {/*  date={preselectedDate}*/}
        {/*  mode={'datetime'}*/}
        {/*  isVisible={isSelectingDateFor != null}*/}
        {/*  onConfirm={this.handleDateTimePicked}*/}
        {/*  onCancel={this.handleDateTimeCanceled}*/}
        {/*/>*/}
      </>
    )
  }
}

export default withBooking(FilterView)
