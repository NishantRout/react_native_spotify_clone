import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: 210,
    height: 210,
    margin: 15,
    marginTop: 30,
    marginBottom: 30,
  },
  name: {
    color: "white",
    fontSize: 28,
    fontWeight: "700",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  creator: {
    color: "lightgray",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: 13,
  },
  likes: {
    color: "lightgray",
    fontWeight: "600",
    textTransform: "uppercase",
    letterSpacing: 0.8,
    fontSize: 13,
  },
  button: {
    backgroundColor: "#1CB954",
    paddingVertical: 18,
    paddingHorizontal: 60,
    borderRadius: 50,
    marginBottom: 20,
    marginTop: 4,
  },
  buttonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
  },
});

export default styles;
