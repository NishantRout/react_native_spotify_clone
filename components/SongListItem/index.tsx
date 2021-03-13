import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Song } from "../../types";
import styles from "./styles";
// import { useFonts } from "expo-font";
// import * as Font from "expo-font";
// import AppLoading from "expo-app-loading";
import { SimpleLineIcons } from "@expo/vector-icons";

export type SongListItemProps = {
  song: Song;
};

// const getFonts = () => {
//   return Font.loadAsync({
//     "proxima-nova": require("../../assets/fonts/FontsFree-Net-proxima_nova_reg-webfont.ttf"),
//   });
// };

const SongItemList = (props: SongListItemProps) => {
  const { song } = props;
  //const [fontsLoaded, setFontsLoaded] = useState(false);

  //if (fontsLoaded) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {/* Image cover */}
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          {/* Title */}
          <Text style={styles.title}>{song.title}</Text>
          {/* Artist */}
          <Text style={styles.artist}>{song.artist}</Text>
        </View>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.icon}>
        <SimpleLineIcons name="options-vertical" size={20} color={"gray"} />
      </TouchableOpacity>
    </View>
  );
  //}
  // else {
  //   return (
  //     <AppLoading
  //       startAsync={getFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //       onError={() => console.log("ERROR!!")}
  //     />
  //   );
  // }
};

export default SongItemList;
