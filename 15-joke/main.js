const btn = document.querySelector(".btn")
const p = document.querySelector(".p")

const urlEndPoint="https://api.chucknorris.io/jokes/random"


const makeJoke=(urlEndPoint)=>{
    const xhr = new XMLHttpRequest();
}

btn.addEventListener("click",makeJoke)