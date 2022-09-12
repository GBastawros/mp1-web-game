// Create alphabet pad //
var letters = document.getElementById('alphabet');
function alphabetpad() {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (let i = 0; i < alphabet.length; i++) {
        let letterButtons = document.createElement('button');
        letterButtons.innerHTML = alphabet[i];
        letterButtons.addEventListener('click', function () {
            for (let i = 0; i < wordArray.length; i++) {
                if (wordArray[i] === letterButtons.innerHTML) {
                    console.log(dashes)
                   
                //     let x = document.getElementById('playWord').innerHTML
                //     let y = x.split('') 
                //     console.log(y)
                //     y.splice(y[i],1,wordArray[i]);
                //     // y[i] = wordArray[i]
                // //    x[i] = letterButtons.innerHTML
                   console.log(i)
                   console.log (letterButtons.innerHTML)
                }
            }
        })

        letters.appendChild(letterButtons);
    }
}
alphabetpad()
// Start Play by selecting a category to create a random word//
const cars = ['chevrolet', 'ford', 'mercedes', 'subaru', 'toyota'];
const cities = ['madison', 'chicago', 'cairo', 'manchester'];
const fruits = ['banana', 'mango', 'apple']
const categoriesPad = ["cars", "cities", "fruits"];
// const categories = [cars, cities, fruits];

let word;
let categoriesDiv = document.getElementById('categotries')
let playWordP = document.getElementById('playWord')
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
           console.log(word)
             let dashes = wordToPlay(word)
            playWordP.innerHTML = dashes.join('')
        })
        categoriesDiv.appendChild(categoryBtn)
    }




// function startPlay() {
//     let word;
//     for (let i = 0; i < categoriesPad.length; i++) {
//         let categoryBtn = document.createElement("button")
//         categoryBtn.innerHTML = categoriesPad[i]
//         categoryBtn.addEventListener('click', function () {
//             if (categoryBtn.innerHTML === "cars") {
//                 word = cars[Math.floor(Math.random() * cars.length)]
//             } else if (categoryBtn.innerHTML === "cities") {
//                 word = cities[Math.floor(Math.random() * cities.length)]
//             } else if (categoryBtn.innerHTML === "fruits") {
//                 word = fruits[Math.floor(Math.random() * fruits.length)]
//             }
//             console.log(word)
//             let dashes = wordToPlay(word)
//             document.getElementById('playWord').innerHTML = dashes.join('')
//         })
//         document.getElementById('categotries').appendChild(categoryBtn)

//     }
//     return word;
// }
// startPlay()


//Convert the rundamly generated word to dashes//
let wordArray = [];

function wordToPlay(word) {
    wordArray = word.split('')
    let secretArray = [];
    for (let j = 0; j < word.length; j++) {
        secretArray.push('-')
    }
    return secretArray
}

//drawing hangman//
function baseBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(10, 140);
    ctx.lineTo(100, 140);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function vertBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(15, 140);
    ctx.lineTo(15, 10);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function horBar() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(13, 10);
    ctx.lineTo(150, 10);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function rod() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 10);
    ctx.lineTo(148, 30);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function head() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.beginPath();
    ctx.arc(148, 45, 15, 0, 2 * Math.PI);
    ctx.stroke();
}
function body() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 60);
    ctx.lineTo(148, 100);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function leftArm() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 68);
    ctx.lineTo(135, 88);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function rightArm() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 68);
    ctx.lineTo(161, 88);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function leftLeg() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 100);
    ctx.lineTo(135, 118);
    ctx.lineWidth = 3;
    ctx.stroke();
}
function rightLeg() {
    const element = document.getElementById('hangman');
    ctx = element.getContext("2d");
    ctx.moveTo(148, 100);
    ctx.lineTo(161, 118);
    ctx.lineWidth = 3;
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