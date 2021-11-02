const btns = document.querySelectorAll(".btns button");
const containers = document.querySelectorAll(".container");

const slides = document.querySelectorAll(".slide");

slides.forEach((slide,idx)=>{
    slide.style.left=`${idx*100}%`
})

let counter = 0;

const carousel=(type)=>{
    if(type==="left"){
        counter--;
    }else{
        counter++;
    }
    if(counter<=0){
        counter=0;
    }
    if(counter>=slides.length){
        counter=slides.length-1;
    }
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
}

const handleBtn=(e)=>{
    const {type}=e.target.dataset;
    carousel(type);
}
btns.forEach(btn=>btn.addEventListener("click",handleBtn))