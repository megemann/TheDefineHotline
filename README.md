![banner](https://github.com/megemann/TheDefineHotline/assets/89821947/8207b37a-a9db-4e85-8188-ff58b74645c0)
# The Define Hot-line
'The Define Hot-line' is a fun vocabulary game that uses random words and definitions to test your vocabulary skills. You have a varying amount of time to pair a definition to a word, and the objective is to get the highest streak possible! There are three modes: Easy, Medium, and Hard; each mode gives you respectively 15, 10, and 5 seconds to answer. This project makes use of React Native, React Native Reanimated, as well as a few API's and a collection of other libraries.
## Table of Contents
* [Getting Started](#Getting-Started)
* [Demo](#Demo)
* [Features/Highlights](#Features-&-Highlights)
* [API Reference](#API-Reference)
* [Outline](#Outline)

## Getting Started
This project can either be run locally or access through Expo's online platform
### Expo Go

Running this project requires the installation of '[Expo Go][expoGo]', a mobile app that allows you to test applications in development. Once downloaded, any Expo QR code scanned with the camera of your device will send you directly to the build.

Test most recent production version here:
[V1.0][prodbuild]

### Installation
1. Clone the repo
```bash
    https://github.com/megemann/TheDefineHotline.git
```
2. Get an API Key at [Merriam-Webster][dictionaryAPI]

3. Create an `.env` file and paste the following code:
```.env
    EXPO_PUBLIC_DICT_API_KEY=*YOUR API KEY HERE*
``` 

4. To deploy this project run

```bash
    cd frontEnd
    npm install
    npx expo start
```

5. Scan the QR code provided for you in the terminal

Note: Deploying this project locally still requires the ['Expo Go'][expoGo] application. You are also required to be on the same network as the device running the application.


## Demo
<div align="center">
    
![Untitled video - Made with Clipchamp](https://github.com/megemann/TheDefineHotline/assets/89821947/bead94df-74ea-492e-a7c6-c684233711fa)

Full demo is located [here](https://github.com/megemann/TheDefineHotline/tree/main/display/Videos-Gifs/DefineHotlineDemo.mp4)

</div>

## Features & Highlights
#### Animations

<div align="center">
    
Loading Screen:
![LoadingScreenGIF](https://github.com/megemann/TheDefineHotline/assets/89821947/64dbb780-977a-4bf9-8d86-620f3e49a18b)
Difficulty Screen:
![DifficultyGIF](https://github.com/megemann/TheDefineHotline/assets/89821947/4f773bc3-3d8d-4d30-89fd-d5b5b4246676)

</div>

#### Async Storage
On native applications, we can use a devices Asyncronous storage to store local information personalized to the user. In 'The Define Hotline' this is used with Settings, Top Scores, and Attempt tracking. This allows the saving of this information even if the application is reloaded.
GIFs
#### Settings
Examples of all of the following are found [here](https://github.com/megemann/TheDefineHotline/tree/main/display/Videos-Gifs)
- Top Score Tracking
- High Score Indicator
- Constant Difficulty
- Random Difficulty
- Resetting Scores

#### Definitions and Words
The definitions and words both come from different [API's](#API-Reference). This data is then evaluated to filter out the undefined or faulty definitions to prevent it from having to be handled later.

#### Honorable Mentions
- React Navigation
- Contexts
- Specialized Fonts
- Screen size friendly design

## API Reference

#### Get random words

```http
  GET random-word-api.herokuapp.com/word?number=${number}
```

| Parameter | Type | Description                           |
| :-------- | :----| :-------------------------------------|
| `number` | `int` | **Optional**. Number of words desired |

#### Get definition

```http
  GET dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${API_KEY}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `API_KEY`      | `string` | **Required**. dictionary API Key |
| `word`| `string` | **Required**. Word needed to be defined




## Outline
### React Native
To make this project, I familiarized myself with the sublibary of React for native development, React Native. React Native is primarily for mobile devices, where applications run directly on the device itself. Additionally, the reuse of components as allowed by React Native was also very useful in this project, as I was able to create custom text and headers to be used on many pages.

### Figma, CSS, React Native Reanimated
As a first draft I created a 'figma' project to design the page, so I would have something to reference when styling. I then converted to CSS, trying to replicate the project the best I could using the flexbox system as well as trying to keep components friendly for any size screen. After finalizing my design of the rest of the project, I then moved to on animating transitions and other components, which mostly takes use of CSS's 'transform' options that allow for easy displacement of objects.

![figma](https://github.com/megemann/TheDefineHotline/assets/89821947/1c5c620f-3783-4b99-896e-6186760afe1b)

### Technologies
A number of Libraries were used in this project in order to streamline development. These include:
- [Expo][expo] ~50.0.11
- [Axios][axios] ^1.6.7
- [Metro][metro] ^0.80.8
- [React][react] 18.2.0
- [React Native][reactNative] 0.73.4
- [React Native Async-Storage][reactNativeAsync] 1.21.0
- [React Native dotenv][reactNativedotenv] ^3.4.11
- [React Native Reanimated][reactNativeReanimated] ~3.6.2
- [React Native Safe Area Context][reactNativeSafeArea] ^4.9.0
- [React Navigation][reactNavigation] ^6.1.15

### Challenges

- Combining seperate API's data into one object
- Seperating the UI thread (Animations) from the standard level thread
- Handling irregular data from the dictionary API
- Saving Async data using states (Not instantly updating)
- Displaying components generally for any screen size


### Roadmap

- [ ] More user customization (Avatar)
- [ ] Leaderboards
- [ ] Different modes (Word -> Definition, Lighting Rounds)
- [ ] More/Higher quality animations

### Skills Aquired

- CSS styling
- React Native animating
- Taking advantage of creating custom objects
- UseContext
- Generalizing components
- Using Asyncronous Storage
- Using API's
- Designing for Native Devices

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Austin Fairbanks - ajfairbanks2005@gmail.com - [LinkedIn](www.linkedin.com/in/ajf2005)

## Acknowledgements
- <a href="https://www.flaticon.com/free-icons/award" title="award icons">Award icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/leaderboard" title="leaderboard icons">Leaderboard icons created by Vector Stall - Flaticon</a>
- <a href="https://www.flaticon.com/free-icons/menu" title="menu icons">Menu icons created by Freepik - Flaticon</a>
- [Merriam Webster (Definitions API)][dictionaryAPI]
- [Random Words API][randomWords]
- [Figma][figma]

[prodbuild]: <https://expo.dev/preview/update?message=V1.0&updateRuntimeVersion=1.0.0&createdAt=2024-04-18T14%3A26%3A36.768Z&slug=exp&projectId=1daa38df-5825-4277-b301-9df435cee2bf&group=bf04e7c5-c219-403e-af4f-6bf581f3e14f> "Project in Expo"
[dictionaryAPI]: <https://dictionaryapi.com/> "Dictionary API"
[expoGo]: <https://expo.dev/go> "Expo Go"
[expo]: <https://expo.dev/> "Expo"
[axios]: <https://axios-http.com/docs/intro> "Axios"
[metro]: <https://docs.expo.dev/guides/customizing-metro/> "Metro"
[react]: <https://react.dev/> "React"
[reactNative]: <https://reactnative.dev/> "React Native"
[reactNativeAsync]: <https://docs.expo.dev/versions/latest/sdk/async-storage/> "Async Storage"
[reactNativedotenv]: <https://docs.expo.dev/guides/environment-variables/> "dotenv"
[reactNativeReanimated]: <https://docs.swmansion.com/react-native-reanimated/> "reanimated"
[reactNativeSafeArea]: <https://reactnative.dev/docs/safeareaview> "safe area"
[reactNavigation]: <https://reactnavigation.org/> "React Navigation"
[randomWords]: <https://random-word-api.herokuapp.com/home> "Random Words"
[figma]: <https://www.figma.com/> "Figma"
