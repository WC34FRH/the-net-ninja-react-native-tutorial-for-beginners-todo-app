import react from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

const Item = styled(View)`
  padding: 16px;
  margin-top: 16px;
  border-color: #bbbbbb;
  border-width: 1px;
  border-style: dashed;
  border-radius: 10px;
  flex-direction: row;
`;

const ItemText = styled(Text)`
  margin-left: 10px;
`;

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Item>
        <MaterialIcons name="delete" size={18} color="#333333" />
        <ItemText>{item.text}</ItemText>
      </Item>
    </TouchableOpacity>
  );
}
