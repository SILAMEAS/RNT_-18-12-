import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setgoal] = useState("");
  const [AllData, setAllData] = useState([]);
  const data = (sd: string) => {
    alert(sd);

    setgoal("");
  };
  return (
    <View style={{ width: "100%", padding: 50 }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TextInput
          placeholder="Your course goal!!"
          onChangeText={(val) => setgoal(val)}
          value={goal}
          style={{
            borderColor: "gray",
            borderWidth: 2,
            paddingLeft: 20,
            borderRadius: 3,
            width: "60%",
          }}
        />
        <Button title="Add course" onPress={() => data(goal)} />
      </View>
      <View>
        <Text style={{ marginTop: 24, borderTopWidth: 2, paddingTop: 12 }}>
          List of goals ...{" "}
        </Text>
        {AllData.map((item) => {
          return <Text>sdfsd</Text>;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appCon: {
    padding: 50,
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },
});
