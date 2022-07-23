const f_button = document.getElementById("f_button");
const g_button = document.getElementById("g_button");

let buttonBool= true;

function click_button(){
    //f_button.style.background = "green";
    //f_button.style.color = "red";
    const textNodeArray = ["iloczny rozłaczne","rzędy elementów","fg","znak permutacji"]
    if(buttonBool){
        f_button.classList.add("activ");
        for(let i =0; i<textNodeArray.length; i++){
            const createButton = document.createElement("button");
            const textNode = document.createTextNode(textNodeArray[i]);
            createButton.appendChild(textNode);
            document.getElementById("do_button").appendChild(createButton);
        }
    }
    buttonBool = false;

}

f_button.addEventListener("click",click_button);
