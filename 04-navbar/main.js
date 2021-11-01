const bars = document.querySelector(".bars")
const secondColumn = document.querySelector(".second")
const items = document.querySelectorAll(".item")
const item = document.querySelector(".item")

const handleClick=()=>{
    const size = items.length * item.clientHeight
    secondColumn.classList.toggle("second-active")
    if(secondColumn.classList.contains("second-active")){
        secondColumn.style.height=`${size}px`;
    }else{
        secondColumn.style.height=0;
    }
}

bars.addEventListener("click",handleClick)