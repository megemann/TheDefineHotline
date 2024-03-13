import { s } from "./GameLoading.style";
import { View } from "react-native";
import { Txt } from "../../components/Txt/Txt";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { useRoute } from "@react-navigation/native";

export function GameLoading({isLoaded}) {

    const { params } = useRoute();

    const navigation = useNavigation();
    React.useEffect(() => {
        if (isLoaded) {
            navigation.navigate("Game", { difficulty: params.difficulty });
        }
    }, [isLoaded]);

    return (
    <View style={s.container}>
        <Txt>Loading...</Txt>
    </View>
    );
}