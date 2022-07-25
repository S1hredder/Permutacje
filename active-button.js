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
            document.getElementById("iloczyn_number").appendChild(createIlocznynyRozlaczne);
            const createButtonAccept = document.createElement("button");
            const textButton = document.createTextNode("Oblicz");
            createButtonAccept.appendChild(textButton);
            createButtonAccept.setAttribute("id","obliczLiczbe");
            document.getElementById("iloczyn_number").appendChild(createButtonAccept);

            const obliczLiczbe = document.getElementById("obliczLiczbe");
            
            function obliczLiczbeFuncjca(){
                const obliczLiczbeValue = document.getElementById("liczba").value;
                console.log(obliczLiczbeValue);
            }
                obliczLiczbe.addEventListener("click",obliczLiczbeFuncjca);

        }
        
        
        iloczynyRozlaczne.addEventListener("click",iloczyn_number);


}

f_button.addEventListener("click",doButton);


