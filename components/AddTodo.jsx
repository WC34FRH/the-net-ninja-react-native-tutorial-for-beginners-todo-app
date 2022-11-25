import react, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import styled from "styled-components/native";

const Input = styled(TextInput)`
  margin-bottom: 10px;
  padding: 6px 8px 6px 8px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`;

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <Input placeholder="new todo..." onChangeText={changeHandler} />
      <Button
        onPress={() => {
          submitHandler(text);
        }}
        title="add todo"
        color="coral"
      />
    </View>
  );
}
