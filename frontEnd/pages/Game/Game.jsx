import { useRoute } from "@react-navigation/native";
import { s } from "./Game.style";
import { GameBody } from "../../components/GameBody/GameBody";
import { GameHeader } from "../../components/GameHeader/GameHeader";
import * as React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SettingsContext } from "../../SettingsContext";

export function Game({ gameContent, fetchNewContent, topScores, setTopScores, attempts, setAttempts}) {


    const { params } = useRoute();
    const nav = useNavigation();
    const trackTopScores = React.useContext(SettingsContext).general.topScoreTracking;

    const [prevLength, setPrevLength] = React.useState(0);
    const [contentNumber, setContentNumber] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [currDef, setCurrDef] = React.useState("");
    const [currAnswers, setCurrAnswers] = React.useState([]);
    const [definitions, setDefinitions] = React.useState([]);
    const [answers, setAnswers] = React.useState([[]]);
    const [lastCorrect, setLastCorrect] = React.useState(null);
    const [failed, setFailed] = React.useState(false);
    const [fetching, setFetching] = React.useState(false);
    const [firstLength, setFirstLength] = React.useState();

    const navEndGame = endcase => {
        if (trackTopScores) {
             let tempAttempts = attempts;
            if (tempAttempts) {
                tempAttempts[params.difficulty] += 1;
                setAttempts(tempAttempts);
            }
            let tempTopScores = topScores;
            if (tempTopScores) {
                if (tempTopScores[params.difficulty].length == 0) {
                tempTopScores[params.difficulty] = [score, 0, 0];
                } else {
                let entry = 3;
                for (
                    let i = 0;
                    i < tempTopScores[params.difficulty].length;
                    i++
                ) {
                    if (score > tempTopScores[params.difficulty][i]) {
                    entry = i;
                    break;
                    }
                }
                let newVal = score;
                let oldVal = null;
                for (
                    let i = entry;
                    i < tempTopScores[params.difficulty].length;
                    i++
                ) {
                    oldVal = tempTopScores[params.difficulty][i];
                    tempTopScores[params.difficulty][i] = newVal;
                    if (i === 2) {
                    break;
                    } else {
                    newVal = oldVal;
                    }
                }
                }
            }
            setTopScores(tempTopScores);
        }
       
        nav.navigate("EndGame", { endCase: endcase, score: score, difficulty: params.difficulty });
    }


    function getTime() {
        if (params.difficulty == "easy") {
            return 15;
        } else if (params.difficulty == "medium") {
            return 10;
        } else if (params.difficulty == "hard") {
            return 5;
        }
    }

    const [time, setTime] = React.useState(getTime());

    React.useEffect(() => {

        if (gameContent?.length > 0) {
            let definitionsTemp = definitions;
            let answersTemp = answers;
            let index = answers.length - 1;
            let limit = 1;
            if (index > 2) {
                limit = 0;
            }
            
            console.log(index);
            for (let i = index; i < gameContent.length - limit - 1; i++) {
                answersTemp.push([]);
            }

            for (let i = index + 1; i < gameContent.length; i++) {
              definitionsTemp.push(gameContent[i][0]);
              answersTemp[i - limit].push(gameContent[i][1]);
              answersTemp[i - limit].push(gameContent[i][2]);
              answersTemp[i - limit].push(gameContent[i][3]);
              answersTemp[i - limit].push(gameContent[i][4]);
              console.log(i);
            }
            setAnswers(answersTemp);
            setDefinitions(definitionsTemp);
            if (contentNumber == 0) {
                setCurrDef(definitionsTemp[0]);
                setCurrAnswers(answersTemp[0]);
            }
            setPrevLength(gameContent.length);
            console.log(definitionsTemp);
            console.log(answersTemp);
            setFetching(false);
            if (limit > 0) {
                setFirstLength(definitionsTemp.length);
            }
        } 

    }, [gameContent]);

    React.useEffect(() => {
        if (lastCorrect) {
            if (contentNumber >= definitions.length - 15 && !fetching) {
                fetchNewContent();
                setFetching(true);
            }   

            setScore(score + 1);
            setTime(getTime());

            let tempContentNumber = contentNumber + 1;
            if (tempContentNumber == firstLength || definitions[tempContentNumber] == undefined || definitions[tempContentNumber].length > 200) { 
                tempContentNumber += 1;
            }
            setContentNumber(tempContentNumber);
            setLastCorrect(null);
            setCurrDef(definitions[tempContentNumber]);
            setCurrAnswers(answers[tempContentNumber]);

        } else if (lastCorrect == false) {
            setFailed(true);
            navEndGame("WRONG ANSWER");
        } 
    }, [lastCorrect]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime((superFreshTime) => superFreshTime - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    React.useEffect(() => {
        if (time == 0 && !failed) {
            navEndGame("TIME UP");
        }
    }, [time]);


    return (
        <View style={s.container}>
            <GameHeader highestScore={topScores[params.difficulty][0]} score={score} time={`${Math.floor(time / 60)}:${(time % 60).toString().padStart(2, "0")}`} style={s.GameHeader} difficulty={params.difficulty} currentDef={currDef}/>
            <GameBody style={s.GameBody} currentAnswers={currAnswers} setLastCorrect={setLastCorrect}/>
        </View>
    );
}