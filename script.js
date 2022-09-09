// Create alphabet pad //
function alphabetpad() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (let i = 0; i < alphabet.length; i++) {
        letterButtons = document.createElement('button');
        letterButtons.innerHTML = alphabet[i];
        letterButtons.onclick = play()
        document.getElementById('alphabet').appendChild(letterButtons);
    }
}
alphabetpad()

// Start Play by selecting a category to create a random word//
const cars = ['chevrolet', 'ford', 'mercedes', 'subaru', 'toyota'];
const cities = ['madison', 'chicago', 'cairo', 'manchester'];
const fruits = ['banana', 'mango', 'apple']
const categoriesPad = ["cars", "cities", "fruits"];

function startPlay() {
    let word;
    for (let i = 0; i < categoriesPad.length; i++) {
        let categoryBtn = document.createElement("button")
        categoryBtn.innerHTML = categoriesPad[i]
        categoryBtn.addEventListener('click', function () {
            if (categoryBtn.innerHTML === "cars") {
                word = cars[Math.floor(Math.random() * cars.length)]
            } else if (categoryBtn.innerHTML === "cities") {
                word = cities[Math.floor(Math.random() * cities.length)]
            } else if (categoryBtn.innerHTML === "fruits") {
                word = fruits[Math.floor(Math.random() * fruits.length)]
            }
            let dashes = wordToPlay(word)

            document.getElementById('playWord').innerHTML = dashes

        })
        document.getElementById('categotries').appendChild(categoryBtn)

    }
    return word;
}
//Convert the rundamly generated word to dashes//
function wordToPlay(word) {
    let secretArray = [];
    for (let j = 0; j < word.length; j++) {
        secretArray.push('-')
    }
    return secretArray.join(' ')
}

//drawing hangman//
function baseBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(10, 290);
    ctx.lineTo(20, 290);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function vertBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(15, 290);
    ctx.lineTo(15, 190);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function horBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(15, 190);
    ctx.lineTo(40, 190);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function rod() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 190);
    ctx.lineTo(40, 185);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function head() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.begiPath();
    ctx.arc(40, 175, 10, 0, 2 * Math.PI);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function body() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 165);
    ctx.lineTo(40, 135);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function leftArm() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 160);
    ctx.lineTo(35, 155);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function rightArm() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 160);
    ctx.lineTo(45, 155);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function leftLeg() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 135);
    ctx.lineTo(35, 130);
    ctx.lineWidth = 10;
    ctx.stroke();
}
function rightLeg() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(40, 135);
    ctx.lineTo(45, 130);
    ctx.lineWidth = 10;
    ctx.stroke();
}
var hangmanArray = [baseBar, vertBar, horBar, rod, head, body, leftArm, rightArm, leftLeg, rightLeg]

function play() {

}
startPlay()

