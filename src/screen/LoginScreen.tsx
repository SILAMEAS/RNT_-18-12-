import { View, Text, Image, Box, Heading } from "native-base";
import React from "react";

type Props = {};

const LoginScreen = (props: Props) => {
  return (
    <Box flex={1} bg={"black"}>
      <Image
        flex={1}
        alt="logo"
        resizeMode="cover"
        size="lg"
        width={"full"}
        source={require("../../assets/phone.jpg")}
      />
      <Box
        width={"full"}
        height={"full"}
        position={"absolute"}
        top="40"
        alignItems={"center"}
        px={6}
      >
        <Heading color="white">Log In</Heading>
      </Box>
    </Box>
  );
};

export default LoginScreen;
