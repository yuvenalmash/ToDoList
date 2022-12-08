import ToDo from "./toDo.js";
import TodoStorage from "./toDoStorage.js";
export const add = () => {
  console.log("add clicked");
  const input = document.getElementById("inputToDo").value;
  if (input === ""){return}
  let toDoList = JSON.parse(localStorage.getItem("allEntries"));
  let index = null;
  if (toDoList == null) {
    index = 1;
  } else {
    index = toDoList.length + 1;
  }
  const newToDo = new ToDo(input, false, index);
  const storage = new TodoStorage();
  storage.addToDo(newToDo);
  document.getElementById("inputToDo").value = "";
  toDos();
};