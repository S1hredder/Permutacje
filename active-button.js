const f_button = document.getElementById("f_button");
const g_button = document.getElementById("g_button");

function click_button_f(){
    
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów",
    "fg","znak permutacji"]

    if(!f_button.classList.contains("activ")){
        f_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            createButton.setAttribute("id","buttonF"+i);
            document.getElementById("do_button").appendChild(createButton);
            g_button.classList.remove("activ");
        }
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonF"+i);
            console.log(removeButton);
            removeButton.parentNode.removeChild(removeButton);
        }
        f_button.classList.remove("activ");
        g_button.classList.remove("activ");
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
            f_button.classList.remove("activ");
        }
    }else {
        let removeButton;
        for(let i=0; i<textNodeArray.length; i++){
            removeButton = document.getElementById("buttonG"+i);
            console.log(removeButton);
            removeButton.parentNode.removeChild(removeButton);
        }
        g_button.classList.remove("activ");
        f_button.classList.remove("activ");
    }
}
f_button.addEventListener("click",click_button_f);
g_button.addEventListener("click",click_button_g);