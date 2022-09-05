// Create alphabet pad //
function alphabetpad() {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let pad = document.createElement('ul');
        for(let i = 0; i < alphabet.length; i++){
            let letterButtons = document.createElement('li');
            letterButtons.innerHTML = alphabet[i];
            pad.appendChild(letterButtons);
            document.getElementById('alphabet').appendChild(pad);
        }
}
alphabetpad()

// create categories pad//
var cars =['chervrolet', 'ford', 'mercedes', 'subaru','toyota']
var cities =['madison', 'chicago','cairo','manchester']
var categoriesPad = [cars, cities]
    function catSelect (){
        for(let i = 0 ; i< categoriesPad.length; i++){
        let category = document.createElement("button")
            category.textContent = categoriesPad[i]
            category.addEventListener=('click' , startPlay)
            document.getElementById('categotries').appendChild(category)
        }
    }
catSelect()

//create a random word from selected category//
function startPlay(){
    let word = categoriesPad[i][Math.floor(Math.random() * categoriesPad[i].length)];
}
startPlay()
