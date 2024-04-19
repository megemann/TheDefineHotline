import * as React from "react";
import { SettingsContext } from "../../SettingsContext";
import { CHOOSE_COLOR } from "../../util";
import { s } from "./GameHeader.style";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { Txt } from "../Txt/Txt";

export function GameHeader({ score, time, difficulty, currentDef, highestScore }) {

    const [fontSize, setFontSize] = React.useState(55);
    //our context with our data linked to personal settings
    const streakVisible = React.useContext(SettingsContext).general.highScoreIndicator;
    const nav = useNavigation();

    let color = CHOOSE_COLOR(difficulty, "green", "yellow", "red");

    //determines the font size for displaying the definition to prevent collisions
    React.useEffect(() => {
      setFontSize(Math.max(53 - currentDef.length * 0.36, 21));
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
              { streakVisible && (score > highestScore) && <Txt style={{ fontSize: 50}}>🔥</Txt>}
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