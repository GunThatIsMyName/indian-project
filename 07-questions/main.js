const btns = document.querySelectorAll(".question");
const answer = document.querySelector(".answer");

const openAnswer=(e)=>{
    if(e.target.nodeName!=="BUTTON")return;
    const node =e.target.parentNode.parentNode 
    node.classList.toggle("show")
    
}

btns.forEach(btn=>btn.addEventListener("click",openAnswer))


