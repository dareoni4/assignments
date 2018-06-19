// balance parenthesis

const balancePara = str => {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "(":
                counter--;
                break;
            case ")":
                counter++;
                if (counter > 0) return false;
        }
    }
    return counter === 0;
}

console.log(balancePara("((()))"));



const gameOfThrees = (n, counter) => {
    if(n === 1){
        return counter;
    }

    if(n % 3 === 0){
        return gameOfThrees(n / 3, counter + 1)
    }else if (n -1 % 3 !== 0){
        return gameOfThrees(n += 1, counter);
    }else if(n + 1 % 3 !== 0){
        return gameOfThrees(n -= 1, counter)
    }
}
const gameOfThrees = (n, counter) => {
    if(n === 1){
        return counter
    }
    if(n % 3 === 0){
        return gameOfThrees(n/ 3, counter + 1)
    }else if (n -1 % 3 !== 0){}
}