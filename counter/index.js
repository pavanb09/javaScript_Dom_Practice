let count = document.getElementById("number");

function increase(){
    count.textContent = parseInt(count.textContent)+1;
    if(count.textContent > 0){
    count.style.color = "green"}
    else if(count.textContent == 0){
        count.style.color = "black"
    }
    
}
function reset(){
    count.textContent = 0;
    if(count.textContent == 0){
        count.style.color = "black"
    }
}
function decrease(){
    count.textContent = parseInt(count.textContent)-1;
    if(count.textContent < 0){
    count.style.color = "red"}
     else if(count.textContent == 0){
        count.style.color = "black"
    }
    

}