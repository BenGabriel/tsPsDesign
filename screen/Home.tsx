import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View
} from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Pad, TopImages } from "../data/data";
import { useNavigation } from "@react-navigation/native";
import TabNavigation from "../components/TabNavigation";
import EachImage from "../components/EachImage";
import Svg, { Text as Text1 } from "react-native-svg";

const { width, height } = Dimensions.get("screen");

const Home: FC = () => {
  const navigation = useNavigation();
  const stuff = navigation.getState();
  console.log(stuff);
  return (
    <View style={{ flex: 1, backgroundColor: "#1f2732", paddingTop: 30 }}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#3a9ee9", "#474ce4"]}
        style={styles.background}
      />
      <View style={styles.top}>
        <View style={styles.iconContainer}>
          <Ionicons name="ios-menu" color="#a0a7b1" size={21} />
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="shoppingcart" color="#a0a7b1" size={21} />
        </View>
      </View>
      <View style={styles.topText}>
        <Text style={styles.text1}>Featured</Text>
        <Svg height="40" width="200">
          <Text1
            fill="none"
            stroke="#fff"
            fontSize="25"
            fontWeight="bold"
            x="55"
            y="23"
            textAnchor="middle"
          >
            Products
          </Text1>
        </Svg>
      </View>
      <View style={styles.iconsTopContainer}>
        {TopImages.map((item) =>
          item.id === 2 ? (
            <LinearGradient
              key={item.id}
              colors={["#3a9ee9", "#474ce4"]}
              style={styles.topIcons}
              end={[1, 1]}
            >
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </LinearGradient>
          ) : (
            <View key={item.id} style={styles.topIcons}>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
              />
            </View>
          )
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 70
        }}
      >
        <FlatList
          horizontal
          data={Pad}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <EachImage image={item.image} id={item.id} />
          )}
        />
      </View>
      <TabNavigation name="Home" />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {
    width: width / 2.27,
    height: height / 1.3,
    position: "absolute",
    right: 0,
    borderBottomLeftRadius: 30
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
    marginTop: 10
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#1e2730",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    borderLeftWidth: 0.4,
    borderColor: "#37404f"
  },
  topText: { marginTop: 40, marginLeft: 25 },
  text1: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 25,
    letterSpacing: 2,
    fontWeight: "200"
  },
  text2: {
    color: "#fff",
    fontSize: 25,
    lineHeight: 28,
    letterSpacing: 2,
    fontWeight: "bold"
  },
  topIcons: {
    width: 50,
    height: 45,
    backgroundColor: "#1e2730",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderLeftWidth: 0.4,
    borderTopWidth: 0.4,
    borderColor: "#37404f",
    padding: 10
  },
  iconsTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
    alignSelf: "center",
    marginVertical: 20
  }
});
