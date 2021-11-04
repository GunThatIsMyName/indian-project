import { getElement } from "./element.js";
import getPerson from "./help.js"


const randomBtn = getElement(".random-btn");

const showPerson=(person)=>{
    const img = getElement(".img");;
    const title = getElement(".title")
    const value = getElement(".value")
    img.src=person.image;
    title.textContent=`My name is`;
    value.textContent=person.name
    const btns = [...document.querySelectorAll(".item")]
    btns.map(item=>{
        const label=item.dataset.type;
        item.addEventListener("click",()=>{
            title.textContent=`My ${label} is`;
            value.textContent=person[label];
            btns.map(item=>item.classList.remove("active"))
            item.classList.add("active")
        })
    })
}

const getDetail = async()=>{
    const person = await getPerson()
    showPerson(person)
}
getDetail()
randomBtn.addEventListener("click",getDetail)