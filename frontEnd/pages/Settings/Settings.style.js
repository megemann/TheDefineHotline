import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  background: {
    backgroundColor: "#827C7C",
    flex: 1,
    overflowY: "scroll",
    alignItems: "center",
  },
  container: {
    marginTop: 40,
    flex: 1,
    height: 222,
    width: "85%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    maxHeight: 222,
  },
  title: {
    paddingTop: 9,
    paddingLeft: 5,
    textAlign: "left",
    fontSize: 20,
    fontFamily: "InriaSerif-Bold",
  },
  resetButton: {
    marginTop: 6.5,
    alignSelf: "center",
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "45%",
    height: 19,
    borderColor: "black",
    borderWidth: 1,
  },
  resetButtonText: {
    color: "black",
    fontSize: 13,
    fontFamily: "InriaSerif-Bold",
  },
  comingSoon: {
    position: "absolute",
    zIndex: 999,
    top: "45%",
    left: "10%",
    transform: [{ rotate: "30deg" }],
    fontSize: 40,

  },
  defaultButtonText: {
    fontSize: 17,
    fontFamily: "InriaSerif-Bold",
  },
  confirmation: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 15
  }
});