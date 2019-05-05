import React from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'
import { icons } from './FeatureItem'

const StyledView = styled.View`
  width: 28px;
  height: 28px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`

export type FeatureItemProps = {
  icon: keyof typeof icons
}

const SmallFeatureItem: React.FunctionComponent<FeatureItemProps> = ({ icon }) => (
  <StyledView>
    <Image source={icons[icon]} style={{ width: '50%' }} resizeMode={"contain"} resizeMethod={'scale'}/>
  </StyledView>
)

export default SmallFeatureItem
