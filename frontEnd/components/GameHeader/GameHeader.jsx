import { TouchableOpacity, View } from "react-native";
import { s } from "./GameHeader.style";
import { Txt } from "../Txt/Txt";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";

export function GameHeader({ score, time, difficulty, currentDef, highestScore }) {

    const [fontSize, setFontSize] = React.useState(55);

    const nav = useNavigation();

    let color = "red";
    if (difficulty === "easy") {
        color = "green";
    }
    else if (difficulty === "medium") {
        color = "yellow";
    }

    React.useEffect(() => {
      setFontSize(Math.max(53 - currentDef.length * 0.4, 25));
    }, [currentDef]);

    return (
      <View style={s.container}>
        <View style={s.top}>
          <TouchableOpacity style={{flexDirection: "row"}} onPress={() => nav.navigate("Home") }>
            <Txt style={s.backSign}>{"<"}</Txt>
            <Txt style={s.exit}> Exit</Txt>
          </TouchableOpacity>
          <View style={s.spacer} />
          <Txt style={s.mode}>Mode: </Txt>
          <Txt style={{ 
            color: color, 
            fontSize: 15, 
            paddingTop: "4%" }}>
              {difficulty}
          </Txt>
        </View>
        <View style={s.middle}>
          <View style={s.midContainer}>
            <Txt style={s.caption}>Time Left:</Txt>
            <Txt style={s.time}>{time}</Txt>
          </View>
          <View style={s.midContainer}>
            <Txt style={s.caption}>Score:</Txt>
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <Txt style={s.counter}>{score}</Txt>
              { (score > highestScore) && <Txt style={{ fontSize: 50}}>🔥</Txt>}
            </View>
          </View>
        </View>
        <View style={s.bottom}>
          <Txt style={s.define}>Definition:</Txt>
          <Txt style={{ fontSize: fontSize, textAlign: "center" }}>{currentDef}</Txt>
        </View>
      </View>
    );
}