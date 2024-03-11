import { View } from "react-native";
import { s } from "./GameHeader.style";
import { Txt } from "../Txt/Txt";

export function GameHeader() {
    return (
      <View style={s.container}>
        <View style={s.top}>
          <Txt style={s.backSign}>{"<"}</Txt>
          <Txt style={s.exit}> Exit</Txt>
          <View style={s.spacer} />
          <Txt style={s.mode}>Mode: </Txt>
          <Txt style={s.difficulty}>Easy</Txt>
        </View>
        <View style={s.middle}>
          <View style={s.midContainer}>
            <Txt style={s.caption}>Time Left:</Txt>
            <Txt style={s.time}>0:00</Txt>
          </View>
          <View style={s.midContainer}>
            <Txt style={s.caption}>Score:</Txt>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Txt style={s.counter}>0</Txt>
              {/*<Txt style={{ fontSize: 50}}>🔥</Txt>*/}
            </View>
          </View>
        </View>
        <View style={s.bottom}>
          <Txt style={s.define}>Define:</Txt>
          <Txt style={s.word}>SOME WORD</Txt>
        </View>
      </View>
    );
}