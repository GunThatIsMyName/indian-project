const btns = document.querySelectorAll(".btn-item")
const content = document.querySelectorAll(".content")


const removeAcitve=(what)=>{
    what.forEach(item=>{
        if(item.classList.contains("active")){
            return item.classList.remove("active")
        }
    })
}
const handleBtn=(e)=>{
    const {type}=e.target.dataset;
    removeAcitve(btns)
    removeAcitve(content)
    const element = document.querySelectorAll(`[data-type="${type}"]`)
    element.forEach(item=>{
        return item.classList.add("active")
    })
}

btns.forEach(btn=>{
    btn.addEventListener("click",handleBtn)
})

