import React from 'react'
import styled from 'styled-components/native'
import { GestureResponderEvent, Image, TouchableOpacity } from 'react-native'

const Container = styled.View`
  width: 55px;
  align-items: center;
`

const Label = styled.Text`
  font-family: galano-grotesque-alt-bold;
  font-size: 15px;
  line-height: 22px;
  flex-wrap: wrap;
  color: #fff;
`

const StyledView = styled.View<{ active: boolean }>`
  width: 55px;
  height: 55px;
  background-color: ${({ active }) => (active ? '#546DFF' : 'rgba(0, 0, 0, 0.25);')};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`

const icons = {
  instant: require('../../../icons/flash_icon.png'),
  cover: require('../../../icons/ic_protection.png'),
  lit: require('../../../icons/ic_torch.png'),
  charge: require('../../../icons/ic_plug.png'),
  cam: require('../../../icons/ic_webcam.png'),
  gate: require('../../../icons/ic_locker.png'),
  guard: require('../../../icons/ic_shieldstar.png'),
  allDay: require('../../../icons/24h.png'),
  night: require('../../../icons/ic_moon.png'),
  heated: require('../../../icons/ic_brightness.png')
}

export type FeatureItemProps = {
  onPress?: (event: GestureResponderEvent) => void
  icon: keyof typeof icons
  label: string
  active?: boolean
}

const FeatureItem: React.FunctionComponent<FeatureItemProps> = ({
  onPress,
  icon,
  label,
  active = false
}) => (
  <TouchableOpacity onPress={onPress}>
    <Container>
      <StyledView active={active}>
        <Image source={icons[icon]} />
      </StyledView>
      <Label>{label}</Label>
    </Container>
  </TouchableOpacity>
)

export default FeatureItem
