import styled from "styled-components/native";

export const Container = styled.View`
  height: 100px;
  width: 100%;
  background-color: rgba(0,0,0,0);
  position: absolute;
  bottom: 0;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  overflow: hidden;
`

export const BottomBarToggle = styled.View`
  height: 53px;
  width: 68px;
  border-radius: 40px;
  background-color: #00288f;
  align-items: center;
  justify-content: center;
`

export const FeatureCollection = styled.View`
  height: 56px;
  background-color: #0047ff;
  flex: 1;
  flex-direction: row;
  align-self: stretch;
  padding: 14px 20px;
  border-radius: 40px;
`
