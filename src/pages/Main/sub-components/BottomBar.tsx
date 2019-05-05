import React from 'react'
import { LinearGradient } from 'expo'
import { Image, View } from 'react-native'
import * as s from './BottomBar.styled'
import MenuItem from "./MenuItem";

export type BottomBarProps = {
  open: boolean
  onToggle: () => void
}

const BottomBar: React.FunctionComponent<BottomBarProps> = ({ open, onToggle}) => (
  <s.Container>
    <LinearGradient
      colors={['#0047ff', '#0047ff', '#00288f', '#00288f']}
      locations={[0, 0.5, 0.5, 1.0]}
      style={{ flex: 1 }}
    >
      <s.ExpanderBar />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <s.FeatureCollection>
          <MenuItem icon={'flash'} />
          <MenuItem icon={'plug'} />
          <MenuItem icon={'moon'} />
          <MenuItem icon={'bank'} />
        </s.FeatureCollection>
        <s.BottomBarToggle>
          <Image source={require('../../../icons/collect-icon.png')} />
        </s.BottomBarToggle>
      </View>
    </LinearGradient>
  </s.Container>
)

export default BottomBar
