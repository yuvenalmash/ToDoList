import './style.css';
import { addIcons, toDos, add } from './modules/ui.js';
import TodoStorage from './modules/toDoStorage.js';

const clear = () =>{
  const storage = new TodoStorage();
  storage.clearCompleted()
  toDos()
}

addIcons();
toDos();
document.querySelector('#addBtn').addEventListener('click', add);
document.querySelector('#refreshBtn').addEventListener('click', toDos);
document.querySelector('#clearBtn').addEventListener('click', clear);
