export default class TodoStorage {
  addToDo = (newToDo) => {
    let toDos = JSON.parse(localStorage.getItem("allEntries"));
    if (toDos == null) toDos = [];
    localStorage.setItem("entry", JSON.stringify(newToDo));
    toDos.push(newToDo);
    console.log(toDos);
    localStorage.setItem("allEntries", JSON.stringify(toDos));
  };

  removeToDo = (index) => {
    const toDos = JSON.parse(localStorage.getItem("allEntries"));
    toDos.splice(index, 1);
    for(let i = index; i<toDos.length; i+=1){
      toDos[i].index = i+1
    }
    console.log(toDos)
    localStorage.setItem("allEntries", JSON.stringify(toDos));
  };
}