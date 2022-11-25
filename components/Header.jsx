import react, { useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled(View)`
  height: 80px;
  padding-top: 38px;
  background-color: coral;
`;

const Title = styled(Text)`
  text-align: center;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;

export default function Header() {
  return (
    <Container>
      <Title>My Todos</Title>
    </Container>
  );
}
