import "./style.css";
import { addIcons, toDos, add } from "./modules/ui.js";
import TodoStorage from "./modules/toDoStorage.js";

const clearCompleted = () => {
  let toDoList = JSON.parse(localStorage.getItem("allEntries"));
  const complete = toDoList.filter((toDo) => toDo.completed == true);
  let indexes = []
  for (let i=0; i<complete.length; i+=1){
    let index = (complete[i].index)-1
    indexes.push(index)
  }

  for (let i = indexes.length - 1; i >= 0; i-=1)
    toDoList.splice(indexes[i], 1)

  for (let i = 0; i < toDoList.length; i+=1){
    toDoList[i].index = i+1
  }
  localStorage.setItem('allEntries', JSON.stringify(toDoList));
  toDos();
};

// const toDoList = null
// localStorage.setItem("allEntries", JSON.stringify(toDoList));
addIcons();
toDos();
document.querySelector("#addBtn").addEventListener("click", add);
document.querySelector("#refreshBtn").addEventListener("click", toDos);
document.querySelector("#clearBtn").addEventListener("click", clearCompleted);
