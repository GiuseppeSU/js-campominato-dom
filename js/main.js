let grigliaDom = document.getElementById('griglia');
let button = document.getElementById('btn');
let reset = document.getElementById('reset');
let blacklist = [];




button.addEventListener('click' , function(){
    let livello = parseInt(document.querySelector('#livello').value);
    grigliaDom.innerHTML='';
    for (let i = 0; i < 16; i++){
        blacklist.push(generateUniqueRandomNumber(1,livello));
    }
    for (let i = 1; i < livello + 1; i++) {
        const quadrato = creazioneQuadrato(livello, i);
        quadrato.addEventListener( 'click', function (){
            
            console.log(i);
            if (blacklist.includes(i)){
                this.classList.add('bomba');

                 
            }else{
                this.classList.toggle('clicked');

            }
        });
        
        
        grigliaDom.append(quadrato);
    }
   
    console.log(blacklist);
})

reset.addEventListener('click' , function (){
    grigliaDom.innerHTML = '';

})



function creazioneQuadrato (livello, number) {
    let nuovoElemento = document.createElement('div');
    nuovoElemento.classList.add('square');
    nuovoElemento.innerHTML=number;
    
    if (isOddEven(number) == 'even') {
        nuovoElemento.classList.add('square-even');
    } else {
        nuovoElemento.classList.add('square-odd');
    }

    let cellPerSide = Math.sqrt(livello);
    nuovoElemento.style.width = `calc(100% / ${cellPerSide})`;
    nuovoElemento.style.height = `calc(100% / ${cellPerSide})`;
   
    return nuovoElemento;
    
}


function generateUniqueRandomNumber( min, max) {
    let randomNumber;
     
        let isValidNumber = false;

    

    while (!isValidNumber) {
        randomNumber = generateRandomNumber(min, max);
        if (!blacklist.includes(randomNumber)) {
            isValidNumber = true;
        }
    }

    return randomNumber;

}


function generateRandomNumber(min, max) {
    
        const number =  Math.floor(Math.random() * (max-min)) + min;
        console.log(number);

    
    return number;
}

function isOddEven(number) {
    if (number % 2 == 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


