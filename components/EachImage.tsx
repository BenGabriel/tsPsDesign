import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { TopIcons } from "../data/types";
import { useNavigation } from "@react-navigation/native";

const EachImage: FC<TopIcons> = (props) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={{
        marginLeft: 20,
        backgroundColor: "#252f39",
        width: 190,
        alignItems: "center",
        elevation: 10,
        borderRadius: 20,
        paddingVertical: 15,
        marginRight: 10,
        marginBottom: 10
      }}
      onPress={() =>
        navigation.navigate("Profile", {
          item: props
        })
      }
    >
      <Image
        source={require("../assets/ps.png")}
        style={{
          width: 20,
          height: 20,
          alignSelf: "flex-end",
          marginRight: 20
        }}
        resizeMode="contain"
      />
      <View style={{ width: 150, height: 120 }}>
        <Image
          source={props.image}
          style={{
            width: "100%",
            height: "100%"
          }}
          resizeMode="contain"
        />
      </View>
      <View>
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
            letterSpacing: 2
          }}
        >
          Dual Sense
        </Text>
        <Text
          style={{
            color: "#fff",
            fontSize: 12
          }}
        >
          Official PS5 controller
        </Text>
      </View>
    </Pressable>
  );
};

export default EachImage;

const styles = StyleSheet.create({});
