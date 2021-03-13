import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import AlbumHeader from "../components/AlbumHeader";
import SongItemList from "../components/SongListItem";
import albumDetails from "../data/albumDetails";

import { LinearGradient } from "expo-linear-gradient";
import { EvilIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const AlbumScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <LinearGradient
      colors={["#95565D", "transparent", "transparent"]}
      start={{ x: 0.0, y: 0.0 }}
      end={{ x: 0.5, y: 1.8 }}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{ marginHorizontal: 10 }}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            <Ionicons name="arrow-back" size={32} color={"white"} />
          </TouchableOpacity>
          <View style={styles.icon}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{ marginHorizontal: 10 }}
            >
              <EvilIcons name="heart" size={35} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <SimpleLineIcons
                name="options-vertical"
                size={22}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={albumDetails.songs}
          renderItem={({ item }) => <SongItemList song={item} />}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
          ListFooterComponent={<View style={{ height: 100 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 5,
  },
  icon: {
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});

export default AlbumScreen;
