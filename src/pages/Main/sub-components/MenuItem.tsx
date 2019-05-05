import React from 'react'
import styled from "styled-components/native";
import {Image} from "react-native";

export const StyledView = styled.View<{ active: boolean }>`
  width: 60px;
  height: 60px;
  background-color: ${({ active }) => active ? '#ff9364' : 'rgba(0,0,0,0)'};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

const icons = {
  // flash: require('../../../icons/flash_icon.png'),
  // bank: require('../../../icons/ic_bank.png'),
  // moon: require('../../../icons/ic_moon.png'),
  // plug: require('../../../icons/ic_plug.png'),
  locationpin: require('../../../icons/ic_locationpin.png'),
  home: require('../../../icons/ic_home.png'),
  messagedash: require('../../../icons/ic_messagedash.png'),
  female: require('../../../icons/ic_female.png'),
  customize: require('../../../icons/ic_customize.png'),
}

export type MenuItemProps = {
  icon: keyof typeof icons,
  active?: boolean
}

const MenuItem: React.FunctionComponent<MenuItemProps> = ({ icon, active = false }) => (
  <StyledView active={active}>
    <Image source={icons[icon]} />
  </StyledView>
)

export default MenuItem
