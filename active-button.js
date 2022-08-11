const f_button = document.getElementById("f_button");
const g_button = document.getElementById("g_button");
const gf_button = document.getElementById("gf_button");
const fg_button = document.getElementById("fg_button");

let buttonActiveF = false;
let buttonActiveG = false;
let buttonActiveGF = false;
let buttonActiveFG = false;
function click_button_f(){
    
    const textNodeArray = ["iloczyny rozłaczne","rzędy elementów","znak permutacji"]

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
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(g_button.classList.contains("activ")){
        g_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            removeButton.parentNode.removeChild(removeButton);
            let divObliczenia = document.getElementById("divObliczenia");
            if(divObliczenia != null){
                divObliczenia.parentNode.removeChild(divObliczenia);
            }
        }
    }
    if(gf_button.classList.contains("activ")){
        gf_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonGF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(fg_button.classList.contains("activ")){
        fg_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonFG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
}
function click_button_g(){
    
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów","znak permutacji"]

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
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(f_button.classList.contains("activ")){
        f_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(fg_button.classList.contains("activ")){
        fg_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonFG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(gf_button.classList.contains("activ")){
        gf_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonGF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
}
function click_button_gf(){
    
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów","znak permutacji"]

    if(!gf_button.classList.contains("activ")){
        gf_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            createButton.setAttribute("id","buttonGF"+i);
            document.getElementById("do_button").appendChild(createButton);
        }
        buttonActiveGF = true;
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonGF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        gf_button.classList.remove("activ");
    }
    if(f_button.classList.contains("activ")){
        f_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(g_button.classList.contains("activ")){
        g_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(fg_button.classList.contains("activ")){
        fg_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonFG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
}
function click_button_fg(){
    
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów","znak permutacji"]

    if(!fg_button.classList.contains("activ")){
        fg_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            createButton.setAttribute("id","buttonFG"+i);
            document.getElementById("do_button").appendChild(createButton);
        }
        buttonActiveFG = true;
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonFG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        fg_button.classList.remove("activ");
    }
    if(f_button.classList.contains("activ")){
        f_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(g_button.classList.contains("activ")){
        g_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
    if(gf_button.classList.contains("activ")){
        gf_button.classList.remove("activ");
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonGF"+i);
            removeButton.parentNode.removeChild(removeButton);
        }
        let divObliczenia = document.getElementById("divObliczenia");
        if(divObliczenia != null){
            divObliczenia.parentNode.removeChild(divObliczenia);
        }
    }
}
f_button.addEventListener("click",click_button_f);
g_button.addEventListener("click",click_button_g);
gf_button.addEventListener("click",click_button_gf);
fg_button.addEventListener("click",click_button_fg);


function doButtonF(){
    const iloczynyRozlaczne = document.getElementById("buttonF0");
    const rzedyElementow = document.getElementById("buttonF1");
    const znakPermutacji = document.getElementById("buttonF2");
    let count = 0;
    let countF = [0,0,0,0];

    function utworzInputOblicz(elem){
        if(count > 0){
            let divObliczenia = document.getElementById("divObliczenia");
            divObliczenia.parentNode.removeChild(divObliczenia);
            count = 0;
        }
        const createDiv = document.createElement("div")
        createDiv.setAttribute("id","divObliczenia");
        document.getElementById("inputWynik").appendChild(createDiv);
        for(let i = 0; i<3; i++){            
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
                //off button if click twice 
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
                    let divObliczenia = document.getElementById("divObliczenia");
                    divObliczenia.parentNode.removeChild(divObliczenia);
                    count = 0;
                }
            }
        }


    }

    let utworzArray =() =>{
        let fArray = [];
        for(let i = 1; i<11; i++){
            fArray.push(parseInt(document.getElementById("f"+i).value));
        }
        return fArray;
    }
    let obliczaniePotegiJeden = (array) =>{
        let iloczynArray = [];
        let firstNumber = 1;
        let index = 0;
        let countNumber = 0;
        ///found number 
        for(let i = 0; i<array.length; i++){
            iloczynArray.push([]);
            do{
                iloczynArray[i].push(array[index]);
                //console.log("push",firstNumber,array[index]);
                if(firstNumber !== array[index]){
                    index = array[index]-1;
                    //console.log(index);
                }
            }while(firstNumber !== array[index])
                iloczynArray[i].unshift(firstNumber);
                if(iloczynArray[i][0] === iloczynArray[i][1]){
                    iloczynArray[i].shift(firstNumber);
                }
            //console.log(iloczynArray);
            let iloczynArray1D = [].concat(...iloczynArray);
            //console.log("length",iloczynArray1D.length,array);
            for(let g = 0; g<array.length; g++){
                for(let j = 0; j<iloczynArray1D.length; j++){
                    if(array[g] !== iloczynArray1D[j]){
                        countNumber++;
                        console.log(array[g],iloczynArray1D[j],countNumber);
                    }
                    if(array[g] === iloczynArray1D[j]){
                        //console.log(array[g],iloczynArray1D[j],countNumber);
                        countNumber = 0;
                        break;
                    }
                    if(countNumber === iloczynArray1D.length){
                        firstNumber = g+1;
                        //console.log("wynik",firstNumber);
                        index = g;
                        //console.log("brak",firstNumber,index);
                        g = array.length;
                        countNumber = 0;
                    }
                }
            }
            if(iloczynArray1D.length >= array.length){
                i = array.length;
            }
        }
        return iloczynArray
    }

    let obliczRzadElementow = (array) =>{
        let iloczynyRozlaczneArray = obliczaniePotegiJeden(array);
        //console.log(iloczynyRozlaczneArray);
        let NWW = [];
        let NWWTimes = [];
        for(let i = 0; i<iloczynyRozlaczneArray.length; i++){
            NWW[i] = iloczynyRozlaczneArray[i].length;
            NWWTimes.push(1);
        }
        const NWWCopy = [...NWW];
        const functionNWW = (arr) => arr.every(v => v === arr[0]);
        let indexL = 0;
        let indexR = 1;
        while(!functionNWW(NWW)){
            if(NWW[indexL] > NWW[indexR]){
                NWWTimes[indexR]++
                NWW[indexR] = NWWCopy[indexR]*NWWTimes[indexR];
            }else if(NWW[indexL] < NWW[indexR]){
                NWWTimes[indexL]++;
                NWW[indexL] = NWWCopy[indexL]*NWWTimes[indexL];
            }else if(NWW[indexL] === NWW[indexR]){
                indexL++;
                indexR++;
                if(NWW.length === indexR){
                    indexL = 0;
                    indexR = 1;
                }
            }
        }
        return NWW;
    }

    let sgn = (array,potega) =>{
        let rzad = obliczRzadElementow(array);
        let znaki = [];
        //nieparzyste to +1 parzyste -1
        console.log("to?",rzad); 
        for(let i = 0; i<rzad.length; i++){
            if(rzad[i] % 2 === 0){
                znaki.push(-1);
            }else {
                znaki.push(1);   
            }
        }
        let znak = znaki.reduce(
            (previousValue, currentValue) => previousValue * currentValue);
            znak = Math.pow(znak,potega);
        return znak
    };
                
    function wynik(){
        console.log(obliczaniePotegiJeden(utworzArray()));
    }
    function wynikRzadElementow(){
        console.log(obliczRzadElementow(utworzArray()));
    }
    function wynikSgn(){
        let potega = document.getElementById("liczba").value;
        console.log(sgn(utworzArray(),potega));
    }

    function wywolanieSgn(){
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikSgn);
    }
    let obliczFunkcja = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynik);
    }

    let wywolanieRzadElementow = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikRzadElementow );
    }
                
    if(iloczynyRozlaczne !== null){
        iloczynyRozlaczne.addEventListener("click",utworzInputOblicz);
        iloczynyRozlaczne.addEventListener("click",utworzArray);        
        iloczynyRozlaczne.addEventListener("click",obliczFunkcja);      
    }
    if(rzedyElementow !== null){
        rzedyElementow.addEventListener("click",utworzArray);        
        rzedyElementow.addEventListener("click",utworzInputOblicz);     
        rzedyElementow.addEventListener("click",wywolanieRzadElementow);  
    }
    if(znakPermutacji !== null){
        znakPermutacji.addEventListener("click",utworzArray);        
        znakPermutacji.addEventListener("click",utworzInputOblicz);     
        znakPermutacji.addEventListener("click",wywolanieSgn);  
    }  

}
f_button.addEventListener("click",doButtonF);

function doButtonG(){
    const iloczynyRozlaczne = document.getElementById("buttonG0");
    const rzedyElementow = document.getElementById("buttonG1");
    const znakPermutacji = document.getElementById("buttonG2");
    let count = 0;
    let countG = [0,0,0,0];

    function utworzInputOblicz(elem){
        if(count > 0){
            let divObliczenia = document.getElementById("divObliczenia");
            divObliczenia.parentNode.removeChild(divObliczenia);
            count = 0;
        }
        const createDiv = document.createElement("div");
        createDiv.setAttribute("id","divObliczenia");
        document.getElementById("inputWynik").appendChild(createDiv);
        for(let i = 0; i<3; i++){            
            let elementRemove = document.getElementById("buttonG"+i);
            elementRemove.classList.remove("activ");
            if(elem.currentTarget.id === "buttonG"+i){
                count++;
                document.getElementById("buttonG"+i).classList.add("activ");
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
                //off button if click twice 
                countG[i]++;
                let filter = countG.filter(element => element === 1);
                if(filter.length > 1){
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    countG[i]++;
                }
                if(countG[i] > 1){
                    elementRemove.classList.remove("activ");
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    let divObliczenia = document.getElementById("divObliczenia");
                    divObliczenia.parentNode.removeChild(divObliczenia);
                    count = 0;
                }
            }
        }


    }

    let utworzArray =() =>{
        let fArray = [];
        for(let i = 1; i<11; i++){
            fArray.push(parseInt(document.getElementById("g"+i).value));
        }
        return fArray;
    }
    
    let obliczaniePotegiJeden = (array,potega) =>{
        console.log(potega);
        let iloczynArray = [];
        let firstNumber = 1;
        let index = 0;
        let countNumber = 0;
        ///found number 
        for(let i = 0; i<array.length; i++){
            iloczynArray.push([]);
            do{
                iloczynArray[i].push(array[index]);
                if(firstNumber !== array[index]){
                    index = array[index]-1;
                    //console.log(index);
                }
            }while(firstNumber !== array[index])
                iloczynArray[i].unshift(firstNumber);
                if(iloczynArray[i][0] === iloczynArray[i][1]){
                    iloczynArray[i].shift(firstNumber);
                }
            //console.log(iloczynArray);
            let iloczynArray1D = [].concat(...iloczynArray);
            //console.log(iloczynArray1D.length);
            for(let g = 0; g<array.length; g++){
                for(let j = 0; j<iloczynArray1D.length; j++){
                    if(array[g] !== iloczynArray1D[j]){
                        countNumber++;
                    }
                    if(array[g] === iloczynArray1D[j]){
                        countNumber = 0;
                        break;
                    }
                    if(countNumber === iloczynArray1D.length){
                        firstNumber = g+1;
                        //console.log("wynik",firstNumber);
                        index = g;
                        g = array.length;
                        countNumber = 0;

                    }
                }
            }
            if(iloczynArray1D.length >= array.length){
                i = array.length;
            }
        }
        let iloczynArrayDlgPoj = [];
        for(let i = 0; i<iloczynArray.length; i++){
            iloczynArrayDlgPoj.push(iloczynArray[i].length);
        }
        let moduloArray = [];
        for(let i = 0; i<iloczynArrayDlgPoj.length; i++){
            let obliczenia = potega % iloczynArrayDlgPoj[i];
            moduloArray.push(obliczenia);
        }
        console.log("moduloArray",moduloArray);
        console.log(iloczynArrayDlgPoj);
        console.log(iloczynArray);
        let iloczynArrayPotega = [];
        let iloczynArrayPotega1d = [];
        let littleArray = [];
        for(let i = 0; i <iloczynArray.length; i++){
            let indexInput = 0;
            iloczynArrayPotega.push([]);
            console.log("test");
            for(let j = 0; j<iloczynArray[i].length; j++){
                let element = iloczynArray[i][indexInput];
                console.log("start",element,indexInput);
                indexInput += moduloArray[i];
                iloczynArrayPotega1d.push(element);
                littleArray.push(element);
                console.log("element",element);
                if(indexInput >= iloczynArray[i].length){
                    let lastIndexElement = indexInput-moduloArray[i];
                    let obliczeniaIndex = (moduloArray[i] - ( (iloczynArray[i].length-1) -lastIndexElement) )-1;
                    //console.log("lastIndexElement", (moduloArray[i]- ( (iloczynArray[i].length-1) -lastIndexElement) ) );
                    indexInput = obliczeniaIndex;
                    // found the same number
                    element = iloczynArray[i][indexInput];
                    let sameNumber = iloczynArrayPotega1d.filter(elem => elem === element);
                    let k  = 0;
                    if(Boolean(sameNumber.length)){
                        iloczynArrayPotega[i].push(littleArray);
                        littleArray = []
                    }
                    while(Boolean(sameNumber.length)){
                        element = iloczynArray[i][k];
                        sameNumber = iloczynArrayPotega1d.filter(elem => elem === element);
                        //console.log("element!!!",Boolean(sameNumber.length),sameNumber,element,k);
                        indexInput = k;
                        k++;
                    }
                    console.log("sameNumber",sameNumber);
                    //element = iloczynArray[i][obliczeniaIndex];
                }
                console.log(element);
                //console.log("element",element);
            }
            iloczynArrayPotega[i].push(littleArray);
            littleArray = []
            /*
            iloczynArrayPotega.push([]);
            for(let j = 0; j<iloczynArrayDlgPoj[i];j++){
                let indexIloczyn = iloczynArray[i][j]-1;
                let element = array[indexIloczyn];
                console.log(indexIloczyn,element);
                console.log("iloczynArrayDlgPoj",moduloArray[i]);
                if( moduloArray[i] === 0 || moduloArray[i] === 1){
                    console.log("element",iloczynArray[i]);
                    //iloczynArrayPotega.shift();
                    console.log(iloczynArrayPotega,iloczynArray[i]);
                    iloczynArrayPotega[i].push(iloczynArray[i]);
                    break;
                }else {
                    //iloczynArrayPotega.push([]);
                    for(let k = 0; k<moduloArray[i]-1; k++){
                        indexIloczyn = element;
                        element = array[indexIloczyn-1];
                    }
                    iloczynArrayPotega[i].push(element);
                }
                console.log("zapisz",indexIloczyn,element);
            }
            */
        }
        console.log(iloczynArrayPotega);
        return iloczynArrayPotega
    }

    let obliczRzadElementow = (array) =>{
        let iloczynyRozlaczneArray = obliczaniePotegiJeden(array);
        //console.log(iloczynyRozlaczneArray);
        let NWW = [];
        let NWWTimes = [];
        for(let i = 0; i<iloczynyRozlaczneArray.length; i++){
            NWW[i] = iloczynyRozlaczneArray[i].length;
            NWWTimes.push(1);
        }
        const NWWCopy = [...NWW];
        const functionNWW = (arr) => arr.every(v => v === arr[0]);
        let indexL = 0;
        let indexR = 1;
        while(!functionNWW(NWW)){
            if(NWW[indexL] > NWW[indexR]){
                NWWTimes[indexR]++
                NWW[indexR] = NWWCopy[indexR]*NWWTimes[indexR];
            }else if(NWW[indexL] < NWW[indexR]){
                NWWTimes[indexL]++;
                NWW[indexL] = NWWCopy[indexL]*NWWTimes[indexL];
            }else if(NWW[indexL] === NWW[indexR]){
                indexL++;
                indexR++;
                if(NWW.length === indexR){
                    indexL = 0;
                    indexR = 1;
                }
            }
        }
        return NWW;
    }

    
    let sgn = (array,potega) =>{
        let rzad = obliczRzadElementow(array);
        let znaki = [];
        //nieparzyste to +1 parzyste -1
        console.log("to?",rzad); 
        for(let i = 0; i<rzad.length; i++){
            if(rzad[i] % 2 === 0){
                znaki.push(-1);
            }else {
                znaki.push(1);   
            }
        }
        let znak = znaki.reduce(
            (previousValue, currentValue) => previousValue * currentValue);
            znak = Math.pow(znak,potega);
        return znak
    };
                
    function wynik(){
        let potega = document.getElementById("liczba").value;
        const wynikInput = obliczaniePotegiJeden(utworzArray(),potega);
        let wynikString ="";
        console.log(wynikInput.length);
        for(let i = 0; i<wynikInput.length; i++){
            for(let j = 0; j<wynikInput[i].length; j++){
                if(wynikInput[i][j].length !== 0){
                    wynikString += "("+wynikInput[i][j].toString()+")";
                }
            }
        }
        const createWynik = document.createElement("p");
        const createWynikNode = document.createTextNode(wynikString);
        createWynik.appendChild(createWynikNode);
        const wynik = document.getElementById("wynik");
        wynik.appendChild(createWynik);

        //console.log(obliczaniePotegiJeden(utworzArray(),potega));
    }
    function wynikRzadElementow(){
        console.log(obliczRzadElementow(utworzArray()));
    }
    let obliczFunkcja = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynik);
    }

    let wywolanieRzadElementow = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikRzadElementow );
    }
    function wynikSgn(){
        let potega = document.getElementById("liczba").value;
        console.log(sgn(utworzArray(),potega));
    }

    function wywolanieSgn(){
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikSgn);
    }
                
    if(iloczynyRozlaczne !== null){
        iloczynyRozlaczne.addEventListener("click",utworzInputOblicz);
        iloczynyRozlaczne.addEventListener("click",utworzArray);        
        iloczynyRozlaczne.addEventListener("click",obliczFunkcja);      
    }
    if(rzedyElementow !== null){
        rzedyElementow.addEventListener("click",utworzArray);        
        rzedyElementow.addEventListener("click",utworzInputOblicz);     
        rzedyElementow.addEventListener("click",wywolanieRzadElementow);  
    }
    if(znakPermutacji !== null){
        znakPermutacji.addEventListener("click",utworzArray);        
        znakPermutacji.addEventListener("click",utworzInputOblicz);     
        znakPermutacji.addEventListener("click",wywolanieSgn);  
    }  

}
g_button.addEventListener("click",doButtonG);

function doButtonGF(){
    const iloczynyRozlaczne = document.getElementById("buttonGF0");
    const rzedyElementow = document.getElementById("buttonGF1");
    const znakPermutacji = document.getElementById("buttonGF2");
    let count = 0;
    let countG = [0,0,0,0];

    function utworzInputOblicz(elem){
        if(count > 0){
            let divObliczenia = document.getElementById("divObliczenia");
            divObliczenia.parentNode.removeChild(divObliczenia);
            count = 0;
        }
        const createDiv = document.createElement("div");
        createDiv.setAttribute("id","divObliczenia");
        document.getElementById("inputWynik").appendChild(createDiv);
        for(let i = 0; i<3; i++){            
            let elementRemove = document.getElementById("buttonGF"+i);
            elementRemove.classList.remove("activ");
            if(elem.currentTarget.id === "buttonGF"+i){
                count++;
                document.getElementById("buttonGF"+i).classList.add("activ");
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
                //off button if click twice 
                countG[i]++;
                let filter = countG.filter(element => element === 1);
                if(filter.length > 1){
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    countG[i]++;
                }
                if(countG[i] > 1){
                    elementRemove.classList.remove("activ");
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    let divObliczenia = document.getElementById("divObliczenia");
                    divObliczenia.parentNode.removeChild(divObliczenia);
                    count = 0;
                }
            }
        }


    }

    let utworzArray =() =>{
        //dwa razy się wywołuje?
        let fArray = [];
        let gArray = [];
        let array = [];
        for(let i = 1; i<11; i++){
            fArray.push(parseInt(document.getElementById("f"+i).value));
        }
        for(let i = 1; i<11; i++){
            gArray.push(parseInt(document.getElementById("g"+i).value));
        }
        let index = 0;
        for(let i = 0; i<gArray.length; i++){
            index = fArray[i]-1;
            array[i] = gArray[index]; 
        }
        //console.log(array);
        return array;
    }
    
    let obliczaniePotegiJeden = (array) =>{
        let iloczynArray = [];
        let firstNumber = 1;
        let index = 0;
        let countNumber = 0;
        ///found number 
        for(let i = 0; i<array.length; i++){
            iloczynArray.push([]);
            do{
                iloczynArray[i].push(array[index]);
                if(firstNumber !== array[index]){
                    index = array[index]-1;
                    //console.log(index);
                }
            }while(firstNumber !== array[index])
                iloczynArray[i].unshift(firstNumber);
                if(iloczynArray[i][0] === iloczynArray[i][1]){
                    iloczynArray[i].shift(firstNumber);
                }
            //console.log(iloczynArray);
            let iloczynArray1D = [].concat(...iloczynArray);
            //console.log(iloczynArray1D.length);
            for(let g = 0; g<array.length; g++){
                for(let j = 0; j<iloczynArray1D.length; j++){
                    if(array[g] !== iloczynArray1D[j]){
                        countNumber++;
                    }
                    if(array[g] === iloczynArray1D[j]){
                        countNumber = 0;
                        break;
                    }
                    if(countNumber === iloczynArray1D.length){
                        firstNumber = g+1;
                        //console.log("wynik",firstNumber);
                        index = g;
                        g = array.length;
                        countNumber = 0;

                    }
                }
            }
            if(iloczynArray1D.length >= array.length){
                i = array.length;
            }
        }
        return iloczynArray
    }

    let obliczRzadElementow = (array) =>{
        let iloczynyRozlaczneArray = obliczaniePotegiJeden(array);
        //console.log(iloczynyRozlaczneArray);
        let NWW = [];
        let NWWTimes = [];
        for(let i = 0; i<iloczynyRozlaczneArray.length; i++){
            NWW[i] = iloczynyRozlaczneArray[i].length;
            NWWTimes.push(1);
        }
        const NWWCopy = [...NWW];
        const functionNWW = (arr) => arr.every(v => v === arr[0]);
        let indexL = 0;
        let indexR = 1;
        while(!functionNWW(NWW)){
            if(NWW[indexL] > NWW[indexR]){
                NWWTimes[indexR]++
                NWW[indexR] = NWWCopy[indexR]*NWWTimes[indexR];
            }else if(NWW[indexL] < NWW[indexR]){
                NWWTimes[indexL]++;
                NWW[indexL] = NWWCopy[indexL]*NWWTimes[indexL];
            }else if(NWW[indexL] === NWW[indexR]){
                indexL++;
                indexR++;
                if(NWW.length === indexR){
                    indexL = 0;
                    indexR = 1;
                }
            }
        }
        return NWW;
    }

    let sgn = (array,potega) =>{
        let rzad = obliczRzadElementow(array);
        let znaki = [];
        //nieparzyste to +1 parzyste -1
        console.log("to?",rzad); 
        for(let i = 0; i<rzad.length; i++){
            if(rzad[i] % 2 === 0){
                znaki.push(-1);
            }else {
                znaki.push(1);   
            }
        }
        let znak = znaki.reduce(
            (previousValue, currentValue) => previousValue * currentValue);
            znak = Math.pow(znak,potega);
        return znak
    };
                
    function wynik(){
        console.log(obliczaniePotegiJeden(utworzArray()));
    }
    function wynikRzadElementow(){
        console.log(obliczRzadElementow(utworzArray()));
    }
    let obliczFunkcja = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynik);
    }

    let wywolanieRzadElementow = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikRzadElementow );
    }

    function wynikSgn(){
        let potega = document.getElementById("liczba").value;
        console.log(sgn(utworzArray(),potega));
    }

    function wywolanieSgn(){
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikSgn);
    }
                
    if(iloczynyRozlaczne !== null){
        iloczynyRozlaczne.addEventListener("click",utworzInputOblicz);
        iloczynyRozlaczne.addEventListener("click",utworzArray);        
        iloczynyRozlaczne.addEventListener("click",obliczFunkcja);      
    }
    if(rzedyElementow !== null){
        rzedyElementow.addEventListener("click",utworzArray);        
        rzedyElementow.addEventListener("click",utworzInputOblicz);     
        rzedyElementow.addEventListener("click",wywolanieRzadElementow);  
    }
    if(znakPermutacji !== null){
        znakPermutacji.addEventListener("click",utworzArray);        
        znakPermutacji.addEventListener("click",utworzInputOblicz);     
        znakPermutacji.addEventListener("click",wywolanieSgn);  
    }  

}
gf_button.addEventListener("click",doButtonGF);

function doButtonFG(){
    const iloczynyRozlaczne = document.getElementById("buttonFG0");
    const rzedyElementow = document.getElementById("buttonFG1");
    const znakPermutacji = document.getElementById("buttonFG2");
    let count = 0;
    let countG = [0,0,0,0];

    function utworzInputOblicz(elem){
        if(count > 0){
            let divObliczenia = document.getElementById("divObliczenia");
            divObliczenia.parentNode.removeChild(divObliczenia);
            count = 0;
        }
        const createDiv = document.createElement("div");
        createDiv.setAttribute("id","divObliczenia");
        document.getElementById("inputWynik").appendChild(createDiv);
        for(let i = 0; i<3; i++){            
            let elementRemove = document.getElementById("buttonFG"+i);
            elementRemove.classList.remove("activ");
            if(elem.currentTarget.id === "buttonFG"+i){
                count++;
                document.getElementById("buttonFG"+i).classList.add("activ");
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
                //off button if click twice 
                countG[i]++;
                let filter = countG.filter(element => element === 1);
                if(filter.length > 1){
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    countG[i]++;
                }
                if(countG[i] > 1){
                    elementRemove.classList.remove("activ");
                    countG.forEach(function(part,index){
                        this[index] = 0;
                    },countG);
                    let divObliczenia = document.getElementById("divObliczenia");
                    divObliczenia.parentNode.removeChild(divObliczenia);
                    count = 0;
                }
            }
        }


    }

    let utworzArray =() =>{
        //dwa razy się wywołuje?
        let fArray = [];
        let gArray = [];
        let array = [];
        for(let i = 1; i<11; i++){
            fArray.push(parseInt(document.getElementById("f"+i).value));
        }
        for(let i = 1; i<11; i++){
            gArray.push(parseInt(document.getElementById("g"+i).value));
        }
        let index = 0;
        for(let i = 0; i<fArray.length; i++){
            index = gArray[i]-1;
            array[i] = fArray[index]; 
        }
        //console.log(array);
        return array;
    }
    
    let obliczaniePotegiJeden = (array) =>{
        let iloczynArray = [];
        let firstNumber = 1;
        let index = 0;
        let countNumber = 0;
        ///found number 
        for(let i = 0; i<array.length; i++){
            iloczynArray.push([]);
            do{
                iloczynArray[i].push(array[index]);
                if(firstNumber !== array[index]){
                    index = array[index]-1;
                    //console.log(index);
                }
            }while(firstNumber !== array[index])
                iloczynArray[i].unshift(firstNumber);
                if(iloczynArray[i][0] === iloczynArray[i][1]){
                    iloczynArray[i].shift(firstNumber);
                }
            //console.log(iloczynArray);
            let iloczynArray1D = [].concat(...iloczynArray);
            //console.log(iloczynArray1D.length);
            for(let g = 0; g<array.length; g++){
                for(let j = 0; j<iloczynArray1D.length; j++){
                    if(array[g] !== iloczynArray1D[j]){
                        countNumber++;
                    }
                    if(array[g] === iloczynArray1D[j]){
                        countNumber = 0;
                        break;
                    }
                    if(countNumber === iloczynArray1D.length){
                        firstNumber = g+1;
                        //console.log("wynik",firstNumber);
                        index = g;
                        g = array.length;
                        countNumber = 0;
                    }
                }
            }
            if(iloczynArray1D.length >= array.length){
                i = array.length;
            }
        }
        return iloczynArray
    }

    let obliczRzadElementow = (array) =>{
        let iloczynyRozlaczneArray = obliczaniePotegiJeden(array);
        //console.log(iloczynyRozlaczneArray);
        let NWW = [];
        let NWWTimes = [];
        for(let i = 0; i<iloczynyRozlaczneArray.length; i++){
            NWW[i] = iloczynyRozlaczneArray[i].length;
            NWWTimes.push(1);
        }
        const NWWCopy = [...NWW];
        const functionNWW = (arr) => arr.every(v => v === arr[0]);
        let indexL = 0;
        let indexR = 1;
        while(!functionNWW(NWW)){
            if(NWW[indexL] > NWW[indexR]){
                NWWTimes[indexR]++
                NWW[indexR] = NWWCopy[indexR]*NWWTimes[indexR];
            }else if(NWW[indexL] < NWW[indexR]){
                NWWTimes[indexL]++;
                NWW[indexL] = NWWCopy[indexL]*NWWTimes[indexL];
            }else if(NWW[indexL] === NWW[indexR]){
                indexL++;
                indexR++;
                if(NWW.length === indexR){
                    indexL = 0;
                    indexR = 1;
                }
            }
        }
        return NWW;
    }
    
    let sgn = (array,potega) =>{
        let rzad = obliczRzadElementow(array);
        let znaki = [];
        //nieparzyste to +1 parzyste -1
        console.log("to?",rzad); 
        for(let i = 0; i<rzad.length; i++){
            if(rzad[i] % 2 === 0){
                znaki.push(-1);
            }else {
                znaki.push(1);   
            }
        }
        let znak = znaki.reduce(
            (previousValue, currentValue) => previousValue * currentValue);
            znak = Math.pow(znak,potega);
        return znak
    };
                
    function wynik(){
        console.log(obliczaniePotegiJeden(utworzArray()));
    }
    function wynikRzadElementow(){
        console.log(obliczRzadElementow(utworzArray()));
    }
    let obliczFunkcja = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynik);
    }

    let wywolanieRzadElementow = () =>{
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikRzadElementow );
    }
    function wynikSgn(){
        let potega = document.getElementById("liczba").value;
        console.log(sgn(utworzArray(),potega));
    }

    function wywolanieSgn(){
        let obliczExist = document.getElementById("oblicz");
        if(obliczExist != null)
        oblicz.addEventListener("click",wynikSgn);
    }
                
    if(iloczynyRozlaczne !== null){
        iloczynyRozlaczne.addEventListener("click",utworzInputOblicz);
        iloczynyRozlaczne.addEventListener("click",utworzArray);        
        iloczynyRozlaczne.addEventListener("click",obliczFunkcja);      
    }
    if(rzedyElementow !== null){
        rzedyElementow.addEventListener("click",utworzArray);        
        rzedyElementow.addEventListener("click",utworzInputOblicz);     
        rzedyElementow.addEventListener("click",wywolanieRzadElementow);  
    }
    if(znakPermutacji !== null){
        znakPermutacji.addEventListener("click",utworzArray);        
        znakPermutacji.addEventListener("click",utworzInputOblicz);     
        znakPermutacji.addEventListener("click",wywolanieSgn);  
    }  

}
fg_button.addEventListener("click",doButtonFG);