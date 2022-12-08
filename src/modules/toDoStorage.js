export default class TodoStorage {
  addToDo = (newToDo) => {
    let toDos = JSON.parse(localStorage.getItem('allEntries'));
    if (toDos == null) toDos = [];
    localStorage.setItem('entry', JSON.stringify(newToDo));
    toDos.push(newToDo);
    localStorage.setItem('allEntries', JSON.stringify(toDos));
  };

  removeToDo = (index) => {
    const toDos = JSON.parse(localStorage.getItem('allEntries'));
    toDos.splice(index, 1);
    for (let i = index; i < toDos.length; i += 1) {
      toDos[i].index = i + 1;
    }
    localStorage.setItem('allEntries', JSON.stringify(toDos));
  };

  saveToDo = (index, input) => {
    const toDos = JSON.parse(localStorage.getItem('allEntries'));
    toDos[index].description = input;
    localStorage.setItem('allEntries', JSON.stringify(toDos));
  };
}
