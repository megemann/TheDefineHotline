import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  background: {
    backgroundColor: "#827C7C",
    width: "100%",
    height: "100%",
  },
  container: {
    backgroundColor: "#827C7C",
    margin: 15,
    flex: 1,
    borderRadius: 20,
    padding: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  endCase: {
    fontSize: 30,
    marginBottom: "7%",
  },
  difficulty: {
    fontSize: 20,
    marginBottom: "7%",
  },
  score: {
    fontSize: 80,
    textAlign: "center",
    marginBottom: "5%",
  },
  topScoresContainer: {
    alignItems: "center",
    marginBottom: "15%",
  },
  exitButton: {
    backgroundColor: "#25BB4F",
    width: "100%",
    height: "10%",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 16,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  exit: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
});