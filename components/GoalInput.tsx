import React from "react";
import { View, Text, TextInput, Button, Modal, Image } from "react-native";

interface Props {
  goal: string;
  setgoal: any;
  AddGoal: any;
  show: boolean;
  setShow: any;
}

const GoalInput = ({ goal, setgoal, AddGoal, show, setShow }: Props) => {
  return (
    <Modal visible={show} animationType={"slide"}>
      <View
        style={{
          alignItems: "center",
          paddingTop: 30,
          justifyContent: "center",
          height: "100%",
          backgroundColor: "#311b6b",
        }}
      >
        {/* <Image source={require("../assets/image/logo.png")} /> */}
        <Image
          source={require("../assets/logo.png")}
          style={{ height: 200, width: 200, marginBottom: 24 }}
        />
        <TextInput
          placeholder="Your course goal!!"
          onChangeText={(val) => setgoal(val)}
          value={goal}
          style={{
            borderColor: "gray",
            backgroundColor: "white",
            borderWidth: 2,
            paddingLeft: 20,
            borderRadius: 3,
            width: "95%",
            paddingVertical: 12,
            color: "blue",
          }}
        />
        <View
          style={{
            marginTop: 12,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <Button
            color={"green"}
            title="Add course"
            onPress={() => AddGoal(goal)}
          />
          <Button
            title="Cancel"
            color={"red"}
            onPress={() => {
              setShow(false);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
