import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 0.5,
  },
  top: {
    flexGrow: 1,
    flexDirection: "row",
    paddingHorizontal: "2%",
  },
  backSign: {
    fontSize: 40,
  },
  exit: {
    fontSize: 20,
    paddingTop: "3.5%",
  },
  spacer: {
    flexGrow: 1,
  },
  mode: {
    fontSize: 15,
    paddingTop: "4%",
  },
  difficulty: {
    fontSize: "fit-content",
    paddingTop: "4%",
  },
  middle: {
    flexGrow: 4,
    flexDirection: "row",
  },
  caption: {
    fontSize: 20,
  },
  midContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    width: "50%"
  },
  time: {
    fontSize: 60,
  },
  counter: {
    fontSize: 60,
  },
  bottom: {
    flexGrow: 5,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  define: {
      fontSize: 26,
      alignSelf: "flex-start",
      paddingLeft: "7%",
  },
});