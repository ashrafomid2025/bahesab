let name1 = "Ali";
let lastName = "Ahmadi";
const age = 23;
if(name1=="Ali" && lastName =="Hamidi"){
    // statement || or 
    //  and &&
    console.log("Hi Good noon"); //true 
}
else if (lastName ==="Ahmadi" && (age ===24 || (lastName ==="Qurbani") || age === 23)){
  console.log("Hi dear welcome to the class");  
}
else{
    console.log("YOu are not authorized")
}
// ternary operator 



lastName === "Ahmadi" ? console.log("Hi dear Ahamdi"):console.log("Who are you?");
