import { s } from "./GameLoading.style";
import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";

export function GameLoading({isLoaded}) {

    const { params } = useRoute();

    const difficulty = params.difficulty;
    const nav = useNavigation();

    React.useEffect(() => {
        if (isLoaded) {
            nav.navigate("Game", { difficulty: difficulty });
        }
    }, [isLoaded]);

    return (
    <View style={s.container}>
        <Txt>Loading...</Txt>
    </View>
    );
}