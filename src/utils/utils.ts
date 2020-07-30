export const isRemember = (callback: () => void) => {
    const rand = Math.random()
    const percentage = 0.3;
    if (rand > percentage) {
        return true
    }
    else {
        callback()
        return false
    }
}

export const isMatch = (human: string, computer: string) => {
    return human.toLowerCase()[0] === computer[computer.length - 1] ? true : false;
};

export const isContain = (answer: string, usedAnswers: string[]) => {
    let counter = 0;
    usedAnswers.forEach(item => {
        item === answer && counter++;
    });
    return counter > 1 ? true : false;
};

export const setInitial = (nameList: string[]) => {
    return nameList[Math.floor(Math.random() * nameList.length)];
}

export const increment = (score: number, callback: (c: number) => void) => {
    let currentScore = score
    currentScore++;
    callback(currentScore)
}