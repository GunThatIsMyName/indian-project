let arraws = document.querySelectorAll(".arrow");
console.log(arraws)
arraws.forEach(arrow=>{
    arrow.style.left=`${Math.floor(Math.random()*99)}vw`;
    arrow.style.top=`${Math.floor(Math.random()*99)}vh `;
})