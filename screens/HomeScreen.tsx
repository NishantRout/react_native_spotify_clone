import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";
import { SimpleLineIcons } from "@expo/vector-icons";

export default function TabOneScreen() {
  return (
    <LinearGradient
      colors={["#4C7E6B", "transparent", "transparent"]}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.5, y: 0.8 }}
      style={{ alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity activeOpacity={0.5}>
            <SimpleLineIcons name="settings" size={26} color={"white"} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={albumCategories}
          renderItem={({ item }) => (
            <AlbumCategory title={item.title} albums={item.albums} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },
  icon: {
    marginRight: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
