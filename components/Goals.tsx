import React from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  text: string;
  id: string;
  deleteItem: any;
};

const Goals = ({ text, id, deleteItem }: Props) => {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={() => {
        deleteItem(id);
      }}
    >
      <View key={id} style={{ width: "100%" }}>
        {
          <Text
            style={{
              color: "white",
              fontSize: 16,
              padding: 2,
              backgroundColor: "#5e0acc",
              borderRadius: 7,
              marginBottom: 10,
              textAlign: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            {text}
          </Text>
        }
      </View>
    </Pressable>
  );
};

export default Goals;
