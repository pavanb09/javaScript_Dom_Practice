let count = document.getElementById("number");

function increase(){
    let value = parseInt(count.textContent);
    value++;
    count.textContent = value;
    updateColors(value);
    
    
}
function reset(){
    let value = 0
    count.textContent = 0;
    updateColors(value)
    
}
function decrease(){
        
    let value = parseInt(count.textContent);
    value--;
    count.textContent = value;
    updateColors(value);
    
    

}

function updateColors(colorsValue){

    if(colorsValue < 0){
        count.style.color = "red"
    }else if(colorsValue > 0){
        count.style.color = "Green";
    }else{
        count.style.color = "black"
    }
}