import { Image, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { SenseProps } from "../data/types";
import { senseItem } from "../data/data";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const Icon: FC<SenseProps> = (props) => {
  return (
    <View
      style={{
        width: "40%",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 30,
        marginVertical: 10
      }}
      key={props.id}
    >
      <View style={styles.topIcons}>
        {props.id === 3 || props.id === 4 ? (
          <MaterialIcons name={props.icon} color={props.color} size={18} />
        ) : (
          <Ionicons name={props.icon} color={props.color} size={18} />
        )}
      </View>
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontSize: 13,
            color: "#fff",
            fontWeight: "bold"
          }}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: "#fff"
          }}
        >
          {props.text}
        </Text>
      </View>
    </View>
  );
};

const Details = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ flex: 1 }}
        colors={["#3a9ee9", "#474ce4"]}
        end={[0.6, 1.5]}
      >
        <View style={styles.top}>
          <MaterialIcons name="keyboard-backspace" color="#fff" size={22} />
          <View style={styles.iconContainer}>
            <AntDesign name="shoppingcart" color="#a0a7b1" size={21} />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row"
          }}
        >
          <View style={{ paddingHorizontal: 30 }}>
            <View style={styles.textContainer}>
              <Text style={styles.firstText}>PLATFORM</Text>
              <Text style={styles.secText}>PS5</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.firstText}>RELEASE</Text>
              <Text style={styles.secText}>Fall 2020</Text>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.firstText}>PRICE</Text>
              <Text style={styles.secText}>$50</Text>
            </View>
            <View
              style={{
                ...styles.iconContainer,
                marginTop: 65,
                marginLeft: -10
              }}
            >
              <Ionicons name="bookmark-outline" size={20} color="#a0a7b1" />
            </View>
          </View>
          <View
            style={{
              width: 300,
              transform: [
                {
                  rotate: "-90deg"
                }
              ],
              elevation: 30,
              marginLeft: -30
            }}
          >
            <Image
              source={props.route.params.item.image}
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
            />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.secContainer}>
        <Text style={{ color: "#fff", fontSize: 25, letterSpacing: 1.5 }}>
          Dual Sense
        </Text>
        <Text
          style={{
            width: "90%",
            color: "#fff",
            fontSize: 15,
            marginVertical: 10,
            lineHeight: 25
          }}
        >
          DualSense also adds a built-in microphone array, which will enable
          players to easily chat with friends without a headset...
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginVertical: 10
          }}
        >
          {senseItem.map((item) => (
            <Icon
              id={item.id}
              name={item.name}
              text={item.text}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </View>
        <LinearGradient
          style={styles.bottom}
          colors={["#2b3848", "#161f24"]}
          end={[1.2, 1.2]}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#6396cf",
                fontSize: 18
              }}
            >
              $
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                marginLeft: 2
              }}
            >
              50
            </Text>
          </View>
          <LinearGradient
            colors={["#3a9ee9", "#474ce4"]}
            end={[1.2, 1.2]}
            style={{
              borderRadius: 5
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  padding: 10,
                  color: "#fff",
                  borderRightWidth: 0.3,
                  borderColor: "#c4c4c4",
                  width: 90,
                  textAlign: "center"
                }}
              >
                Preorder
              </Text>
              <Ionicons
                name="arrow-forward"
                size={20}
                color="#fff"
                style={{ padding: 10 }}
              />
            </View>
          </LinearGradient>
        </LinearGradient>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  topIcons: {
    width: 45,
    height: 45,
    backgroundColor: "#1e2730",
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderLeftWidth: 0.4,
    borderTopWidth: 0.4,
    borderColor: "#494b4f",
    padding: 10
  },
  bottom: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
    width: "95%",
    justifyContent: "space-between",
    elevation: 10,
    borderRadius: 15,
    alignSelf: "center",
    marginVertical: 20
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
    marginTop: 40
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
  secText: {
    fontSize: 11,
    color: "#fff"
  },
  firstText: {
    fontSize: 13,
    color: "#fff"
  },
  textContainer: {
    marginTop: 20
  },
  secContainer: {
    flex: 1.2,
    padding: 20,
    backgroundColor: "#18222c",
    paddingTop: 60
  }
});
