import React from 'react'
import {DateType, Features, ParkingPlace, PrivateParking, PublicParking} from '../../types/common'
import DateRangeSelect from '../DateRangeSelect/DateRangeSelect'
import { Divider } from '../../views/Common.styled'
import { View } from 'react-native'
import * as s from './ParkingDetailsView.styled'
import SmallFeatureItem from '../../views/SmallFeatureItem'
import Button from '../../views/Button'
import { InjectedBookingProps, withBooking } from '../../containers/BookingContainer'

const formatPricing = (pricing: PrivateParking['pricing'][0]) => {
  let modelText
  switch (pricing.model) {
    case 'hourly':
      modelText = 'hour'
      break
    case 'daily':
      modelText = 'day'
      break
    case 'monthly':
      modelText = 'monthly'
      break
    case 'yearly':
      modelText = 'year'
      break
  }
  return `${pricing.price} ${pricing.currency}/${modelText}`
}

type Props = {
  details: ParkingPlace
} & InjectedBookingProps

class ParkingDetailsView extends React.Component<Props> {
  handleDatePicked = (type: DateType, date: Date) => {
    if (type === 'start') {
      this.props.booking.setStartDate(date)
    } else {
      this.props.booking.setEndDate(date)
    }
  }

  renderPublicParking(parking: PublicParking): React.ReactNode {
    return null
  }

  renderPrivateParking(parking: PrivateParking): React.ReactNode {
    const { booking } = this.props
    return (
      <s.Container>
        <View style={{ flexDirection: 'row' }}>
          <s.Avatar source={require('../../icons/avatar.png')} />
          <View style={{ marginLeft: 10, flex: 1 }}>
            <View style={{ flexDirection: 'row' }}>
              <s.OwnerName>{parking.owner.name}</s.OwnerName>
              {parking.owner.verified && <s.Verified style={{ marginLeft: 5 }} />}
            </View>
            <s.ParkingAddress style={{ marginTop: 5 }}>{parking.address}</s.ParkingAddress>
          </View>
          <s.PricingContainer>
            <s.PricingText>{formatPricing(parking.pricing[0])}</s.PricingText>
          </s.PricingContainer>
        </View>
        <s.ParkingDescription style={{ marginTop: 15 }}>{parking.description}</s.ParkingDescription>
        <Divider />
        <View style={{ flexDirection: 'row' }}>
          <s.FeatureContainer style={{ marginRight: 10 }}>
            {parking.features.slice(0, 4).map(feature => (
              <SmallFeatureItem icon={feature} key={feature} />
            ))}
          </s.FeatureContainer>
          <s.DistanceContainer>
            <s.DistanceText>350m</s.DistanceText>
          </s.DistanceContainer>
        </View>
        <Divider />
        <DateRangeSelect
          onDatePicked={this.handleDatePicked}
          startDate={booking.bookingStart}
          endDate={booking.bookingEnd}
        />
        <Button text={'Book'} disabled={true} style={{ marginTop: 30 }} />
      </s.Container>
    )
  }

  render() {
    const { details } = this.props
    switch (details.type) {
      case 'public':
        return this.renderPublicParking(details)
      case 'private':
        return this.renderPrivateParking(details)
    }

    return null
  }
}

export default withBooking(ParkingDetailsView)
