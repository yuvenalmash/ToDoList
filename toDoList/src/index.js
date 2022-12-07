import _ from 'lodash';
import './style.css'
import menuIcon from './images/menu.png'
import refreshIcon from './images/refresh2.png'
import enterIcon from './images/enter.png'

const task1 = {description: "task1", completed: false, index: 1}
const task2 = {description: "task2", completed: false, index: 2}
const task3 = {description: "task3", completed: false, index: 3}
const task4 = {description: "task4", completed: false, index: 4}
const toDoList = [task1,task2,task3,task4]


const listToDo = (index) => {
  const toDo = toDoList[index]
  const menu = new Image();
  menu.src = menuIcon;
  const child = `
    <div id=toDo> 
    <div><input type="checkbox">${toDo.description}</div> 
    <a href="#">${menu.outerHTML}</a>
    </div>`;
  addToHtml(child,'toDos')
};

const addIcons = () => {
  const refresh = new Image();
  refresh.src = refreshIcon
  const enter = new Image()
  enter.src = enterIcon
  const child = `<a href="#" class="icons">${refresh.outerHTML}</a>`
  const child2 = `<a href="#" class="icons">${enter.outerHTML}</a>`
  addToHtml(child,'header')
  addToHtml(child2,'input')
}

const addToHtml = (child,parentId) => {
  const parent = document.getElementById(parentId);
  parent.innerHTML += child
}


for (let i=0; i<toDoList.length; i+=1){
  listToDo(i)
  addToHtml('<hr>','toDos')
}
addIcons()
