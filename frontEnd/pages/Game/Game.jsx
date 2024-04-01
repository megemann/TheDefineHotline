import { useRoute } from "@react-navigation/native";
import { s } from "./Game.style";
import { GameBody } from "../../components/GameBody/GameBody";
import { GameHeader } from "../../components/GameHeader/GameHeader";
import * as React from "react";
import { View } from "react-native";

export function Game({ gameContent, setRerender }) {

    const { params } = useRoute();

    const [contentNumber, setContentNumber] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [currDef, setCurrDef] = React.useState("");
    const [currAnswers, setCurrAnswers] = React.useState([]);
    const [definitions, setDefinitions] = React.useState([]);
    const [answers, setAnswers] = React.useState([[]]);
    const [lastCorrect, setLastCorrect] = React.useState(null);
    const [failed, setFailed] = React.useState(false);

    function getTime() {
        if (params.difficulty == "Easy") {
            return 15;
        } else if (params.difficulty == "Medium") {
            return 10;
        } else if (params.difficulty == "Hard") {
            return 5;
        }
    }

    const [time, setTime] = React.useState(getTime());



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
            setCurrAnswers(answersTemp[0]);
            setCurrDef(definitionsTemp[0]);
        } 

    }, [gameContent]);

    React.useEffect(() => {
        if (lastCorrect) {
            let rerender = false;
            if (contentNumber == definitions.length - 1) {
                rerender = true;
                setContentNumber(0);
            } else {
                if (contentNumber == definitions.length - 5) {
                  //request new data
                }
                
            }

            setScore(score + 1);
            setTime(getTime());

            //resetTimer
            if (rerender) {
            }
            const tempContentNumber = contentNumber + 1;
            setContentNumber(tempContentNumber);
            setLastCorrect(null);
            setCurrDef(definitions[tempContentNumber]);
            setCurrAnswers(answers[tempContentNumber]);


        } else if (lastCorrect == false) {
            setFailed(true);
        } 
    }, [lastCorrect]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime((superFreshTime) => superFreshTime - 1);
            console.log(time);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        if (time == 0) {
            setFailed(true);
        }  
    }, [time])


    return (
        <View style={s.container}>
            <GameHeader score={score} time={`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`} style={s.GameHeader} difficulty={params.difficulty} currentDef={currDef}/>
            <GameBody style={s.GameBody} currentAnswers={currAnswers} setLastCorrect={setLastCorrect}/>
        </View>
    );
}