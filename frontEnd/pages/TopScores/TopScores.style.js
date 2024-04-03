import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#827C7C",
  },
  container: {
    height: "90%",
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  scoreContainer: {
    height: "30%",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: "5%",
    flex: 1,
  },
  titleContainer: {
    flexDirection: "row", 
    paddingBottom: "1.5%",
    backgroundColor: "#0000001c",
    borderWidth: 2,
    borderColor: "black",
    paddingHorizontal: "1%"
  },
  title: {
    fontSize: 35,
    flex: 1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 14.0,

    elevation: 16,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "black",
  },
  score: {
    marginTop: "1%",
    fontSize: 40,
    flex: 1,
  },
});