import React from "react";
import PropTyes from "prop-types";
import styled from "styled-components/native";

const Image = styled.Image`
  width: 100px;
  height: 160px;
  border-radius: 4px;
`;

const Poster = ({ url }) => <Image source={{ uri: url }} />;

Poster.propTyes = {
  url: PropTyes.string.isRequired,
};
export default Poster;
