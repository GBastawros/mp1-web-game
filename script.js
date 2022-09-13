// Create alphabet pad //
var letters = document.getElementById('alphabet');
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

for (let i = 0; i < alphabet.length; i++) {
    let letterButtons = document.createElement('button');
    letterButtons.innerHTML = alphabet[i];
    letterButtons.className = "alpha";
    letterButtons.addEventListener('click', function () {
        play(letterButtons)
    })
    letters.appendChild(letterButtons);
}
let errCounter = 0
function play(letterButtons) {

    if (wordArray.indexOf(letterButtons.innerHTML) !== -1) {
        for (let i = 0; i < wordArray.length; i++) {
            if (wordArray[i] === letterButtons.innerHTML) {
                dashes[i] = letterButtons.innerHTML
                playWordP.innerHTML = dashes.join(" ")
            }
        }
        if (playWordP.innerHTML.indexOf("_") === -1) {
            let message = document.getElementById('winner').innerHTML = "YOU WON<br>CONGRATULATIONS<br>Choose a category to play a gain";
            document.getElementById('alphabet').style.visibility = "hidden"

        }
    }
    else {
        hangmanArray[errCounter]();
        errCounter += 1
        console.log(errCounter)
    }
    if (errCounter === hangmanArray.length) {
        playWordP.innerHTML = "GAME OVER!!<br> Choose a category to play a gain"
        document.getElementById('alphabet').style.visibility = "hidden"
        errCounter = 0
        console.log(errCounter)

    }
}


// Start Play by selecting a category to create a random word//
const cars = ['CHEVROLET', 'FORD', 'MERCEDES-BENZ', 'SUBARU', 'TOYOTA', 'AUDI', 'LEXUS', 'TESLA', 'HYUNDAI',
    'CADILLAC', 'PONTIAC', 'ROLLS-ROYCE', 'LAMBORGHINI'];
const fruits = ['MANGO', 'APPLE', 'ORANGE', 'DRANGON-FRUIT', 'GRAPES', 'MANDARIN-ORANGE', 'QATERMELON', 'POMEGRANATE',
    'CAMBERRY', 'RASPBERRY', 'GRAPEFRUIT']
const vegetables = ['ARTICHOKE', 'BOK-CHOY', 'CHINESE-CABBAGE', 'CAULIFLOWER', 'CORN', 'GREEN-BEANS', 'JICAMA',
    'BUTTER-LETTUCE', 'ARCON-SQUASH', 'BUTTERNUT-SQUASH', 'ZUCCHINI', 'SNAP-SUGAR-PEAS', 'ANAHEIM-PEPPERS', 'GREEN-AND-RED-LEAF-LETTUCE']
const capitalCitieseEur = ['MARIEHAMN', 'TIRANA', 'VIENNA', 'SARAJEVO', 'COPENHAGEN', 'HELSINKI',
    'BERLIN', 'LONDON', 'LUXEMBOURG', 'REYKJAVIK', 'MOSCOW', 'STOKHOLM'];
const capitalCitiesAsia = ['KABUL', 'PHNPM-PENH', 'HONG-KONG', 'DAMASCUS', 'PYONGYANG',
    'KUWAIT-CITY', 'KUALA-LUMPUR', 'TOKYO', 'NEW-DELHI', 'BAGHDAD', 'JERUSALEM', 'MUSCAT']
const capitalCitiesAmer = ['THE-VALLEY', 'BUENOS-AIRES', 'BRIDGETOWN', 'BRAZILIA', 'OTTAWA',
    'GEORGE-TOWN', 'HAVANA', 'SANTO-DOMINGO', 'WILLEMSTAD', 'SAN-SALVADOR', 'TEGUCIGALPA', 'GUATEMALA-CITY',
    'BASSE-TERRE', 'PANAMA-CITY', 'WASHINGTON-D-C']
const capitalCitiesAust = ['CANBERRA', 'FLYING-FISH-COVE', 'WEST-ISLAND', 'WELLINGTON', 'KINGSTON']
const capitalCitiesAfr = ['ALGIERS', 'LUANDA', 'PORTO-NOVO', 'OUAGADOUGOU',
    'KINSHASA', 'CAIRO', 'ADDIS-ABABA', 'YAMOUSSOUKRO', 'PORT-LOUIS', 'BRAZZAVILLE', 'JAMESTOWN', 'MOGADISHU']
const colors = ['ALICEBLUE', 'AQUAMARINE', 'BLANCHEDALMOND', 'BLUEVIOLET', 'BURLYWOOD', 'CHARTREUSE', 'CORNFLOWERBLUE', 'DARKGOLDEND',
    'DARKOLIVEGREEN', 'DARKSLATEGRAY', 'DARKSLATEGREY']


const categoriesPad = ["Cars", "fruits", "vegetables", "Capital Cities - Europe", "Capital Cities - Asia",
    "Capital Cities - Americas", 'Capital Cities - Australia', 'Capital Cities - Africa', "Colors"];

const categories = [cars, fruits, vegetables, capitalCitieseEur, capitalCitiesAsia,
    capitalCitiesAmer, capitalCitiesAust, capitalCitiesAfr, colors];
let word;
let dashes;
let categoriesDiv = document.getElementById('categotries')
let playWordP = document.getElementById('playWord')
for (let i = 0; i < categoriesPad.length; i++) {
    let categoryBtn = document.createElement("button")
    categoryBtn.innerHTML = categoriesPad[i]
    categoryBtn.addEventListener('click', function () {
        document.getElementById('alphabet').style.visibility = "visible";
        document.getElementById('winner').innerHTML = ''
        wordGenerator(categoryBtn)
    })
    categoriesDiv.appendChild(categoryBtn)
}

function wordGenerator(categoryBtn) {
    ctx.clearRect(0, 0, 600, 600);
    canvas();
    errCounter =0
    for (let i = 0; i < categoriesPad.length; i++)
        if (categoryBtn.innerHTML === categoriesPad[i]) {
            word = categories[i][Math.floor(Math.random() * categories[i].length)]
        }
    console.log(word)
    dashes = wordToPlay(word)
    playWordP.innerHTML = dashes.join(" ")
}

//Convert the rundamly generated word to dashes//
let wordArray = [];
function wordToPlay(word) {
    wordArray = word.split('')
    let secretArray = [];
    for (let j = 0; j < wordArray.length; j++) {
        if (wordArray[j] !== '-') {
            secretArray.push('_')
        }
        else {
            secretArray.push('-')
        }
    }
    return secretArray
}

//drawing hangman//
var theHangman = document.getElementById('hangman');
var ctx = theHangman.getContext('2d')

function canvas(){
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth =3;
}
function baseBar() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(10, 140);
    ctx.lineTo(100, 140);
    ctx.stroke();
}
function vertBar() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(15, 140);
    ctx.lineTo(15, 10);
    ctx.stroke();
}
function horBar() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(13, 10);
    ctx.lineTo(150, 10);
    ctx.stroke();
}
function rod() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 10);
    ctx.lineTo(148, 30);
    ctx.stroke();
}
function head() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.beginPath();
    ctx.arc(148, 45, 15, 0, 2 * Math.PI);
    ctx.stroke();
}
function body() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 60);
    ctx.lineTo(148, 100);
    ctx.stroke();
}
function leftArm() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 68);
    ctx.lineTo(135, 88);
    ctx.stroke();
}
function rightArm() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 68);
    ctx.lineTo(161, 88);
    ctx.stroke();
}
function leftLeg() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 100);
    ctx.lineTo(135, 118);
    ctx.stroke();
}
function rightLeg() {
    theHangman = document.getElementById('hangman');
    ctx = theHangman.getContext("2d");
    ctx.moveTo(148, 100);
    ctx.lineTo(161, 118);
    ctx.stroke();
}
const hangmanArray = [baseBar, vertBar, horBar, rod, head, body, leftArm, rightArm, leftLeg, rightLeg];
// hangmanArray[0]()
// hangmanArray[1]()
// hangmanArray[2]()
// hangmanArray[3]()
// hangmanArray[4]()
// hangmanArray[5]()
// hangmanArray[6]()
// hangmanArray[7]()
// hangmanArray[8]()
// hangmanArray[9]()
