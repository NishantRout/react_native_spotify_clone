import * as React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";

export default function TabOneScreen() {
  return (
    <View>
      <FlatList
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
