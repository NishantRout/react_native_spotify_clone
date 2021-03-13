import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumProps = {
  album: Album;
};

const AlbumComponent = (props: AlbumProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    //console.log(`Album Pressed: ${props.album.artistsHeadline}`);
    navigation.navigate("AlbumScreen", { id: props.album.id });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress}>
        {/* Image of the album */}
        <Image source={{ uri: props.album.imageUri }} style={styles.image} />
        {/* Artists Headline */}
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default AlbumComponent;
