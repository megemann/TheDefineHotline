import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  divider: {
    backgroundColor: "black",
    height: 1,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: "3%",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#827C7C",
    width: "100%",
    height: 37,
  },
  rowTitle: {
    textAlign: "left",
    fontSize: 17,
    fontFamily: "InriaSerif-Bold",
  },
  rowButtonOn: {
    backgroundColor: "#BDBDBD",
    borderRadius: 25,
    borderWidth: 1,
    width: 50,
    height: 25,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 1
  },
  rowButtonOff: {
    backgroundColor: "#827C7C",
    borderRadius: 25,
    borderWidth: 1,
    width: 50,
    height: 25,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: 1,
  },
  circleOn: {
    height: 21,
    width: 21,
    backgroundColor: "white",
    borderRadius: 21 / 2,
    borderWidth: 1,
    borderColor: "black",
  },
  circleOff: {
    height: 21,
    width: 21,
    backgroundColor: "black",
    borderRadius: 21 / 2,
    borderWidth: 1,
    borderColor: "black",
  },
});