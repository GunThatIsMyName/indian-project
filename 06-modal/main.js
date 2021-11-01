const container = document.querySelector(".container button");
const modal = document.querySelector(".modal")
const modalBtn = document.querySelector(".modal-container button");


const openModal=()=>{
    modal.classList.toggle("modal-open")
}
const handleModal=(e)=>{
    const dmodal=e.target.dataset.modal;
    if(!dmodal)return;
    openModal()
    
}
container.addEventListener("click",openModal)
modalBtn.addEventListener("click",openModal)
modal.addEventListener("click",handleModal)