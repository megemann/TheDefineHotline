import { useRoute } from "@react-navigation/native";
import { s } from "./Game.style";
import { GameBody } from "../../components/GameBody/GameBody";
import { GameHeader } from "../../components/GameHeader/GameHeader";
import * as React from "react";
import { View } from "react-native";

export function Game({ gameContent }) {

    const { params } = useRoute();

    const [contentNumber, setContentNumber] = React.useState(0);
    const [currDef, setCurrDef] = React.useState("");
    const [nextDef, setNextDef] = React.useState("");
    const [currAnswers, setCurrAnswers] = React.useState([]);
    const [nextAnswers, setNextAnswers] = React.useState([]);
    const [definitions, setDefinitions] = React.useState([]);
    const [answers, setAnswers] = React.useState([[]]);


    React.useEffect(() => {

        if (gameContent?.length > 0) {
            let definitionsTemp = [];
            let answersTemp = [];
            for (let i = 0; i < gameContent.length; i++) {
                answersTemp.push([]);
            }
            
            for (let i = 0; i < gameContent.length; i++) {
              definitionsTemp.push(gameContent[i][0]);
              answersTemp[i].push(gameContent[i][1]);
              answersTemp[i].push(gameContent[i][2]);
              answersTemp[i].push(gameContent[i][3]);
              answersTemp[i].push(gameContent[i][4]);
            }
            setAnswers(answersTemp);
            setDefinitions(definitionsTemp);
            setNextAnswers(answersTemp[0]);
            setNextDef(definitionsTemp[0]);
        } 

    }, [gameContent]);

    return (
        <View style={s.container}>
            <GameHeader style={s.GameHeader} difficulty={params.difficulty} definitions={definitions}/>
            <GameBody style={s.GameBody}/>
        </View>
    );
}