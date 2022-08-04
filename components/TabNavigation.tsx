import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { FC } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  name: string;
}

interface Item {
  id: number;
  name: string;
  icon: string;
}

const iconDetails: Item[] = [
  {
    id: 1,
    name: "Home",
    icon: "home-outline"
  },
  {
    id: 2,
    name: "Person",
    icon: "person-outline"
  },
  {
    id: 3,
    name: "Settings",
    icon: "settings-sharp"
  },
  {
    id: 4,
    name: "Bookmark",
    icon: "bookmark-sharp"
  }
];

const TabNavigation: FC<Props> = (props) => {
  const navigation = useNavigation<any>();

  const Icon: FC<Item> = (item) => {
    return item.name === props.name ? (
      <LinearGradient
        colors={["#3a9ee9", "#474ce4"]}
        end={[1.2, 1.2]}
        style={{
          borderRadius: 5
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Ionicons
            name={item.icon}
            size={20}
            color={item.name === props.name ? "#fff" : "#8e99ab"}
            style={{ padding: 10 }}
          />
          <Text
            style={{
              display: item.name === props.name ? "flex" : "none",
              padding: 10,
              color: "#fff",
              borderLeftWidth: 0.3,
              borderColor: "#c4c4c4"
            }}
          >
            {item.name}
          </Text>
        </Pressable>
      </LinearGradient>
    ) : (
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center"
        }}
        onPress={() => navigation.navigate(item.name)}
      >
        <Ionicons name={item.icon} size={20} color="#8e99ab" />
        <Text
          style={{
            display: item.name === props.name ? "flex" : "none",
            marginLeft: 14,
            color: "#fff"
          }}
        >
          {item.name}
        </Text>
      </Pressable>
    );
  };
  return (
    <View style={styles.bottom}>
      {/* <Icon name="Home" />
      <Icon name="Profile" />
      <Icon name="Settings" />
      <Icon name="Bookmark" /> */}
      {iconDetails.map((item) => (
        <Icon name={item.name} id={item.id} icon={item.icon} />
      ))}
    </View>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  bottom: {
    width: "90%",
    backgroundColor: "#202833",
    elevation: 10,
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    borderLeftWidth: 0.4,
    borderTopWidth: 0.4,
    borderColor: "#37404f",
    padding: 10,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    flexDirection: "row"
  }
});
