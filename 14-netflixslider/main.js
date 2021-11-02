const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const carouselBox = document.querySelector(".carousel-box");
const btns = document.querySelectorAll(".sliderButton");



let scrollPerClick;
let imagePadding=20;
let scrollAmout=0
const scrollLeft=()=>{
    carouselBox.scrollTo({
        top:0,
        left:(scrollAmout-=scrollPerClick),
        behavior:"smooth"
    })
    if(scrollAmout<0){
        scrollAmout=0;
    }
}
const scrollRight=()=>{
    if(scrollAmout<=carouselBox.scrollWidth-carouselBox.clientWidth){
        carouselBox.scrollTo({
            top:0,
            left:(scrollAmout+=scrollPerClick),
            behavior:"smooth" 
        })
    }
}

const showData=()=>{
    const boxItem = data.map(item=>{
        return `<img class="item" >${item}</img>`
    })
    carouselBox.innerHTML=boxItem;
    const itemSize =document.querySelector(".item");
    console.log(carouselBox.clientWidth)
    scrollPerClick=carouselBox.clientWidth;
}
const handleItem=(e)=>{
    const {type}=e.target.dataset;
    if(type==="left"){
        return scrollLeft();
    }
    if(type==="right"){
        return scrollRight()
    }
}

btns.forEach(btn=>btn,addEventListener("click",handleItem))
showData();