import { View, TouchableOpacity } from "react-native";
import { s } from "./EndGame.style";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Txt } from "../../components/Txt/Txt";
import * as React from "react";

export function EndGame({topScores, save}) {

    const  { params } = useRoute();
    const nav = useNavigation();
    console.log(topScores);

    const navHome = () => {
        nav.navigate("Home");
    }

    let color = "red";
    if (params.difficulty === "easy") {
      color = "#12EB1A";
    } else if (params.difficulty === "medium") {
      color = "yellow";
    }

    React.useEffect(() => {
      if (topScores !== null) {
        save();
      }
    }, [topScores]);

    const styles = {
      colorstrip: {
        backgroundColor: color, //will be difficulty
        borderRadius: 30,
        margin: 10,
        flex: 1,
      },
      title: {
        color: color,
        fontSize: 45,
        marginBottom: "7%",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 14.0,

        elevation: 16,
      },
      difficulty: {
        color: color,
        fontSize: 20,
      },
      difficultyBox: {
        marginBottom: "6%",
        flexDirection: "row",
      },
    };

    return (
      <View style={s.background}>
        <View style={styles.colorstrip}>
          <View style={s.container}>
            <Txt style={styles.title}>GAME OVER</Txt>
            <Txt style={s.endCase}>{params.endCase}</Txt>
            <View style={styles.difficultyBox}>
              <Txt style={s.difficulty}>Difficulty: </Txt>
              <Txt style={styles.difficulty}>{params.difficulty}</Txt>
            </View>
            <Txt style={s.score}>Score: {params.score}</Txt>
            <View style={s.topScoresContainer}>
              <Txt style={s.topScores}>Top Scores: </Txt>
              {
                topScores[params.difficulty].map((score, index) => {
                  if (score === params.score) {
                    console.log("here");
                    return (
                      <Txt style={{ color: color }} key={index}>
                        {score}
                      </Txt>
                    );
                  } else {
                    return (
                      <Txt key={index} style={s.topScores}>{score}</Txt>
                    )
                  }
                  
                })
              }
            </View>
            <TouchableOpacity style={s.exitButton} onPress={navHome}>
                <Txt style={s.exit}>RETURN HOME</Txt>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
}