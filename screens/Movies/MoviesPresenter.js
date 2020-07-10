import React from "react";
import styled from "styled-components/native";
import Slide from "../../components/Movies/Slide";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import { preventAutoHide } from "expo/build/launch/SplashScreen";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import List from "../../components/List";
import SliderContainer from "../../components/SliderContainer";

const Container = styled.View``;

export default ({ loading, nowPlaying, popular, upcoming }) => (
  <ScrollContainer loading={loading}>
    <>
      <SliderContainer>
        {nowPlaying.map((movie) => (
          <Slide
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            votes={movie.vote_average}
            backgroundImage={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}
      </SliderContainer>
      <Container>
        <HorizontalSlider title={"Popular Movies"}>
          {popular.map((movie) => (
            <Vertical
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              votes={movie.vote_average}
            />
          ))}
        </HorizontalSlider>
        <List title={"Coming soon"}>
          {upcoming.map((movie) => (
            <Horizontal
              key={movie.id}
              id={movie.id}
              title={movie.title}
              releaseDate={movie.release_date}
              poster={movie.poster_path}
              overview={movie.overview}
            />
          ))}
        </List>
      </Container>
    </>
  </ScrollContainer>
);
