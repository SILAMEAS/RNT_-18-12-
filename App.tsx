import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
} from "react-native";
import GoalInput from "./components/GoalInput";
import Goals from "./components/Goals";
interface GoalInputType {
  text: string;
  id: string;
}
import { StatusBar } from "expo-status-bar";
export default function App() {
  const [goal, setgoal] = useState("");
  const [show, setShow] = useState(false);
  const [AllData, setAllData] = useState<Array<GoalInputType>>([]);
  const AddGoal = (goal: string) => {
    const da = goal;
    const GoalInput: GoalInputType = {
      text: da,
      id: Math.random().toString(),
    };
    if (goal !== "") {
      setAllData([...AllData, GoalInput]);
    } else {
      alert("field cann't empty");
    }
    setgoal("");
  };
  const deleteItem = (ids: string) => {
    const newData = AllData.filter((i) => i.id !== ids);
    setAllData(newData);
  };
  return (
    <>
      <StatusBar style="light" />
      <View
        style={{
          width: "100%",
          padding: 50,
          height: "100%",
          backgroundColor: "#1e085a",
        }}
      >
        {!show && (
          <Button
            title="Add course"
            onPress={() => {
              setShow(true);
            }}
          />
        )}
        <Text style={{ marginBottom: 24 }}></Text>
        {show && (
          <GoalInput
            show={show}
            goal={goal}
            setgoal={setgoal}
            AddGoal={AddGoal}
            setShow={setShow}
          />
        )}
        <View>
          {AllData.length === 0 ? (
            <Text
              style={{
                color: "white",
                marginTop: 24,
                borderTopWidth: 2,
                borderColor: "white",
                paddingTop: 12,
              }}
            >
              Waiting you input data ...
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 16,
                marginTop: 24,
                borderTopWidth: 2,
                paddingTop: 12,
                textDecorationLine: "underline",
                marginBottom: 12,
                color: "white",
                borderColor: "white",
              }}
            >
              List of goals{" "}
            </Text>
          )}
          {/* <ScrollView style={{ height: 400 }} alwaysBounceVertical={false}>
       {AllData.map((item, index) => {
         return (
           <View key={index} style={{ width: "100%" }}>
             {index === 0 ? (
               <Text></Text>
             ) : (
               <Text
                 style={{
                   color: "white",
                   fontSize: 24,
                   padding: 12,
                   backgroundColor: "#5e0acc",
                   borderRadius: 7,
                   marginBottom: 24,
                   textAlign: "center",
                 }}
               >
                 {item}
               </Text>
             )}
           </View>
         );
       })}
     </ScrollView> */}
          <FlatList
            data={AllData}
            renderItem={(itemData) => {
              return (
                <Goals
                  text={itemData.item.text}
                  key={itemData.index}
                  id={itemData.item.id}
                  deleteItem={deleteItem}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}
