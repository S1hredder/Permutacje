const f_button = document.getElementById("f_button");
const g_button = document.getElementById("g_button");

let buttonActiveF = false;
let buttonActiveG = false;

function click_button_f(){
    
    const textNodeArray = ["iloczyny rozłaczne","rzędy elementów",
    "fg","znak permutacji"]

    if(!f_button.classList.contains("activ")){
        f_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            createButton.setAttribute("id","buttonF"+i);
            document.getElementById("do_button").appendChild(createButton);
        }
        buttonActiveF = true;
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        f_button.classList.remove("activ");
        let inputWynik = document.getElementById("div");
        if(inputWynik != null){
            inputWynik.parentNode.removeChild(inputWynik);
        }
    }
    if(g_button.classList.contains("activ")){
        g_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
    }
}


function click_button_g(){
    
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów",
    "gf","znak permutacji"]

    if(!g_button.classList.contains("activ")){
        g_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            createButton.setAttribute("id","buttonG"+i);
            document.getElementById("do_button").appendChild(createButton);
        }
        buttonActiveG = true;
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        g_button.classList.remove("activ");
    }
    if(f_button.classList.contains("activ")){
        f_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
    }
}
f_button.addEventListener("click",click_button_f);
g_button.addEventListener("click",click_button_g);


function doButton(){
    const iloczynyRozlaczne = document.getElementById("buttonF0");
    const rzedyElementow = document.getElementById("buttonF1");
    const fg = document.getElementById("buttonF2");
    const znakPermutacji = document.getElementById("buttonF3");
    let count = 0;
    let countF = [0,0,0,0];
    function utworzInputOblicz(elem){
        if(count > 0){
            let divObliczenia = document.getElementById("divObliczenia");
            divObliczenia.parentNode.removeChild(divObliczenia);
            count = 0;
        }
    
        const createDiv = document.createElement("divObliczenia")
        createDiv.setAttribute("id","divObliczenia");
        document.getElementById("inputWynik").appendChild(createDiv);
        for(let i = 0; i<4; i++){            
            let elementRemove = document.getElementById("buttonF"+i);
            elementRemove.classList.remove("activ");

            if(elem.currentTarget.id === "buttonF"+i){
                count++;
                document.getElementById("buttonF"+i).classList.add("activ");
                //create div
                //create input
                const createIlocznynyRozlaczne = document.createElement("input");
                createIlocznynyRozlaczne.setAttribute("type","text");
                createIlocznynyRozlaczne.setAttribute("id","liczba");
                createIlocznynyRozlaczne.setAttribute("placeholder","Potęga");
                document.getElementById("divObliczenia").appendChild(createIlocznynyRozlaczne);
                //create Button
                const createButtonAccept = document.createElement("button");
                const textButton = document.createTextNode("Oblicz");
                createButtonAccept.appendChild(textButton);
                createButtonAccept.setAttribute("id","oblicz");
                document.getElementById("divObliczenia").appendChild(createButtonAccept);
                //of button if click twice 
                countF[i]++;
                let filter = countF.filter(element => element === 1);
                if(filter.length > 1){
                    countF.forEach(function(part,index){
                        this[index] = 0;
                    },countF);
                    countF[i]++;
                }
                if(countF[i] > 1){
                    elementRemove.classList.remove("activ");
                    countF.forEach(function(part,index){
                        this[index] = 0;
                    },countF);
                    let inputWynik = document.getElementById("divObliczenia");
                    inputWynik.parentNode.removeChild(inputWynik);
                    count = 0;
                    //console.log("dobrze");
                }
            }
        }


    }

    function utworzArray(){
        let fArray = [];
        for(let i = 1; i<11; i++){
            fArray.push(parseInt(document.getElementById("f"+i).value));
        }
        return fArray;
    }
    
    let obliczaniePotegiJeden = (array) =>{
        let iloczynyRozlaczneArray = [];
        let saveNumber = 0;
        for(let i = 0,rzad = 0,arrayLength = 0; i<array.length;i++){
            let firstNumber = false;
            for(let up = 1; up<=array.length; up++){
                console.log("f= ",array[i],"up= ",up);
                if(array[i] === up){
                    if(!firstNumber){
                        saveNumber = i+1;
                        //console.log("saveNumber",saveNumber);
                        iloczynyRozlaczneArray.push([]);
                        iloczynyRozlaczneArray[rzad].push(i+1);
                        firstNumber = true;
                    }
                    i = array[i]-1;
                    up = 0;
                    iloczynyRozlaczneArray[rzad].push(i+1);
                    if(i+1 === saveNumber){
                        iloczynyRozlaczneArray[rzad].pop();
                        // found index that wasn't use 
                        //znajdź daną liczbe przez filtr jesli nie to weź ten index jutro 27.07.22
                        let iloczynyRozlaczneArray1d = [].concat(...iloczynyRozlaczneArray);
                        for(let g = 0; g<array.length; g++){
                            //for(let k = 0; k<iloczynyRozlaczneArray.length; k++){
                            const foundNumber = (element) => element === array[g];
                            if(!iloczynyRozlaczneArray1d.some(foundNumber)){
                                i = g;
                                up = g+1;
                                g = array.length;
                                firstNumber = false;
                            }
                        }
                        arrayLength += iloczynyRozlaczneArray[rzad].length;
                        if(arrayLength === array.length){
                            i = array.length+1;
                            up = array.length+1;
                        }
                        rzad++;
                    }
                }
            }
        }
        return iloczynyRozlaczneArray
    }
                
    function wynik(){
        console.log(obliczaniePotegiJeden(utworzArray()));
    }
    let obliczFunkcja = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynik);
    }
                
    if(iloczynyRozlaczne !== null){
        iloczynyRozlaczne.addEventListener("click",utworzInputOblicz);
        iloczynyRozlaczne.addEventListener("click",utworzArray);        
        iloczynyRozlaczne.addEventListener("click",obliczFunkcja);      
    }
    if(rzedyElementow !== null){
        rzedyElementow.addEventListener("click",utworzArray);        
        rzedyElementow.addEventListener("click",utworzInputOblicz);     
        rzedyElementow.addEventListener("click",obliczFunkcja);  
    }
    if(fg !== null){
        fg.addEventListener("click",utworzArray);        
        fg.addEventListener("click",utworzInputOblicz);     
        fg.addEventListener("click",obliczFunkcja);
    } 
    if(znakPermutacji !== null){
        znakPermutacji.addEventListener("click",utworzArray);        
        znakPermutacji.addEventListener("click",utworzInputOblicz);     
        znakPermutacji.addEventListener("click",obliczFunkcja);  
    }  

}
f_button.addEventListener("click",doButton);
