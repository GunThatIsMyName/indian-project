const number = document.querySelector("section h2");
const btnBox = document.querySelector(".btn-container")

let currentNumber = 0;

const handleBox=(e)=>{
    const {type}=e.target.dataset;
    if(type==="decrese"){
        currentNumber--;
    }
    if(type==="reset"){
        currentNumber=0
    }
    if(type==="increase"){
        currentNumber++;
    }
    if(currentNumber <0){
        number.style.color="green";
    }
    if(currentNumber <0){
        number.style.color="green";
    }
    currentNumber<0? number.style.color ="green":number.style.color ="red";
    if(currentNumber===0){
        number.style.color ="black"
    }
    return number.textContent=currentNumber;
}

btnBox.addEventListener("click",handleBox)
