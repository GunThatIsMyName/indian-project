import people from "./data.js";

const personEle = document.querySelector(".container");
const btns = document.querySelectorAll(".btn")

const getPerson=(data)=>{
    const person = data.map((item,idx)=>{
        let position = "next";
        if(idx===0){
            position="active"
        }
        if(idx===data.length-1){
            position="prev"
        }
        const{img,name,job,text}=item;
        return`
        <article class="person-item ${position}">
            <img src=${img} alt="" class="person-img">
            <h2 class="name">${name}</h2>
            <h3 class="job">${job}</h3>
            <p class="desc">${text}</p>
        </article>
        `
    }).join("");
    personEle.innerHTML=person;
}
const handleBtn=(e)=>{
    const {type}=e.target.dataset;
    const active = document.querySelector(".active");
    const last =document.querySelector(".prev");
    let next = active.nextElementSibling;

    if(!next){
        next=personEle.firstElementChild;
    }
    active.classList.remove("active");
    last.classList.remove("prev");
    next.classList.remove("next");

    if(type==="right"){
        active.classList.add("prev");
        last.classList.add("next");
        next.classList.add("active");
    }
    if(type==="left"){
        active.classList.add("next");
        last.classList.add("active");
        next=last.previousElementSibling;
        next.classList.add("prev");
    }
}

btns.forEach(btn=>btn.addEventListener("click",handleBtn))
getPerson(people)