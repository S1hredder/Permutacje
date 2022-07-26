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
        function iloczyn_number(){
            const createIlocznynyRozlaczne = document.createElement("input");
            createIlocznynyRozlaczne.setAttribute("type","text");
            createIlocznynyRozlaczne.setAttribute("id","liczba");
            createIlocznynyRozlaczne.setAttribute("placeholder","Potęga");
            document.getElementById("iloczyn_number").appendChild(createIlocznynyRozlaczne);
            const createButtonAccept = document.createElement("button");
            const textButton = document.createTextNode("Oblicz");
            createButtonAccept.appendChild(textButton);
            createButtonAccept.setAttribute("id","obliczLiczbe");
            document.getElementById("iloczyn_number").appendChild(createButtonAccept);

            const obliczLiczbe = document.getElementById("obliczLiczbe");
            
            function obliczLiczbeFuncjca(){
                const liczbaValue = document.getElementById("liczba").value;
                let fArray = [];
                for(let i = 1; i<11; i++){
                    fArray.push(parseInt(document.getElementById("f"+i).value));
                }
                let iloczynyRozlaczneArray = [];
                let saveNumber = 0;
                if(liczbaValue === "1"){
                    for(let i = 0,rzad = 0,arrayLength = 0; i<fArray.length;i++){
                        let firstNumber = false;
                        console.log(fArray[i]);
                        for(let j = 1; j<=fArray.length; j++){
                            if(fArray[i] === j){
                                if(!firstNumber){
                                    saveNumber = i+1;
                                    console.log("saveNumber",saveNumber);
                                    iloczynyRozlaczneArray.push([]);
                                    iloczynyRozlaczneArray[rzad].push(i+1);
                                    firstNumber = true;
                                }

                                    i = fArray[i]-1;
                                    j = 0;
                                    iloczynyRozlaczneArray[rzad].push(i+1);
                                    console.log(i+1);
                                    //removefArray =  fArray.splice(i+1,1);
                                    //console.log(removefArray);
                                    if(i+1 === saveNumber){
                                        console.log("end!!");
                                        iloczynyRozlaczneArray[rzad].pop();
                                        console.log(iloczynyRozlaczneArray);
                                        arrayLength += iloczynyRozlaczneArray[rzad].length;
                                        // found index that wasn't use 
                                        //znajdź daną liczbe przez filtr jesli nie to weź ten index jutro 27.07.22
                                        let nextIndex = 0;
                                        rzad++;
                                        for(let g = 0, count = 0; g<fArray.length; g++){
                                            for(let k = 0; k<iloczynyRozlaczneArray[rzad].length;k++){
                                                //console.log(fArray[g],iloczynyRozlaczneArray[c][k])
                                                if(fArray[g] === iloczynyRozlaczneArray[c][k]){
                                                    console.log(iloczynyRozlaczneArray[c],k,true);
                                                    k = arrayLength;
                                                    count = 0;
                                                }else if(count < arrayLength){
                                                    count++;
                                                    nextIndex = g;
                                                }
                                                
                                                console.log("count",count,arrayLength);
                                                if(count === arrayLength){
                                                    console.log("essa")
                                                    g = fArray.length+1;
                                                }
                                            }
                                        }
                                        console.log("nextIndex",nextIndex);
                                        i = nextIndex-1;
                                        j = fArray.length+1;
                                        if(arrayLength === fArray.length){
                                            i = fArray.length+1;
                                            j = fArray.length+1;
                                        }
                                    }
                            }
                        }
                    }
                }




            }
                obliczLiczbe.addEventListener("click",obliczLiczbeFuncjca);
                //obliczLiczbe.addEventListener("click",timer);

        }
        
        
        iloczynyRozlaczne.addEventListener("click",iloczyn_number);


}

f_button.addEventListener("click",doButton);


