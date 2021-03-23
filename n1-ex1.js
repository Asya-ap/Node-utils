// Ex1. Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon

function repeatText(){
    console.log(`Hello Princess has passed 1 sec`);
    setTimeout(repeatText, 1000);
}

let time = setTimeout(repeatText, 1000);
//clearTimeout(time);


 

