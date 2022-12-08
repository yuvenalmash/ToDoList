import { toDos } from "./ui.js";

export const edit = (index) => {
  console.log("edit clicked")
  toDos();
  const menuIcon = document.getElementById(`menuBtn${index}`);
  menuIcon.style.display = "none";
  const binIcon = document.getElementById(`binBtn${index}`);
  binIcon.style.display = "block";
  const saveIcon = document.getElementById(`saveBtn${index}`);
  saveIcon.style.display = "block"
  const row = document.getElementById(`toDo${index}`)
  row.style.background = "rgb(233, 222, 128)"

  const p = document.getElementById(`description${index}`)
  const input = document.getElementById(`descriptionInput${index}`)
  p.style.display = "none"
  input.style.display = "block"
};

export const save = (index) => {
  const input = document.getElementById(`descriptionInput${index}`).value;
  if (input === ""){return}
  console.log(input)
  let toDoList = JSON.parse(localStorage.getItem("allEntries"));
  console.log(toDoList[index].description)
  toDoList[index].description = input
  localStorage.setItem("allEntries", JSON.stringify(toDos));
  toDos()
}

