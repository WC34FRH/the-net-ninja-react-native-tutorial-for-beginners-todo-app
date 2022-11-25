import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  flex: 1;
  padding-top: 40px;
  background-color: #dddddd;
`;

const BoxOne = styled(Text)`
  background-color: violet;
  padding: 10px;
`;

const BoxTwo = styled(Text)`
  background-color: gold;
  padding: 10px;
`;

const BoxThree = styled(Text)`
  background-color: coral;
  padding: 10px;
`;

const BoxFour = styled(Text)`
  background-color: skyblue;
  padding: 10px;
`;

export default function Sandbox() {
  return (
    <Container>
      <BoxOne>one</BoxOne>
      <BoxTwo>two</BoxTwo>
      <BoxThree>three</BoxThree>
      <BoxFour>four</BoxFour>
    </Container>
  );
}
