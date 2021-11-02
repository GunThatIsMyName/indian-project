const form = document.querySelector("form");
const input = form.querySelector("input");
const items = document.querySelector(".items");
const section = document.querySelector(".section");
const clearAll = document.querySelector(".clear-btn");
const popup = document.querySelector(".popup");
const submitBtn = document.querySelector(".submitBtn");

let box = [];
let editMode = false;
let tempEdit;

const showContainer = (item) => {
  if (item.length >= 1) {
    section.classList.add("show-container");
  }
  if (item.length === 0) {
    section.classList.remove("show-container");
  }
};
const className = (name) => {
  popup.classList.add(name);
  popup.textContent = name;
  setTimeout(() => {
    popup.classList.remove(name);
  }, 1500);
};
const handleButton = (e) => {
  const { textContent: value } = e.target;
  const { id } = e.target.parentElement.parentElement;
  if (value === "Delete") {
    box = box.filter((item) => item.id !== parseFloat(id));
    paintItem(box);
    className("delete");
  }
  if (value === "Edit") {
    const hello = box.find((item) => item.id === parseFloat(id));
    tempEdit = hello;
    input.value = hello.text;
    editMode = true;
    submitBtn.textContent = "Edit";
    className("edit");
  }
};
const paintItem = (item) => {
    saveTolocal(item)
  showContainer(item);
  const mainList = item
    .map((tem) => {
      return `
        <div class="item" id=${tem.id} >
            <h2>${tem.text}</h2>
            <div class="btn-box">
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
        `;
    })
    .join("");
  items.innerHTML = mainList;
  const button = document.querySelectorAll(".btn-box");
  button.forEach((item) => item.addEventListener("click", handleButton));
};
const handleSubmit = (e) => {
  e.preventDefault();
  const { value } = input;
  if (!value) return;
  input.value = "";
  if (editMode) {
      const newHello = {...tempEdit,text:value}
      box.map(item=>{
          if(item.id===newHello.id){
              item.text=value;
          }
      })
      editMode=false;
      submitBtn.textContent = "Submit";
      className("add");
    return paintItem(box)
  }
  console.log("eidit");
  const newItem = { text: value, id: Math.random() };
  box.push(newItem);
  paintItem(box);
  className("add");
};

const saveTolocal=(data)=>{
    console.log(data)
    const local = localStorage.setItem("data",JSON.stringify(data));
    console.log(local);
}
const removeAll = () => {
  box = [];
  paintItem(box);
};

const init=()=>{
    const hello = JSON.parse(localStorage.getItem("data"));
    if(hello!==null){
        box=hello;
        paintItem(hello)
    }
}
clearAll.addEventListener("click", removeAll);
form.addEventListener("submit", handleSubmit);
init();
