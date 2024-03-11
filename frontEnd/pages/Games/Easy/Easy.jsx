import { View } from "react-native";
import { Txt } from "../../../components/Txt/Txt";
import { s } from "./Easy.style";
import { GameHeader } from "../../../components/GameHeader/GameHeader";

export function Easy() {
    return (
        <View style={s.container}>
            <GameHeader style={s.header} />
            <View style={s.body}>
                <Txt>Easy</Txt>
            </View>
        </View>
    );
}