import displayCocktail from "./display.js";
const endPoint = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a";
const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const form = document.querySelector(".form");
const search = document.querySelector(".search");

const handleForm=(e)=>{
    e.preventDefault()
    const {value}=search;
    getCocktails(`${searchUrl}${value}`)
}

const getCocktails = async(url)=>{
    console.log(url)
    const response = await fetch(url);
    const {drinks} = await response.json();
    if(!drinks){
        const cocktails = document.querySelector(".cocktails");
        return cocktails.innerHTML=`<h1>Nope</h1>`;
    }
    if(drinks){
        const data = drinks.map(item=>{
            const{idDrink:id,strDrink:name,strDrinkThumb:thumb}=item;
            return {id,name,thumb};
        })
        const hello = displayCocktail(data)
        console.log(hello)
    }
}

form.addEventListener("keyup",handleForm)
getCocktails(endPoint);