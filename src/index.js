import './style.css';
import { addIcons, toDos, add } from './modules/ui.js';

const clearCompleted = () => {
  let toDoList = JSON.parse(localStorage.getItem('allEntries'));
  toDoList = toDoList.filter((toDo) => toDo.completed === false);

  for (let i = 0; i < toDoList.length; i += 1) {
    toDoList[i].index = i + 1;
  }
  localStorage.setItem('allEntries', JSON.stringify(toDoList));
  toDos();
};

addIcons();
toDos();
document.querySelector('#addBtn').addEventListener('click', add);
document.querySelector('#refreshBtn').addEventListener('click', toDos);
document.querySelector('#clearBtn').addEventListener('click', clearCompleted);
