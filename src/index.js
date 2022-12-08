import "./style.css";
import { toDos, addIcons } from "./modules/ui.js";
import { add } from "./modules/add.js";


addIcons();
toDos();
document.querySelector("#addBtn").addEventListener("click", add);
document.querySelector("#refreshBtn").addEventListener("click", toDos);
console.log(JSON.parse(localStorage.getItem("allEntries")));
