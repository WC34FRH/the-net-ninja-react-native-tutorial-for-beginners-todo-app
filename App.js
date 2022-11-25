import { StatusBar } from "expo-status-bar";
import react, { useState } from "react";
import {
  Alert,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import styled from "styled-components/native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
// import Sandbox from "./components/Sandbox";
import TodoItem from "./components/TodoItem";

const Container = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Content = styled(View)`
  padding: 40px;
  /* background-color: pink; */
  flex: 1;
`;

const List = styled(View)`
  margin-top: 20px;
  /* background-color: yellow; */
  flex: 1;
`;

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        return [
          {
            text: text,
            key: Math.random().toString(),
          },
          ...prevTodos,
        ];
      });
    } else {
      Alert.alert("OOPS!", "The title of a todo must not be empty", [
        {
          text: "understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <Container>
        <Header />
        <Content>
          <AddTodo submitHandler={submitHandler} />
          <List>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </List>
        </Content>
        <StatusBar style="auto" />
      </Container>
    </TouchableWithoutFeedback>
  );
}
