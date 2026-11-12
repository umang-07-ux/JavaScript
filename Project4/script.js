// 1 se 100 ke beech random number banao (computer ka chuna hua number)
let randomNumber = (parseInt(Math.random() * 100 + 1));

// KYA: HTML ke elements ko JS mein pakadta hai
// KYUN: JS ko pata hona chahiye kis element ko padhna ya badalna hai
const submit = document.querySelector('#subt');           // KYUN: button pe click sunne ke liye
const userInput = document.querySelector('#guessField');  // KYUN: user ka likha number padhne ke liye
const guessSlot = document.querySelector('.guesses');     // KYUN: purane guesses yahan dikhane ke liye
const remaining = document.querySelector('.lastResult');  // KYUN: bache hue guesses ka number badalne ke liye
const lowOrHi = document.querySelector('.lowOrHi');       // KYUN: "too low/high" message yahan dikhane ke liye
const startOver = document.querySelector('.resultParas'); // KYUN: "Start new Game" button isi ke andar judega

// Ek khali <p> banao, baad mein isme "Start new Game" daalenge
const p = document.createElement('p');

let prevGuess = [];  // KYUN: user ke guesses ek list mein yaad rakhne ke liye
let numGuess = 1;    // KYUN: guess count karne ke liye. Pehle guess se pehle 1 se shuru

let playGame = true; // game chal raha hai ya nahi
if (playGame) {
    // Submit button pe click hone ka wait karo
    submit.addEventListener('click', function (e) {
        e.preventDefault();                      // page reload hone se roko
        const guess = parseInt(userInput.value); // input ki value ko number banao
        console.log(guess);                      // console mein check karne ke liye
        validateGuess(guess);                    // guess ko check karne bhejo
    })
}

// Check karo ki guess sahi format mein hai ya nahi
function validateGuess(guess) {
    if (isNaN(guess)) {
        // number nahi hai (khali ya text)
        alert('Please enter a valid number');
    }
    else if (guess < 1 || guess > 100) {
        // range ke bahar hai
        alert('Please enter the number between range 1 to 100');
    }
    else {
        prevGuess.push(guess);                   // guess ko list mein daalo
        if (numGuess === 10) {
            // aakhri guess ho chuka hai
            displayGuess(guess);                 // guess screen pe dikhao
            displayMessage(`Game over, random number was ${randomNumber}`); // game over message
            endGame();                           // game band karo
        }
        else {
            displayGuess(guess);                 // guess screen pe dikhao
            checkGuess(guess);                   // sahi hai ya nahi dekho
        }
    }
}

// Guess ko asli number se compare karo
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("You guessed it right");  // jeet gaye
        endGame();                               // game band karo
    }
    else if (guess < randomNumber) {
        displayMessage("Number is too low");     // guess chhota hai
    }
    else if (guess > randomNumber) {
        displayMessage("Number is too high");    // guess bada hai
    }
}

// KYA: guess screen pe dikhata hai aur count update karta hai
// KYUN: user ko apni history aur bache hue guesses dikhne chahiye
function displayGuess(guess) {
    userInput.value = ''                         // KYUN: agla guess likhne ke liye box khali chahiye
    guessSlot.innerHTML += `${guess}  `;         // KYUN: += se purane guesses ke saath naya jud jata hai, replace nahi hota
    numGuess++;                                  // KYUN: ek guess ho gaya, count 1 badhao
    remaining.innerHTML = `${11 - numGuess}`;    // KYUN: (11 - count) se bache hue guesses nikalte hain
}

// KYA: message screen pe dikhata hai
// KYUN: message dikhane ka kaam kai jagah hai, ek function mein likha to baar-baar nahi likhna padta
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;   // KYUN: h2 mein daalne se message bada aur saaf dikhta hai
}

// KYA: game rokta hai aur "Start new Game" dikhata hai
// KYUN: jeet ya haar ke baad user aur guess na kar sake, aur dobara khel sake
function endGame() {
    userInput.value = '';                        // KYUN: input mein kuch bacha ho to hata do
    userInput.setAttribute('disabled', '');      // KYUN: disabled input mein user type nahi kar sakta
    p.classList.add('button');                   // KYUN: CSS mein "button" class se ye button jaisa dikhega
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`; // KYUN: id isliye di taaki neeche newGame() isko pakad sake
    startOver.appendChild(p);                    // KYUN: bana hua <p> page pe tabhi dikhta hai jab use kisi element mein joda jaye
    playGame = false;                            // KYUN: yaad rakhne ke liye ki game ruk gaya
    newGame();                                   // KYUN: abhi button bana hai, isliye abhi uska click sunna shuru karo
}

// KYA: "Start new Game" button ka click sunta hai aur game reset karta hai
// KYUN: user dobara khel sake bina page reload kiye
function newGame() {
    const newGameButton = document.querySelector('#newGame'); // KYUN: button endGame mein abhi bana hai, abhi pakad sakte hain
    newGameButton.addEventListener('click', function (e) {
        randomNumber = (parseInt(Math.random() * 100 + 1));   // KYUN: naye game ke liye naya number chahiye
        prevGuess = [];                          // KYUN: purani list saaf, naye game ki nayi list
        numGuess = 1;                            // KYUN: count wapas shuru se
        guessSlot.innerHTML = '';                // KYUN: screen se purane guesses hatane hain
        remaining.innerHTML = `${11 - numGuess}`; // KYUN: bache hue guesses ka number wapas shuru wala dikhao
        userInput.removeAttribute('disabled');   // KYUN: input band tha, user ko phir se likhne dena hai
        startOver.removeChild(p);                // KYUN: naye game mein "Start new Game" button nahi dikhna chahiye
        playgame = true;                         // KYUN: game wapas chalu hai
    })
}