import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 30px 20px 20px;
`

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow: hidden;
`

export const ParkingAvatar = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #0044f1;
  align-items: center;
  justify-content: center;
`

export const OwnerName = styled.Text`
  font-family: Galano Grotesque Alt DEMO;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`

export const ParkingAddress = styled.Text`
  font-family: Galano Grotesque DEMO;
  font-size: 11px;
  line-height: 15px;
  color: #aebece;
`

export const ParkingDescription = styled.Text`
  font-family: Galano Grotesque DEMO;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`

export const Verified = styled.Image.attrs({
  source: require('../../icons/verified.png')
})`
  width: 16px;
  height: 16px;
  border-radius: 8px;
  overflow: hidden;
`

export const PricingContainer = styled.View`
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
`

export const PricingText = styled.Text`
  font-family: Galano Grotesque Alt DEMO;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
`

export const FeatureContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 160px;
  height: 28px;
`

export const DistanceContainer = styled.View`
  align-items: center;
  justify-content: center;
  height: 28px;
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
`

export const DistanceText = styled.Text`
  font-family: Galano Grotesque Alt DEMO;
  font-size: 11px;
  line-height: 15px;
  color: #fff;
`
