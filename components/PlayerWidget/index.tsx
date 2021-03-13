import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Song } from "../../types";
import styles from "./styles";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";

const song = {
  id: "1",
  imageUri:
    "https://lite-images-i.scdn.co/image/ab67616d00001e024a1396d20b2e4a3785244eee",
  title: "High on You",
  artist: "Jeangu Macrooy",
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Image cover */}
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          {/* Title */}
          <Text style={styles.title}>{song.title}</Text>
          {/* Artist */}
          <Text style={styles.artist}> · {song.artist}</Text>
        </View>
      </View>
      <View style={styles.icon}>
        <TouchableOpacity activeOpacity={0.5}>
          <SimpleLineIcons name="heart" size={23} color={"white"} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
          <FontAwesome name="play" size={23} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerWidget;
