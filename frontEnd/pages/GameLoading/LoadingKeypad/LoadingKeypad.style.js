import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        marginTop: "15%",
    },
    button: {
        borderWidth: 3,
        width: 77,
        height: 77,
        borderRadius: 77 / 2,
        borderColor: "black",
        backgroundColor: "#BDBDBD",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "3%",
    },
    callButton: {
        borderWidth: 3,
        width: 77,
        height: 77,
        borderRadius: 77 / 2,
        borderColor: "black",
        backgroundColor: "#42ab469b",
        opacity: 1,
        zIndex: 999,
        justifyContent: "center",
        alignItems: "center",
    },
    callButtonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        paddingTop: 17,
        justifyContent: "space-between",
        flexDirection: "row",
    },
})