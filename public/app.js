const addbtn = document.getElementById('plus');
const input = document.getElementById('number');
const result = document.getElementById('current-result');
let currentResult = 0;
function ShowResult(currentResult){
    result.textContent = currentResult;
}
function addition(){
    currentResult = currentResult + input.value;
    ShowResult(currentResult);
}
addbtn.addEventListener('click',addition);
//if statement
let name1 = "Ali";
let lastName = "Ahmadi";
if(name1=="Ali" || lastName =="Hamidi"){
    // statement || or 
    //  and &&
    console.log("Hi Good noon");
}