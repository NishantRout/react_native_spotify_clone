import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 79,
    backgroundColor: "#131313",
    width: "100%",
    borderBottomWidth: 2,
    borderColor: "#000",
    flexDirection: "column",
    //alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
  },
  progress: {
    height: 3,
    //width: "100%",
    backgroundColor: "#bcbcbc",
  },
  icon: {
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 0.2,
  },
  leftContainer: {
    flexDirection: "row",
    marginHorizontal: 0,
    marginVertical: 0,
    alignItems: "center",
    flex: 0.8,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
  image: {
    width: 75,
    height: 75,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    //fontFamily: "space-mono",
  },
  artist: {
    color: "lightgray",
    fontSize: 16,
    fontWeight: "600",
    //fontFamily: "space-mono",
  },
});

export default styles;
