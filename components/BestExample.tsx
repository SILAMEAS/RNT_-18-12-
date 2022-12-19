import React from "react";
import { Text, View } from "react-native";

interface Props {
  text: string;
}

const GoalItem = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

export default GoalItem;
