import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    marginRight: 20,
  },
  leftContainer: {
    flexDirection: "row",
    marginHorizontal: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 16,
  },
  image: {
    width: 70,
    height: 70,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    //fontFamily: "space-mono",
    paddingBottom: 3,
  },
  artist: {
    color: "lightgray",
    fontSize: 15,
    fontWeight: "500",
    //fontFamily: "space-mono",
    paddingTop: 3,
  },
});

export default styles;
