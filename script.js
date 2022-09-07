// Create alphabet pad //
function alphabetpad() {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        
        for(let i = 0; i < alphabet.length; i++){
            letterButtons = document.createElement('button');
            letterButtons.innerHTML = alphabet[i];
            document.getElementById('alphabet').appendChild(letterButtons);
        }
}
alphabetpad()

// Start Play by selecting a category to create a random word//
const cars =['chervrolet', 'ford', 'mercedes', 'subaru','toyota'];
const cities =['madison', 'chicago','cairo','manchester'];
const fruits =['banana','mango','apple']
const categoriesPad = ["cars", "cities","fruits"];

function startPlay (){
    let word;
    for(let i = 0 ; i< categoriesPad.length; i++){
        let categoryBtn = document.createElement("button")
        categoryBtn.innerHTML = categoriesPad[i]
        categoryBtn.addEventListener('click' , function(){
            if(categoryBtn.innerHTML === "cars"){
                word = cars[Math.floor(Math.random()*cars.length)]
            }else if(categoryBtn.innerHTML === "cities"){
                word = cities[Math.floor(Math.random()*cities.length)]
            }else if(categoryBtn.innerHTML === "fruits"){
                 word = fruits[Math.floor(Math.random()*fruits.length)]
            }
        })
        document.getElementById('categotries').appendChild(categoryBtn)
    }
    return word
}
startPlay()