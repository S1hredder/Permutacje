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
                console.time("obliczLiczbeFuncjca");
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
                        for(let up = 1; up<=fArray.length; up++){
                            console.log("f= ",fArray[i],"up= ",up);
                            if(fArray[i] === up){
                                if(!firstNumber){
                                    saveNumber = i+1;
                                    console.log("saveNumber",saveNumber);
                                    iloczynyRozlaczneArray.push([]);
                                    iloczynyRozlaczneArray[rzad].push(i+1);
                                    firstNumber = true;
                                }

                                    i = fArray[i]-1;
                                    up = 0;
                                    iloczynyRozlaczneArray[rzad].push(i+1);
                                    if(i+1 === saveNumber){
                                        console.log("end!!");
                                        iloczynyRozlaczneArray[rzad].pop();
                                        // found index that wasn't use 
                                        //znajdź daną liczbe przez filtr jesli nie to weź ten index jutro 27.07.22
                                        let iloczynyRozlaczneArray1d = [].concat(...iloczynyRozlaczneArray);
                                        for(let g = 0; g<fArray.length; g++){
                                        //for(let k = 0; k<iloczynyRozlaczneArray.length; k++){
                                            const foundNumber = (element) => element === fArray[g];
                                            if(!iloczynyRozlaczneArray1d.some(foundNumber)){
                                                console.log("iloczynyRozlaczneArray",iloczynyRozlaczneArray1d,fArray[g]);
                                                i = g;
                                                up = g+1;
                                                g = fArray.length;
                                                firstNumber = false;
                                            }
                                        //
                                       }
                                       arrayLength += iloczynyRozlaczneArray[rzad].length;
                                       if(arrayLength === fArray.length){
                                        i = fArray.length+1;
                                        up = fArray.length+1;
                                    }
                                       rzad++;
                                    }
                                    console.log(iloczynyRozlaczneArray);
                            }
                        }
                    }
                }




                console.timeEnd("obliczLiczbeFuncjca");
            }
                obliczLiczbe.addEventListener("click",obliczLiczbeFuncjca);
                //obliczLiczbe.addEventListener("click",timer);

        }
        
        
        iloczynyRozlaczne.addEventListener("click",iloczyn_number);


}

f_button.addEventListener("click",doButton);


