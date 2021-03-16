import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
//import { Song } from "../../types";
import styles from "./styles";
import { FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";

const song = {
  id: "1",
  uri:
    "https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4",
  imageUri:
    "https://lite-images-i.scdn.co/image/ab67616d00001e024a1396d20b2e4a3785244eee",
  title: "High on You",
  artist: "Jeangu Macrooy",
};

const PlayerWidget = () => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status) => {
    //console.log(status);
    setIsPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);
  };

  const playCurrentSong = async () => {
    if (sound) {
      await sound.unloadAsync();
    }
    const { sound: newSound } = await Audio.Sound.createAsync(
      { uri: song.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    //play the song
    playCurrentSong();
  }, []);

  const onPlayPausePress = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || duration === null || position === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
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
          <TouchableOpacity onPress={onPlayPausePress} activeOpacity={0.5}>
            <FontAwesome
              name={isPlaying ? "pause" : "play"}
              size={23}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
