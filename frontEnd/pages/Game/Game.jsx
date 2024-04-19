import * as React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { SettingsContext } from "../../SettingsContext";
import { s } from "./Game.style";
import { View } from "react-native";
import { GameBody } from "../../components/GameBody/GameBody";
import { GameHeader } from "../../components/GameHeader/GameHeader";

export function Game({ gameContent, fetchNewContent, /*rest of parameters stricitly for score tracking*/ topScores, setTopScores, attempts, setAttempts}) {

    //recieve parameters frmo the place we routed from
    const { params } = useRoute();
    const nav = useNavigation();
    //import the top score tracking from our settings
    const trackTopScores = React.useContext(SettingsContext).general.topScoreTracking;

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

    //when we have lost
    const navEndGame = endcase => {
        //checks settings first
        if (trackTopScores) {
            //handle attempts
            let tempAttempts = attempts; //passed from props
            if (tempAttempts) {
                tempAttempts[params.difficulty] += 1;
                setAttempts(tempAttempts);
            }

            //handle top scores
            let tempTopScores = topScores;
            if (tempTopScores) {
                if (tempTopScores[params.difficulty].length == 0) {
                tempTopScores[params.difficulty] = [score, 0, 0];
                } else {
                    let entry = 3;
                    for (let i = 0; i < tempTopScores[params.difficulty].length; i++) {
                        //checks if our score is greater than one in the list
                        if (score > tempTopScores[params.difficulty][i]) {
                            entry = i;
                            break;
                        }
                    }

                    let newVal = score;
                    let oldVal = null;
                    for (let i = entry; i < tempTopScores[params.difficulty].length; i++) {
                        //want this to run the last time, but not the part under it
                        oldVal = tempTopScores[params.difficulty][i];
                        tempTopScores[params.difficulty][i] = newVal;
                        newVal = oldVal;
                    }
                }
            }
            setTopScores(tempTopScores);
        }
       
        nav.navigate("EndGame", { endCase: endcase, score: score, difficulty: params.difficulty });
    }

    React.useEffect(() => {

        //updates every new load of our content list
        if (gameContent?.length > 0) {
            let definitionsTemp = definitions;
            let answersTemp = answers;
            let index = answers.length - 1;
            let limit = 1;
            if (index > 2) {
                limit = 0;
            }
            
            //TODO: DEBUG LATER, FOR NOW JUST WORKS
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
            //if we are close to having no content left, go fetch now to ensure we do not run out
            if (contentNumber >= definitions.length - 15 && !fetching) { //make sure we not already fetching
                fetchNewContent();
                setFetching(true);
            }   

            setScore(score + 1);
            setTime(getTime());

            let tempContentNumber = contentNumber + 1;
            //check if there is a problem with our definition (sometimes it bypasses our first checks)
            if (tempContentNumber == firstLength || definitions[tempContentNumber] == undefined || definitions[tempContentNumber].length > 190) { 
                tempContentNumber += 1;
            }
            //use tempcontentnumber to bypass the time that it takes for the state change
            setContentNumber(tempContentNumber);
            setLastCorrect(null);
            setCurrDef(definitions[tempContentNumber]);
            setCurrAnswers(answers[tempContentNumber]);

        } else if (lastCorrect == false) {
            //gameover
            setFailed(true);
            navEndGame("WRONG ANSWER");
        } 
    }, [lastCorrect]);

    React.useEffect(() => {
        const timer = setInterval(() => {
            //essentially allows us to force a state update on time, doesn't work with just setTime(time-1)
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