// Create alphabet pad //
let alphabetpad = function () {
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let element = document.getElementById('alphabet');
    let pad = document.createElement('ul');
        for(let i = 0; i < alphabet.length; i++){
            let letterButtons = document.createElement('li');
            letterButtons.innerHTML = alphabet[i];
            pad.appendChild(letterButtons);
            element.appendChild(pad);
        }
}

alphabetpad()
