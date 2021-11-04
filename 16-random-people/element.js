export const getElement=(name)=>{
    const element = document.querySelector(name);
    if(element)return element;
    throw new Error("No Element")
}