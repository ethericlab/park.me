import React from 'react'
import { StyleProp, View, ViewStyle } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #3a3a3a;
  flex: 1;
`

export const MainViewContainer = styled.View`
  flex: 1;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`

export const ExpanderContainer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0);
  padding: 20px;
  position: absolute;
  bottom: 0;
  align-self: center;
`

export const ExpanderBar = styled.View`
  width: 60px;
  height: 4px;
  border-radius: 4px;
  background-color: #3a3a3a;
`

export const BottomViewContainer: React.FunctionComponent<{
  open: boolean
  style?: StyleProp<ViewStyle>
}> = props => (
  <View
    style={[
      {
        height: props.open ? 480 : 85,
        transform: [
          {
            translateY: props.open ? 395 : 0
          }
        ]
      },
      props.style
    ]}
  >
    {props.children}
  </View>
)

// export const BottomViewContainer: any = styled.View.attrs<{ open: boolean }>({
//   style: {
//     height: ({ open }: { open: boolean }) => open ? 480 : 85,
//     transform: [{
//       translateY: ({ open }: { open: boolean }) => open ? 395 : 0,
//     }]
//   }
// })`
//   /* height: 480px;
//   transform: translateY(395); // initial translate to 85px */
//   height: 85px;
// `

export const BottomNav = styled.View`
  height: 85px;
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
