export let minji = 0;

const btns = document.querySelector(".btns")
const title = document.querySelector(".title");

const handleClick=(e)=>{
    const {id}=e.target.dataset;
    if(id==="one"){
        minji++;
    }
    if(id==="two"){
        minji=0;
    }
    if(id==="three"){
        minji--;
    }
    return title.textContent=minji;
}
btns.addEventListener("click",handleClick)


// const handleOne = ()=>{
//     const hello = 1
//     return minjii=hello
// }
// const handleTwo = ()=>{
//     const hello2 = 2
//     return minjii=hello2
// }
// const handleThree = ()=>{
//     const hello3 = 3
//     return minjii=hello3
// }