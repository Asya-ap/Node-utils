let text = ['Hello', 'Princess', '1sec', 'has', 'passed'];

function createText(element){ 
        if(element != text){
            return [];
        } else{
         return text + createText(++text);
        }  
}

console.log(createText(text));

setTimeout(createText, 1000);