export const CHOOSE_COLOR = (difficulty, easyColor, mediumColor, hardColor) => {
    if (difficulty === "easy") {
        return easyColor;
    } else if (difficulty === "medium") {
        return mediumColor;
    } else if (difficulty === "hard") {
        return hardColor;
    }
}