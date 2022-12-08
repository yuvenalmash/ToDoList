import "./style.css";
import { toDos, addIcons } from "./modules/ui.js";
import { add } from "./modules/add.js";
import { edit } from "./modules/edit.js"


import menuIcon from "./images/menu.png";
import refreshIcon from "./images/refresh2.png";
import enterIcon from "./images/enter.png";
import binIcon from "./images/recycle-bin.png";
import saveIcon from "./images/save1.png"

// const addToHtml = (child, parentId) => {
//   const parent = document.getElementById(parentId);
//   parent.innerHTML += child;
// };

// const addIcons = () => {
//   const refresh = new Image();
//   refresh.src = refreshIcon;
//   const enter = new Image();
//   enter.src = enterIcon;
//   const child = `<a id="refreshBtn" href="#" class="icons">${refresh.outerHTML}</a>`;
//   const child2 = `<a id="addBtn" href="#" class="icons">${enter.outerHTML}</a>`;
//   addToHtml(child, "header");
//   addToHtml(child2, "input");
// };

// const clearToDos = () => {
//   const child = "";
//   const parent = document.getElementById("toDos");
//   parent.innerHTML = child;
// };

// const listToDo = (toDoList, index) => {
//   const toDo = toDoList[index];
//   const menu = new Image();
//   menu.src = menuIcon;
//   const bin = new Image();
//   bin.src = binIcon;
//   const save = new Image();
//   save.src = saveIcon;
//   const child = `
//     <div class="toDo" id="toDo${index}"> 
//       <div>
//         <input type="checkbox">
//         <div>
//           <p id="description${index}" style="display:block;" onclick="edit(${index})">${toDo.description}</p>
//           <input  id="descriptionInput${index}" class="descriptionInput" type="text" style="display:none;border=none;" value="${toDo.description}">
//         </div>
//       </div> 
//       <div>
//         <a id="menuBtn${index}" style="display:block;" href="#">${menu.outerHTML}</a>
//         <a id="saveBtn${index}" style="display:none;" onclick="save${index}" href="#">${save.outerHTML}</a>
//         <a id="binBtn${index}" style="display:none;" onclick="remove(${index})" href="#">${bin.outerHTML}</a>
//       </div>
//     </div>`;
//   addToHtml(child, "toDos");
// };


// const toDos = () => {
//   clearToDos();
//   const toDoList = JSON.parse(localStorage.getItem("allEntries"));
//   if (toDos == null) toDos = [];
//   for (let i = 0; i < toDoList.length; i += 1) {
//     listToDo(toDoList, i);
//     addToHtml("<hr>", "toDos");
//   }
//   console.log(JSON.parse(localStorage.getItem("allEntries")))
// };


// const edit = (index) => {
//   console.log("edit clicked")
//   toDos();
//   const menuIcon = document.getElementById(`menuBtn${index}`);
//   menuIcon.style.display = "none";
//   const binIcon = document.getElementById(`binBtn${index}`);
//   binIcon.style.display = "block";
//   const saveIcon = document.getElementById(`saveBtn${index}`);
//   saveIcon.style.display = "block"
//   const row = document.getElementById(`toDo${index}`)
//   row.style.background = "rgb(233, 222, 128)"


//   const p = document.getElementById(`description${index}`)
//   const input = document.getElementById(`descriptionInput${index}`)
//   p.style.display = "none"
//   input.style.display = "block"
// };
window.edit = edit

const save = (index) => {
  const input = document.getElementById(`descriptionInput${index}`).value;
  if (input === ""){return}
  let toDoList = JSON.parse(localStorage.getItem("allEntries"));
  toDoList[index].description = input
  localStorage.setItem("allEntries", JSON.stringify(toDos));
  toDos()
}

window.save = save


const remove = (index) => {
  console.log('remove clicked')
  const storage = new TodoStorage
  storage.removeToDo(index)
  toDos()
}
window.remove = remove


addIcons();
toDos();
document.querySelector("#addBtn").addEventListener("click", add);
document.querySelector("#refreshBtn").addEventListener("click", toDos);
console.log(JSON.parse(localStorage.getItem("allEntries")));
