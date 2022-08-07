let secret;
let guess;
let try1;
let message;
let bulls;
let cows;

startGame();

function startGame(){
    secret = random();
    message = "Введите своё число: ";
    while (true) {
        guess = prompt(message);
        if (guess == null) {
            alert('Игра была завершена.');
            break;
        }
        if (!isValid(guess)) {
            alert('Пожалуйста, введите четырёхзначное число из уникальных цифр.');
            continue;
        }
        if (guess == secret) {
            alert('Вы выйграли!');
            break;
        } 
        check(secret, guess);
        message = `${guess} - ${bulls} быков и ${cows} коров.\n${message}`; 
    }
}

function isValid(number){
    const pattern = /^\d{4}$/;
    if (!pattern.test(number)) {
        return false;
    }
    for (let i = 0; i < number.length; i++) {
        if (number.lastIndexOf(number[i]) !== i) {
            return false;
        }
    }
    return true;
}

function check(secret, guess) {
    bulls = 0;
    cows = 0;
    for (let i = 0; i < guess.length; i++) {
        const index = secret.indexOf(guess[i]);
        if (index === i) {
            bulls++;
        } else if (index > -1) {
            cows++;
        }
    }
}

function random(){
    return '2053';
}