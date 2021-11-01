const bars = document.querySelector(".bars")
const side = document.querySelector(".side")
const topBtn = document.querySelector(".top button");

const handleOpen=()=>{
    side.classList.toggle("open")
}

bars.addEventListener("click",handleOpen)
topBtn.addEventListener("click",handleOpen)