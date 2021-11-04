const displayCocktail=(data)=>{
    const cocktails = document.querySelector(".cocktails");
    const hello = data.map(item=>{
        const{id,name,thumb}=item;
        return`
        <article class="cocktail">
            <a href="drink.html" >
                <img src="${thumb}" alt="" class="item">
            </a>
            <h3 class="item-name">${name}</h3>
        </article>
        `
    }).join("");
    cocktails.innerHTML=hello;
    return cocktails;
}

export default displayCocktail;