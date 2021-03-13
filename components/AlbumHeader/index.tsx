import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: Album;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <View style={styles.container}>
      {/* Cover Image */}
      <Image style={styles.image} source={{ uri: album.imageUri }} />
      {/* Album Name */}
      <Text style={styles.name}>{album.name}</Text>
      {/* Creator & No. of Likes */}
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by} · </Text>
        <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
      </View>
      {/* Play Button */}
      <TouchableOpacity activeOpacity={0.5}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Play</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
