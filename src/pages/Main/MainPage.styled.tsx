import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: #3a3a3a;
  flex: 1;
`

export const MapContainer = styled.View`
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

export const BottomContainer = styled.View``

export const BottomNav = styled.View`
  width: 100%;
  height: 85px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 17px;
`

export const BottomPanel = styled.View`
  width: 100%;
  height: 480px;
  align-items: center;
  padding: 20px;
`

export const FeatureCollection = styled.View`
  padding-top: 15px;
  width: 100%;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: row;
`

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  opacity: 0.15;
  background-color: #fff;
  margin: 20px 0;
`
