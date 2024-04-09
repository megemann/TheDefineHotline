import axios from 'axios';
const KEYDICT = "5e68d725-07a7-4b21-b218-6fd6df63269d";
const KEYTHES = "d09b8761-e751-45c6-be71-e8a5b31d70c3";

export class WordAPI {
    static async fetchGameContent() {

        //all correct answers
        let randomWords = [];
        randomWords = (await axios.get(`https://random-word-api.herokuapp.com/word?number=15`)).data;//15

        let defList = [];
        let count = 0;
        //for each word get the definition
        for (let i = 0; i < 15; i++) { //15
            const response = (await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/${randomWords[i]}?key=${KEYDICT}`)).data[0];
            let type = typeof response;
            //returns either undefined, or a string list that contains similarly spelled words
            if (type === "undefined" || type === "string" || typeof response[0] === "string") { 
                defList.push(null);
            } else {
                // add definition to our list
                defList.push(response.shortdef[0]);
                count++;
            }
        }

        let answerList = [];
        let loop = 0;
        let appeared = false;
        //get a few extra words to enusre totally unique answers
        let dummyWords = (await axios.get(`https://random-word-api.herokuapp.com/word?number=48`)).data;
        while (answerList.length <= 45) {
            for (let i = 0; i < 15; i++) {
            if (randomWords[i] === dummyWords[loop]) {
                appeared = true;
                break;
            }
            }
            if (appeared) {
                appeared = false;
            } else {
                answerList.push(dummyWords[loop]);
            }
            loop++;
        }  

        //now, lets combine all the lists
        let finalList = [];
        for (let i = 0; i < count; i++) {
            finalList.push([]);
        }

        //check for null or undefined
        let offset = 0;
        for (let i = 0; i < defList.length; i++) {
            if (defList[i] === null || defList[i] === undefined) {
                offset++;
            } else {
                finalList[i - offset].push(defList[i]);
                finalList[i - offset].push(randomWords[i]);
                finalList[i - offset].push(answerList[i * 3]);
                finalList[i - offset].push(answerList[i * 3 + 1]);
                finalList[i - offset].push(answerList[i * 3 + 2]);
            }
        }
        return finalList;
    }
}

