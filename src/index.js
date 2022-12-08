import './style.css';
import { addIcons, toDos, add } from './modules/ui.js';

// const toDoList = null
// localStorage.setItem("allEntries", JSON.stringify(toDoList));
addIcons();
toDos();
document.querySelector('#addBtn').addEventListener('click', add);
document.querySelector('#refreshBtn').addEventListener('click', toDos);
