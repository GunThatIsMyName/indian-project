const Router = document.querySelectorAll(".router span");
const navbar = document.querySelector(".navbar")

const handleRouter=(e)=>{
    const {textContent:value}=e.target;
    const name = value.toLowerCase();
    const route = document.querySelector(`.${name}`)
    let position = route.offsetTop-navbar.clientHeight;
    window.scrollTo({
        left:0,
        top:position,
        behavior:"smooth"
    })
}

Router.forEach(route=>{
    route.addEventListener("click",handleRouter)
})