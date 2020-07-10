import React, { Children } from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import Slide from "./Movies/Slide";
import { Dimensions } from "react-native";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View`
  width: 100%;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;
const SliderContainer = ({ children }) => (
  <Container>
    <Swiper controlsEnabled={false} loop timeout={3}>
      {children}
    </Swiper>
  </Container>
);

export default SliderContainer;
