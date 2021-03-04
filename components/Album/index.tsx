import React from "react";
import { Image, Text, View } from "react-native";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      {/* Image of the album */}
      <Image source={{ uri: props.album.imageUri }} style={styles.image} />
      {/* Artists Headline */}
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  );
};

export default AlbumComponent;
