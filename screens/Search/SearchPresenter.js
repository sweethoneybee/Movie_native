import React from "react";
import styled from "styled-components/native";
import Input from "../../components/Search/Input";
import HorizontalSlider from "../../components/HorizontalSlider";
import Horizontal from "../../components/Horizontal";
import Vertical from "../../components/Vertical";
import ScrollContainer from "../../components/ScrollContainer";

export default ({ movies, shows, keyword, onChange, onSubmit }) => (
  <ScrollContainer
    refreshFn={onSubmit}
    loading={false}
    contentContainerStyle={{ paddingTop: 10 }}
  >
    <Input
      placeholder={"Write a keyword"}
      value={keyword}
      onChange={onChange}
      onSubmit={onSubmit}
    />
    {movies.length !== 0 && (
      <HorizontalSlider title={"Movie results"}>
        {movies.map((movie) => (
          <Vertical
            key={movie.id}
            id={movie.id}
            votes={movie.vote_average}
            title={movie.title}
            poster={movie.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
    {shows.length !== 0 && (
      <HorizontalSlider title={"TV results"}>
        {shows.map((show) => (
          <Vertical
            key={show.id}
            id={show.id}
            title={show.name}
            votes={show.vote_average}
            poster={show.poster_path}
          />
        ))}
      </HorizontalSlider>
    )}
  </ScrollContainer>
);
